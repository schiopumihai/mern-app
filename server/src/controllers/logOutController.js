const Users = require('../models/users');

const logOutController = async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
    return res.sendStatus(204);
  }

  const findUser = await Users.findOne({ refreshToken }).exec();

  if (!findUser) {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
    });

    return res.sendStatus(204);
  }

  try {
    findUser.refreshToken = '';
    await findUser.save();

    res.clearCookie('refreshToken', {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
    });
    res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = logOutController;
