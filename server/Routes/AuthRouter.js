const { Login, Signup } = require("../controllers/AuthController");
const validateAuth = require("../models/ValidateSchema");

const AuthRouter = require("express").Router();

AuthRouter.post("/login", Login);
AuthRouter.post("/signup", validateAuth, Signup);

module.exports = AuthRouter;
