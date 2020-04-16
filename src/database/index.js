/* eslint-disable import/no-unresolved */
const Sequelize = require('sequelize');
const dbConfig = require('../../config/database');

const connection = new Sequelize(dbConfig);
const User = require('../models/Users');

User.init(connection);

module.exports = connection;
