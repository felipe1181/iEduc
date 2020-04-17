/* eslint-disable import/no-unresolved */
const express = require('express');
const UserController = require('./controllers/user/UserController');
const routes = express.Router();


routes.post('/users', UserController.store);

module.exports = routes;
