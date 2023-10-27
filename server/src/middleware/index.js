const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const corsOptions = require('../config/corsConfig');
const credentials = require('../middleware/credentials');

const rootMiddleware = [
  (req, res, next) => {
    console.log({ cookies: req.cookies, url: req.url, body: req.body });
    next();

  },
  credentials,
  cors(corsOptions),
  express.json(),
  cookieParser()
];

module.exports = rootMiddleware;