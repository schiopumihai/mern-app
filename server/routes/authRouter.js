const express = require('express');
const { registerUser, logInUser } = require('../controllers/authController');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/logIn').post(logInUser);

module.exports = router;
