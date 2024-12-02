const express = require("express");
const routes = express.Router();
const userController = require("../controller/userController");
const registerValidator = require("../validator/register_validator");
const loginValidator = require("../validator/login_validator");

routes.post('/register',registerValidator, userController.createUser);
routes.post('/login',loginValidator,userController.loginUser);


module.exports = routes;