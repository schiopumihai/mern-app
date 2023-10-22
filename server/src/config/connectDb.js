const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  } catch (error) {
    console.log(error);
  }

};

module.exports = connectDb;