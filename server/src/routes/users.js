const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/users');

router.route('/').get(getAllUsers);

// get by query params
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
