/***
 *  SqLite driver specific code
 *  - This should be the only code
 *    that is specific for SQLite
 */

import { existsSync, copyFileSync } from 'fs';
// driver
import Database from 'better-sqlite3';
// session storage in db
import store from 'better-express-store';
// connection placeholder
let db;

class SQliteQuery {

  static connect({ path }) {
    db = Database(path);
  }

  static async runQuery(query, parameters = {}) {
    // connect if not connected
    !db && SQliteQuery.connect(global.settings.dbCredentials);
    // prepare statement
    let stmt = db.prepare(query);
    // prepared statements use the all method if SELECT, otherwise run
    let method = query.trim().slice(0, 6) === 'SELECT' ? 'all' : 'run';
    // return the response
    return stmt[method](parameters);
  }

  static cleanupErrorMessage(message) {
    // cleanup error messages to not contain 'Sqlite'
    return message.replace('Sqlite', '');
  }

  static async provideStore() {
    // copy from if not exists logic
    let { path, copyFromIfNotExist: cp } =
      global.settings.dbCredentials
    !existsSync(path) && cp && existsSync(cp)
      && copyFileSync(cp, path);
    // provide a db store for the express-session module
    return store({ dbPath: path });
  }

}

const s = SQliteQuery;
export const runQuery = s.runQuery;
export const cleanupErrorMessage = s.cleanupErrorMessage;
export const provideStore = s.provideStore;