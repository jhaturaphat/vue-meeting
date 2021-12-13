const route = require('express').Router();

route.use('/account', require('./account'));

module.exports = route;