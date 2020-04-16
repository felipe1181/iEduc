/* eslint-disable import/no-unresolved */
const Sequelize = require('sequelize');
const path = require('path');
const dbConfig = require('../../config/database');

var consign = require('consign'), app = {};
//const User = require('../models/Users');

const connection = new Sequelize(dbConfig);

//User.init(connection);

const modelsDir = path.resolve(__dirname, '../', 'models');

consign()
    .include('src/models')
    .into(app);
console.log("models: " + modelsDir);
console.log(app);
//models.User.init(connection);
connection.define(app.src.models); (app);
//app.Users.init(connection);
//SINCRONIZAR MUDANÇAS DOS MODELS
connection
    .sync()
    .then(() => {
        console.log('base de dados sincronizada');
    })
    .catch((error) => {
        if (error) {
            console.log('erro ao sincronizar banco: ' + error);
        }
    });

module.exports = connection;
