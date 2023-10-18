const express = require('express');
const { registerUser, logInUser } = require('../controllers/authController');
const refreshTokenController = require('../controllers/refreshTokenController');
const logOutController = require('../controllers/logOutController');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/logIn').post(logInUser);
router.route('/refreshToken').get(refreshTokenController);
router.route('/logOut').get(logOutController);

module.exports = router;
