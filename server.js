'use strict';

const express = require('express');
const cors = require('cors');
const {CLIENT_ORIGIN} = require('./config');

const app = express();

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.get('/', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })


app.listen(8080);