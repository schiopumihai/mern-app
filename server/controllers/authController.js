const bcrypt = require('bcrypt');
const fsPromises = require('fs').promises;
const path = require('path');
const users = require('../models/users.json');

const registerUser = async (req, res) => {
  const { username, password } = req?.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const findUser = users?.find(user => user?.username === username);
  if (findUser) {
    return res.status(409).json({ message: "User with this username already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = JSON.stringify([...users, { username, password: hashedPassword }]);
    console.log(data);

    await fsPromises.writeFile(
      path.join(__dirname, '..', 'models', 'users.json'),
      data
    );

    console.log(users);

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

  const findUser = users.find(user => user.username === username);
  if (!findUser) {
    return res.status(401).json({ message: "Unauthorized user" });
  }

  const matchPasswords = await bcrypt.compare(password, findUser?.password);

  console.log({ matchPasswords , username, password});

  if (matchPasswords) {
    return res.json({ success: `User ${username} is logged in!` });
  } else {
    return res.sendStatus(401);
  }

};

module.exports = { registerUser, logInUser };