require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsConfig');

const usersRouter = require('./routes/users');
const authRouter = require('./routes/authRouter');
const verifyJwt = require('./middleware/verifyJwt');
const connectDb = require('./config/connectDb');
const credentials = require('./middleware/credentials');

const app = express();
const PORT = process.env.PORT || 5000;

connectDb().then(({ connected }) => {
  if (connected) {
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  }
}).catch(console.dir);

app.use(credentials);
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);

app.use(verifyJwt);
app.use('/users', usersRouter);
