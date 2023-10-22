require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const usersRouter = require('./routes/users');
const authRouter = require('./routes/authRouter');
const verifyJwt = require('./middleware/verifyJwt');
const connectDb = require('./config/connectDb');
const rootMiddleware = require('./middleware');

const app = express();
const PORT = process.env.PORT || 5000;

connectDb();

// middlewares
app.use(rootMiddleware);

// routes
app.use('/auth', authRouter);

app.use(verifyJwt);
app.use('/users', usersRouter);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});