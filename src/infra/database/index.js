/* eslint-disable import/no-unresolved */
const Sequelize = require('sequelize');
const dbConfig = require('../../../config/database');
const requireDirectory = require('../sequelize');
const ModelsLoader = requireDirectory.ModelsLoader;
const connection = new Sequelize(dbConfig);
const models = [];


//GET MODELS REQUIRE DIRECTORY
models
    .push(
        ModelsLoader.Students,
        ModelsLoader.Users,
    );

models
    .map(model => model.init(connection));
models
    .map(model => model.associate && model.associate(connection.models));

module.exports = connection;
