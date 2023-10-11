/***
 *  RestAclSecurity
 *  - Make REST routes allowed/forbidden according
 *    to the rules in the database table 'acl'
 */

import { QueryRunner } from './QueryRunner.js';

export class RestAclSecurity {

  static async check(req, res) {

    // read acl rules from db
    const q = global.settings.getAclRules;
    const rules = await QueryRunner.run(req, res, q, true);

    // info about query
    let urlSplit = req.url.split('/');
    let userRole = req.session.user?.userRole || 'visitor';
    let entity = urlSplit[2];
    let reqMethod = req.method;
    let id = urlSplit.length == 4 && +urlSplit[3];
    let userId = req.session.user?.id;
    let idMatchesUserId = id && userId && id === userId;

    // check query against rules
    let ok = !global.settings.aclOn || rules.some(
      ({ userRole: u, entity: e, requestMethod: r }) =>
        (u === '*' || u === userRole)
        && (r === '*' || r === reqMethod)
        && (
          (e === '*' || e === entity) ||
          (
            e.replace('/:loggedInId', '') === entity
            && idMatchesUserId
          )
        )
    );
    !ok && (req.responseDone = { error: 'forbidden' });
  }

}