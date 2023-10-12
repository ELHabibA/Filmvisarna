/***
 *  QueryRunner
 *  - Run all db queries in the REST-api as prepared statements
 *  - Answer REST requests with JSON data
 */

import { QueryCleaner } from "./QueryCleaner.js";
import { OrderAndLimitHandler } from "./OrderAndLimitHandler.js";
const {
  runQuery,
  cleanupErrorMessage,
  RestSpecialRoutes
} = global.settings;

export class QueryRunner {

  static async run(req, res, query, returnNotRespond, debug) {

    this.settings = global.settings;

    let { saltPasswords, errorStatus,
      idQueriesAsObjects } = this.settings;

    // send to SpecialRoutes to see if we should
    // treat the route in a special way
    // (change the query and/or the request body)
    if (!returnNotRespond) {
      RestSpecialRoutes.saltPasswords = saltPasswords;
      query = RestSpecialRoutes.handle(req, query);
    }

    // if some method in some class
    // has set req.responseDone return this
    // (and do not make a db query)
    if (req.responseDone) {
      req.responseDone.error && res.status(errorStatus);
      res.json(req.responseDone);
      return;
    }

    // do not allow 'id' in req.params or req.body 
    // if req.method is 'POST' (the db should set 
    // the id automatically when we create a new row) 
    req.method === 'POST' &&
      delete req.params.id, delete req.body.id;
    // if the query is an array, then combine to string 
    // (calling func parts)
    query instanceof Array && (query = query
      .map(x => x instanceof Function ? x(req.body) : x).join(''));
    // clean '::'-prefixed parameters in query
    query = QueryCleaner.clean(query, req);
    // add orderby and limit parts to the query
    query = OrderAndLimitHandler.handle(query, req);
    // try to run the query
    try {
      // debug log, if this.debug = true
      debug && console.log(
        '\n\n' + req.method, req.url,
        '\nparams', { ...req.params, ...req.body },
        '\nquery', query
      );
      // run the query
      let dbResponse = await runQuery(query, { ...req.body, ...req.params });
      // send the result of the query as json to the client
      dbResponse = req.doAfterQuery ?
        req.doAfterQuery(dbResponse) : dbResponse;
      if (returnNotRespond) { return dbResponse; }
      req.params.id && idQueriesAsObjects
        && (dbResponse = dbResponse[0]);
      res.json(dbResponse);
    }
    catch (error) {
      console.log("HHAHA", error)
      res.status(errorStatus);
      res.json({ error: cleanupErrorMessage(error + '') });
    }
  }

}