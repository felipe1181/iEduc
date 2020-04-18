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
        ModelsLoader.Users,
        ModelsLoader.Students
    );

models
    .map(model => {
        model.init(connection);
        model.associate && model.associate(connection.models);
    });

module.exports = connection;
