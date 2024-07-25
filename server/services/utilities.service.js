const bcrypt = require("bcrypt");
const { verify } = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const ComparePassword = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (err) {
    console.log(err);
  }
};
const hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
const CreateUsername = () => {
  const username = `user${Date.now()}`;
  return username;
};
const createJWT = (data) => {
  return jwt.sign({ data: data }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24,
  });
};
const verifyJWT = (token, secret) => {
  return jwt.verify(token, secret);
};

module.exports = {
  ComparePassword,
  hashedPassword,
  CreateUsername,
  createJWT,
  verifyJWT,
};
