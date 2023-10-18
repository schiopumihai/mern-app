const express = require('express');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/authRouter');
const verifyJwt = require('./middleware/verifyJwt');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);

app.use(verifyJwt);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
