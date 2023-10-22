const { format } = require('date-fns');
const fs = require('fs');
const fsPromises = require('fs').promises;
const { v4: uuidV4 } = require('uuid');
const path = require('path');


const logEvents = async (message, file = 'eventLog.txt') => {
  const dateTime = `${format(new Date, 'yyyyMMdd\tHH:mm:ss')}`;
  const logMessage = `${dateTime}\t${uuidV4()}\t${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, 'logs'));
    }
    await fsPromises.appendFile(path.join(__dirname, 'logs', file), logMessage, 'utf8');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { logEvents };