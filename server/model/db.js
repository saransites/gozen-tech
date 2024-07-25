const mongoose = require("mongoose");
require("dotenv").config();

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongodb Atlas");
  } catch (error) {
    console.error(error);
  }
};

module.exports = db;
