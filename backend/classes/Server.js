/***
 *  Server
 *  - Create an Express-based web server
 */

// web server framework
import express from 'express';
// cookie -> session functionality 
import session from 'express-session';

export class Server {

  constructor() {
    let {
      port,
      saltCookies,
      errorStatus
    } = global.settings;
    // create the server
    const server = express();
    // turn on reading request bodies 
    // (through Express built in middleware express.json)
    server.use(express.json({ limit: '10MB' }));
    this.handleErrorsOnMalformedRequestBodies(
      server, errorStatus
    );
    // add session handling to our server
    server.use(session({
      secret: saltCookies,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: 'auto' },
      store: global.settings.sessionStore
    }));
    // start the server
    let startMessage = `Server listening on http://localhost:${port}`;
    server.listen(port, () => console.log(startMessage));
    return server;
  }

  handleErrorsOnMalformedRequestBodies(server, errorStatus) {
    // express.json throws an error on request bodies 
    // with malformed json  - we can catch these errors 
    // by adding our own middleware to Express
    server.use(function (error, req, res, next) {
      error && res.status(errorStatus);
      error ? res.json({ error: error + '' }) : next();
    });
  }

}