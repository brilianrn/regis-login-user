const express = require('express');
const route = express.Router();
const UserController = require('../controllers/userController');

route.get('/', UserController.getUsers);
route.get('/:id', UserController.getUser);
route.post('/register', UserController.userRegister);
route.post('/login', UserController.userLogin);

module.exports = route;