import express from 'express';
import db from './db.js';
import connection from './db.js';
import { func } from 'prop-types';


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

//Hur få med bokningsnummer screeningId och userID i detta?
app.post('/newbooking', async function (req, res) {
  const { email } = req.body;
  
  const result = await dbQuery('INSERT INTO bookings ( email) VALUES (?)', [email]);

  
 res.json({ message: 'Bokning skapad framgångsrikt!' });
});
