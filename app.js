const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const feedRoutes = require('./routes/feed');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, Delete');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //application/json
app.use('/feed', feedRoutes);


app.listen(3000);
