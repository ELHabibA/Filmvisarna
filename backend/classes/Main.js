/***
 *  Main
 *  - Read settings into a global variable
 *  - Start the web server 
 *  - Start the REST-api
 * 
 *  © 2023 Thomas Frank, 'Ironboy' 
 * 
 *  Example of how to create a generic REST-api
 *  that automatically creates routes for all tables and views
 *  + how to use prepared statements with parameters
 *  + own cleaning of parameters that can't be replaced 
 *    by prepared statements (dynamic table and column names etc)
 * 
 *  Also includes:
 *  - Password encryption of user passwords
 *  - Login/logout through special routes
 *  - ACL whitelisting (protect REST-routes based on user roles)
 */

import { readFileSync, readdirSync } from 'fs';
import { dirname, join as pathJoin } from 'path';
import { fileURLToPath } from 'url';
import {settings} from '../settings.js'

const __dirname = pathJoin(dirname(fileURLToPath(import.meta.url)), '../');

export class Main {

  constructor() {
    this.start();
  }

  async start() {
    global.settings = settings;
    process.chdir(__dirname);
    // dynamic import of correct db engine specific code
    let specific = await import(
      `./dbEngineSpecific/${settings.dbEngine}Query.js`
    );
    Object.assign(settings, specific);
    settings.sessionStore = await settings.provideStore();
    // dynamic import of correct db type specific code
    let path = `./classes/dbTypeSpecific/${settings.dbType}/`;
    let routeClasses = readdirSync(`${path}`);
    path = path.replace('classes/', '');
    for (let c of routeClasses) {
      let cName = c.slice(0, -3);
      settings[cName] = (await import(`${path}${c}`))[cName];
    }
    // dynamic import off Server and RestApi
    let { Server } = await import('./Server.js');
    let { RestApi } = await import('./RestApi.js');
    // create a web server and a REST API
    const server = new Server();
    global.server = server;
    new RestApi(server);
  }

}