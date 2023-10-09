const express = require('express');
//const mysql = require('mysql');
const db = require('./db.js');
const connection = require('./db.js');


const app = express();
const port = 8002; 

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Välkommen till din & min backend!');
});

app.listen(port, () => {
  console.log(`Servern lyssnar på port ${port}`);
});

function dbQuery(query, params = []) {

  if(params.constructor == Object) {
    let newParams = [];
    query = query.replace(/:\w*/g, param => {
      newParams.push(params[param.slice(1)]);
    return '?';
  });
  params = newParams; 
  }

return new Promise(resolve => {
  connection.execute(query, params, (err, result) =>
    resolve(err || result)
  );
  });
}

async function runExampleQueries() {

  // query with no parameters
  let result1 = await dbQuery(
    'SELECT * FROM ticketType'
  );
  console.log('\n', result1);
}

 runExampleQueries();