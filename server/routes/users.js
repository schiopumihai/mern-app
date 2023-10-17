const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controller/users');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

// get by query params
router.route('/:id').get(getUserById);

module.exports = router;
