/***
 *  QueryCleaner
 *  - Clean those parameters that the DB Driver can't handle
 *    as part of prepared statments but are still user input
 *    (table and column names, operators etc)
 *  - Important - these should be marked with '::' in queries
 */

export class QueryCleaner {

  static clean(query, req) {
    let likeOperator = false;
    for (let [key, value] of Object.entries(req.params)) {
      if (key === 'operator') {
        // if operator param then make sure among ok/valid ops
        let okOps = ['like', '=', '!=', '>', '<', '>=', '<='];
        okOps.includes(value) || (value = '=');
        // remember if operator is like (+ uppercase it)
        likeOperator = value === 'like';
        likeOperator && req.params[key] === 'LIKE';
      }
      else {
        // all other parameters (except operator)
        // - only allow  A-Z, a-z and 0-9 in string values
        value = typeof value === 'string' ? value.replace(/\W/g, '') : value;
        // if likeOperator add % around value
        likeOperator && (req.params[key] = `%${value}%`);
      }
      query = query.split(`::${key}`).join(value);
    }
    return query;
  }

}