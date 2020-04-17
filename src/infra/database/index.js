/* eslint-disable import/no-unresolved */
const Sequelize = require('sequelize');
const dbConfig = require('../../../config/database');
const requireDirectory = require('../sequelize');
const connection = new Sequelize(dbConfig);

//GET MODELS REQUIRE DIRECTORY
requireDirectory.ModelsLoader.Users.init(connection);

module.exports = connection;
