const express = require('express');
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

// async function runExampleQueries() {

//   // query with no parameters
//   let result1 = await dbQuery(
//     'SELECT * FROM ticketType'
//   );
//   console.log('\n', result1);

//   let result2 = await dbQuery(
//     'SELECT * FROM auditorium'
//   );
//   console.log('\n', result2);

//   let result3 = await dbQuery(
//     'SELECT * FROM dbFilm.movies WHERE title = :title',
//     {title:'Barbie'}
//   );
//   console.log('\n', result3);
  
// }

//  runExampleQueries();


// app.get('/api/movies', async (req, res) => {
//   let result = await dbQuery('SELECT * FROM movies');
//   res.json(result);
// });

// app.get('/api/movies/:id', async (req, res) => {
//   let result = await dbQuery('SELECT * FROM movies WHERE id = :id', req.params);
//   res.json(result);
// });




//GET routes - INGEN SÄKERHET PÅ DESSA
app.get('/api/:tableName', async (req, res) => {
  let result = await dbQuery(`SELECT * FROM ${req.params.tableName}`);
  res.json(result);
});

app.get('/api/:tableName/:id', async (req, res) => {
  let result = await dbQuery(`SELECT * FROM ${req.params.tableName} WHERE id = :id`, req.params);
  res.json(result);
});

//POST new ticketType - fungerar ej säker
app.post('/newtype', async function (req, res) {
  const { name, price } = req.body;
  let reqBody = await dbQuery('INSERT INTO ticketType(name, price) VALUES (?, ?)', [name, price])
  res.json(reqBody);
});