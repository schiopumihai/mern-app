const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../models/users');

const EXPIRES_IN_24H = 1000 * 60 * 60 * 24;

const registerUser = async (req, res) => {
  const { username, password } = req?.body;

  console.log({ username, password });

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const findUser = await Users.findOne({ username }).exec();
  if (findUser) {
    return res.status(409).json({ message: "User with this username already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await Users.create(
      { username, password: hashedPassword }
    );

    return res.status(201).json({ success: `New user ${username} was created!` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const logInUser = async (req, res) => {
  const { username, password } = req?.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const findUser = await Users.findOne({ username });
  if (!findUser) {
    return res.status(401).json({ message: "Unauthorized user" });
  }

  const matchPasswords = await bcrypt.compare(password, findUser?.password);

  if (!matchPasswords) {
    return res.sendStatus(401);
  }

  const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
  const refreshToken = jwt.sign({ username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

  try {
    findUser.refreshToken = refreshToken;
    await findUser.save();

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: EXPIRES_IN_24H, sameSite: 'None', secure: true });
  res.json({ accessToken });
};

module.exports = { registerUser, logInUser };