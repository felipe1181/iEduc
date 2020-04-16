const config = require('./config');
const express = require('express');
const cors = require('cors');
const routes = require('../src/routes');

const app = express();

//fazer ainda o tratamento de rotas de erro, e rotas de segurança

app.use(express.json());
app.use(cors());


const baseUrl = `/api/v${config.apiVersion}`;
app.use(baseUrl, routes);


module.exports = app;
