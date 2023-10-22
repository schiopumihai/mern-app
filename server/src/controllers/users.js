const users = require('../models/users.json') || [];

const initialData = [...users];

const getAllUsers = (req, res) => {
  res.json(initialData);
};

const createUser = (req, res) => {
  initialData.push(req.body);
  res.json({ ...req.body });
};

const updateUser = (req, res) => {
  const idx = initialData.findIndex((user) => user.id === req.body?.id);

  if (idx !== -1) {
    initialData[idx] = req.body;
    res.json(req.body);
  } else {
    res.send('Error');
  }
};

const deleteUser = (req, res) => {
  const idx = initialData.findIndex((user) => user.id === req.body?.id);
  console.log(req.body);
  if (idx !== -1) {
    delete initialData[idx];
    res.send(`${req.body.id} was deleted`);
  } else {
    res.send('Error');
  }
};

const getUserById = (req, res) => {
  const user = initialData.find((user) => user.id === Number(req.params?.id));
  if (user) {
    res.json([user]);
  } else {
    res.send('Error');
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
