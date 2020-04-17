/* eslint-disable import/no-unresolved */
const Sequelize = require('sequelize');
const path = require('path');
const dbConfig = require('../../config/database');
const consign = require('consign'), models = [];

const connection = new Sequelize(dbConfig);

//PUXA MODELS E AGREGA OBJETOS NUMA LISTA
consign()
    .include('src/models')
    .then('src/controllers')
    .into(models);

console.log(models.src.models);
models.src.models.Users.init(connection);

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
