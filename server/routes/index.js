const express = require('express');
const route = express.Router();
const userRoute = require('./userRoute');
// const adminRoute = require('./adminRoute');

route.use('/user', userRoute);
// route.use('/admin', adminRoute);

module.exports = route;