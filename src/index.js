/* eslint-disable import/no-unresolved */
const config = require('../config/config');
const database = require('./database');
const app = require('../config/express');

//criar configuração logger

app.listen(config.port, () => {
    console.log('Servidor está rodando na porta ' + config.port + ' >> ');
});
