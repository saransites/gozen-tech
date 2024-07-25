const User = require("../models/userModal");
const jwt = require("jsonwebtoken");
const {
  CreateUsername,
  hashedPassword,
  ComparePassword,
  createJWT,
} = require("../services/utilities.service");
require("dotenv").config();

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await ComparePassword(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ message: "invalid credentials" });
    }
    const token = await createJWT(user);
    return res.json({ token, user });
  } catch (err) {
    console.log(err);
  }
};
const Signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (existingUser) {
      return res.status(401).json({ message: "User already exists" });
    }
    const username = CreateUsername();
    const Password = await hashedPassword(password);
    const newUser = new User({
      username,
      email,
      password: Password,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  Login,
  Signup,
};
