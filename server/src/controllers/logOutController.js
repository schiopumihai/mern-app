const users = require('../models/users.json');
const path = require('path');
const fsPromises = require('fs').promises;

const logOutController = async (req, res) => {
  const token = req.cookies?.refreshToken;

  if (!token) {
    return res.sendStatus(204);
  }

  const findUser = users.find(user => user.refreshToken === token);

  if (!findUser) {
    res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'None', secure: true });
    return res.sendStatus(204);
  }

  const filterUsers = users.filter(user => user.refreshToken !== token);
  const data = JSON.stringify([...filterUsers, { ...findUser, refreshToken: '' }]);

  try {
    await fsPromises.writeFile(
      path.join(__dirname, '..', 'models', 'users.json'),
      data
    );

    res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = logOutController;