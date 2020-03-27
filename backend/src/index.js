const express = require("express");
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * rota / recurso
 */
/**
 * Metodos HTTP
 * GET: BUSCAR/listar UMA INFORMAÇÃO DO BACK-END
 * POST: CRIAR UMA INFORMAÇÃO NO BACK-END
 * PUT: ALTERAR UMA INFORMAÇÃO NO BACK-END
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END
 */

/**
 * Tipos de parametros
 * Query Parms: Parametros nomeados enviados na rota após "?" (filtros, Paginaçção)
 * Route Parms: Parametros utilizados para identificar recursos
 * Request Body: corpo de requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MangoDB, CouchDB, etc.
  */

/**
 * Driver: SELECT * FRON users
 * Query Builder: table('users').select('*').where()
 */


  

app.listen(3333);



