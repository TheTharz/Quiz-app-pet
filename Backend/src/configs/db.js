const mongoose = require('mongoose');

const db = async () => {
  try {
    console.log(process.env.DATABASE)
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.DATABASE);
    console.log('Db Connected');
  } catch (error) {
    console.log('DB Connection Error');
    console.log(error);
  }
};

module.exports = { db };