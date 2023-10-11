/***
 *  RestPutRoutes
 *  - Put/Patch routes for the REST api
 *  - How the routes should translate to SQL queries
 * 
 *  IMPORTANT:
 *  - Mark all parameters in routes with ':'-prefixes
 *  - Mark parameters that the prepared statements of the DB driver
 *    can handle in queries with ':'-prefixes
 *  - Mark other parameters in queries (table and column names,
 *    operators etc) with '::' prefixes (see the QueryCleaner class)
 */

export class RestPutRoutes {

  // the original meaning of the PUT request method 
  // -> change the whole item
  // the original meaning of the PATCH request method 
  // -> change  parts of item
  // but we just treat them as aliases... 
  methods = ['put', 'patch'];

  changeRow = {
    route: ':tableName/:id',
    query: [
      'UPDATE ::tableName SET ',
      reqBody => Object.keys(reqBody)
        .map(key => key.replace(/\W/g, '') +
          ' = :' + key.replace(/\W/g, '')),
      ' WHERE id = :id'
    ]
  };

}