const users = require('../models/users.json');
const jwt = require('jsonwebtoken');

const refreshTokenController = (req, res) => {
  const token = req.cookies?.refreshToken;

  if (!token) {
    return res.sendStatus(401);
  }

  const findUser = users.find(user => user.refreshToken === token);

  if (!findUser) {
    return res.sendStatus(403);
  }

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (error, decoded) => {
    if (error || findUser.username !== decoded.username) {
      return res.sendStatus(403);
    }

    const accessToken = jwt.sign(
      { username: decoded.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1m' }
    );

    console.log({ accessToken });

    return res.json({ accessToken });
  });

};

module.exports = refreshTokenController;