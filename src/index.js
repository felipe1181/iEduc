/* eslint-disable import/no-unresolved */
require('./database');

const express = require('express');

const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3003,()=>{
  console.log('Servidor está rodando na porta 3003 >> ');
});
