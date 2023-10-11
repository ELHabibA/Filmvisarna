/***
 *  RestDeleteRoutes
 *  - Delete routes for the REST api
 *  - How the routes should translate to SQL queries
 * 
 *  IMPORTANT:
 *  - Mark all parameters in routes with ':'-prefixes
 *  - Mark parameters that the prepared statements of the DB driver
 *    can handle in queries with ':'-prefixes
 *  - Mark other parameters in queries (table and column names,
 *    operators etc) with '::' prefixes (see the QueryCleaner class)
 */

export class RestDeleteRoutes {

  method = 'delete';

  deleteRow = {
    route: ':tableName/:id',
    query: 'DELETE FROM ::tableName WHERE id = :id'
  };

  deleteLogin = {
    route: 'login',
    query: '/see SpecialRoutes/'
  }

}