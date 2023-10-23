const Users = require('../models/users');

const getAllUsers = async (req, res) => {
  const users = await Users.find();

  if (!users) {
    return res.status(204).json([]);
  }

  return res.json(users);
};

const updateUser = async (req, res) => {
  try {
    await Users.findByIdAndUpdate(req.params.id, req.body).exec();

    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id).exec();
    return res
      .status(200)
      .json({ message: `User ${req.params.id} was removed with success` });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id).exec();

    return res.json(user);
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
