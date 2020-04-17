/* eslint-disable import/no-unresolved */
const config = require('../config/config');
const database = require('./database');
const app = require('../config/express');

//criar configuração logger



//SINCRONIZAR MUDANÇAS DOS MODELS
database
    .sync()
    .then(() => {
        console.log('base de dados sincronizada');
        app.listen(config.port, () => {
            console.log('Servidor está rodando na porta ' + config.port + ' >> ');
        });
    })
    .catch((error) => {
        if (error) {
            console.log('erro ao sincronizar banco: ' + error);
        }
    });


