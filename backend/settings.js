import 'dotenv/config';

export const settings = {
  "debug": true,
  "port": 5001,
  "errorStatus": 200,
  "restPrefix": "/api/",
  "idQueriesAsObjects": true,
  "saltPasswords": process.env.DB_SALTPW,
  "saltCookies": process.env.DB_SALTCOOKIES,
  "aclOn": true,
  "getAclRules": "SELECT * FROM acl",
  "dbType": "SQL",
  "dbEngine": "MySQL",
  "dbCredentials": {
    "host": "161.97.144.27",
    "port": 8002,
    "user": "root",
    "password": process.env.DB_PASSWORD,
    "database": "dbFilm"
  }
}