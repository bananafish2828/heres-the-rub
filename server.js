const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 3333;
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const userRouter = require('./server/router/userRouter.js');
const itineraryRouter = require('./server/router/itineraryRouter.js');

const app = express();

app.use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(morgan('dev'))
  .use(cors());

app.use((req, res, next) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', 0);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Jeaders', 'Content-Type');
  if (req.method === 'Options') {
    res.send(200);
  } else {
    return next();
  }
})

app.use('/users', userRouter);
app.use('/itinerary', itineraryRouter);

app.use(express.static(path.join(__dirname, './public')));

mongoose.connect(process.env.DB_URL, function(err) {
  if (err) {
    console.log('error connecting to database: ', err);
  } else { 
    console.log('successfully connected to MLab');
  }
});

app.listen(port, function(err) {
  if (err) {
    console.log('error connecting to server', err)
  } else {
    console.log('listening on port: ', port);
  }
})
