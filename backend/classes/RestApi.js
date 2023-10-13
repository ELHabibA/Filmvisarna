/***
 *  RestApi
 *  - Connect to the database
 *  - Add REST routes to the web server based on info in
 *   'Rest...Routes' classes
 *  - Make every route call the QueryRunner
 */

import { QueryRunner } from './QueryRunner.js';
import { RestAclSecurity } from './RestAclSecurity.js';
const {
  RestGetRoutes,
  RestPostRoutes,
  RestPutRoutes,
  RestDeleteRoutes } = settings;

export class RestApi {

  constructor(server, settings) {
    const {
      restPrefix: prefix,
      debug
    } = global.settings;
    this.server = server;
    this.settings = settings;
    this.prefix = prefix;
    this.debug = debug;
    QueryRunner.settings = settings;
    // add routes
    this.addRoutes(
      RestGetRoutes, RestPostRoutes,
      RestPutRoutes, RestDeleteRoutes
    );
  }

  async addRoutes(...classes) {

    // our own special routes goes first
    global.server = server;
    await import("../specialRoutes/start.js");

    // loop through classes containing routes and add them
    for (let _class of classes) {
      let instance = new _class();
      let methods = instance.method ?
        [instance.method] : instance.methods;
      for (let { route, query } of Object.values(instance)) {
        if (!route || !query) { continue; }
        for (let method of methods) {
          this.server[method](this.prefix + route, async (req, res) => {
            await RestAclSecurity.check(req, res);
            await QueryRunner.run(req, res, query, false, this.debug);
          });
        }
      }
    }
  
    // if no route matches the query...
    this.server.all('/api/*', (req, res) => {
      res.status(this.settings.errorStatus);
      res.json({ error: 'no such route' });
    });
  }

}