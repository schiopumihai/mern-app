const jwt = require('jsonwebtoken');
const Users = require('../models/users');

const refreshTokenController = async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
    return res.sendStatus(401);
  }

  const findUser = await Users.findOne({ refreshToken }).exec();

  if (!findUser) {
    return res.sendStatus(403);
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (error, decoded) => {
      if (error || findUser.username !== decoded.username) {
        return res.sendStatus(403);
      }

      const accessToken = jwt.sign(
        { username: decoded.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15m' },
      );

      return res.json({ accessToken });
    },
  );
};

module.exports = refreshTokenController;
