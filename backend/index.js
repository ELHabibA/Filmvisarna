const express = require('express');
const app = express();
const port = 8002; 

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Välkommen till din & min backend!');
});

app.listen(port, () => {
  console.log(`Servern lyssnar på port ${port}`);
});
