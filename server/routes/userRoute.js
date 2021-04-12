const express = require('express');
const route = express.Router();
const UserController = require('../controllers/userController');

route.post('/register', UserController.userRegister);
route.post('/login', UserController.userLogin);

module.exports = route;