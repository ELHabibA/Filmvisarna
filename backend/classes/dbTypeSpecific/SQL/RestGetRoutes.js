/***
 *  RestGetRoutes
 *  - Get routes for the REST api
 *  - How the routes should translate to SQL queries
 * 
 *  IMPORTANT:
 *  - Mark all parameters in routes with ':'-prefixes
 *  - Mark parameters that the prepared statements of the DB driver
 *    can handle in queries with ':'-prefixes
 *  - Mark other parameters in queries (table and column names,
 *    operators etc) with '::' prefixes (see the QueryCleaner class)
 */

export class RestGetRoutes {

  method = 'get';

  allRowsFromTable = {
    route: ':tableName',
    query: 'SELECT * FROM ::tableName'
  };

  oneRowByIdFromATable = {
    route: ':tableName/:id',
    query: 'SELECT * FROM ::tableName WHERE id = :id'
  };

  searchByColumnValuesWithOperator = {
    route: ':table/:column/:operator/:value',
    query: `
      SELECT * FROM ::table
      WHERE ::column ::operator :value
    `
  };

}