const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const userModal = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

const user = mongoose.model("users", userModal);

module.exports = user;
