/***
 *  RestPostRoutes
 *  - Post routes for the REST api
 *  - How the routes should translate to SQL queries
 * 
 *  IMPORTANT:
 *  - Mark all parameters in routes with ':'-prefixes
 *  - Mark parameters that the prepared statements of the DB driver
 *    can handle in queries with ':'-prefixes
 *  - Mark other parameters in queries (table and column names,
 *    operators etc) with '::' prefixes (see the QueryCleaner class)
 * import,export inga require.
 */

export class RestPostRoutes {

  method = 'post';

  addRow = {
    route: ':tableName',
    query: [
      'INSERT INTO ::tableName (',
      reqBody => Object.keys(reqBody)
        .map(key => key.replace(/\W/g, '')),
      ') VALUES (',
      reqBody => Object.keys(reqBody)
        .map(key => ':' + key.replace(/\W/g, '')),
      ')'
    ]
  };

}