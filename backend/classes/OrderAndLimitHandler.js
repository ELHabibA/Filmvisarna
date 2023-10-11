/***
 *  OrderAndLimitHandler
 *  - Handle orderby and limit in url query parameters 
 *    (the part of the url after '?')
 *  - Clean the values 
 *  - Translate to ORDER BY and LIMIT parts in the SQL query
 */

export class OrderAndLimitHandler {

  static handle(query, req) {
    let { orderby, limit } = req.query;

    if (orderby) {
      // only allow  A-Z, a-z, 0-9, ',' and '-' in orderby
      orderby = orderby.replace(/[^\w,-]/g, '');
      // change column names prefixed by '-' to 'DESC'
      orderby = orderby.replace(/-(\w*)/g, '$1 DESC');
      // add to query
      query += ` ORDER BY ${orderby}`;
    }

    if (limit) {
      // only allow 0-9 and ',' in limit
      limit = limit.replace(/[^\d,]/g, '');
      // add to query
      query += ` LIMIT ${limit}`;
    }

    return query;
  }

}