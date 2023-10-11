/***
 *  Special routes for Login/Logout
 *  - POST   login -> Login
 *  - GET    login -> Check who's logged in
 *  - DELETE login -> Logout
 */

export class RestLoginRoutes {

  // Login
  static POSTlogin(req) {
    if (req.session.user) {
      req.responseDone =
        { error: 'someone already logged in' };
      return;
    }
    this.encryptPassword(req);
    req.doAfterQuery = (dbResponse) => {
      let response = dbResponse.length ?
        dbResponse[0] : { error: 'No match' };
      response.error || delete response.password;
      // save user in session
      !response.error && (req.session.user = response);
      return response;
    }
    return `
      SELECT * FROM users
      WHERE email = :email AND password = :password
    `;
  }

  // Check logged in user
  static GETlogin(req) {
    req.responseDone =
      req.session.user ||
      { error: 'not logged in' };
  }

  // Logout
  static DELETElogin(req) {
    let loggedIn = req.session.user;
    delete req.session.user;
    req.responseDone = loggedIn ?
      { action: 'logged out' } :
      { error: 'no user logged in' };
  }

}