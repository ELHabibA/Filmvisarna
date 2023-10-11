/***
 *  MySQL driver specific code
 *  - This should be the only code
 *    that is specific for SQLite
 */

// driver
import mysql from 'mysql2';
// session storage in db
import expressSession from 'express-session';
import Store from 'express-mysql-session';
// connection placeholder
let db;

class MySQLQuery {

  static connect(dbCredentials) {
    db = mysql.createPool(dbCredentials);
  }

  static runQuery(query, params = {}) {
    // connect if not connected
    !db && MySQLQuery.connect(global.settings.dbCredentials);
    // convert named params to unnamed 
    // (the db driver only support unnamed params)
    if (params.constructor === Object) {
      let newParams = [];
      query = query.replace(/:\w*/g, param => {
        newParams.push(params[param.slice(1)]);
        return '?';
      });
      params = newParams;
    }
    // run the query as a promise, allowing us to await it
    return new Promise(resolve => {
      db.execute(query, params, (err, result) =>
        resolve(err || result)
      );
    });
  }

  static cleanupErrorMessage(message) {
    // for now: no cleanup
    return message;
  }

  static async provideStore() {
    return new (Store(expressSession))(
      global.settings.dbCredentials
    );
  }

}

const s = MySQLQuery;
export const runQuery = s.runQuery;
export const cleanupErrorMessage = s.cleanupErrorMessage;
export const provideStore = s.provideStore;