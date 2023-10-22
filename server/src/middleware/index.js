const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const corsOptions = require('../config/corsConfig');
const credentials = require('../middleware/credentials');

const rootMiddleware = [
  credentials,
  cors(corsOptions),
  express.json(),
  cookieParser()
];

module.exports = rootMiddleware;