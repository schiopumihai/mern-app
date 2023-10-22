const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.split(' ')[1];
  console.log({ token });

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
      if (error) {
        return res.sendStatus(403);
      }

      next();
    });
};

module.exports = verifyJwt;