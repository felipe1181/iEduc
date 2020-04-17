/* eslint-disable import/no-unresolved */
const Sequelize = require('sequelize');
const path = require('path');
const dbConfig = require('../../config/database');
const models = require('../models/');
const connection = new Sequelize(dbConfig);

//PUXA MODELS
models.Users.init(connection);

module.exports = connection;
