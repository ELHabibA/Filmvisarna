/***
 *  Special routes
 *  - Handle special REST routes:
 *    - Encrypt user passwords
 *    - Handle login/logout routes
 *      (from  RestLoginRoutes)
 */

import crypto from 'crypto';
import { RestLoginRoutes } from './RestLoginRoutes.js';

export class RestSpecialRoutes {

  static handle(req, query) {
    ['GETlogin', 'POSTlogin', 'DELETElogin'].forEach(
      method => this[method] = RestLoginRoutes[method]);
    let tableName = req.url.split('/')[2];
    // check if we have a method named 
    // requestMethod + tableName and, if so, call it
    let methodName = req.method + tableName;
    return this[methodName] ?
      this[methodName](req, query) : query;
  }

  // Encrypt the password with safe one-way-encryption
  // (sha256) + salt (to avoid dictionary attacks)
  static encryptPassword(req) {
    let salt = this.saltPasswords;
    req.body.password = crypto.createHash('sha256')
      .update(req.body.password + salt).digest('hex');
  }

  // Create user, after encrpyting the password
  // and setting the userRole to member
  static POSTusers(req, query) {
    this.encryptPassword(req);
    req.body.userRole = 'member';
    return query;
  };

  // The same applies to changes to users as
  // when you create them... see previous comment
  static PUTusers(req, query) {
    return this.POSTusers(req, query);
  }

}