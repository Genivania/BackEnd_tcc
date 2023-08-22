/*****************************************************************************
 * Objetivo: Manipulação de dados.
 * Autor: Genivania Macedo
 * Data: 22/08/2023
 * Versão: 1.0
 ****************************************************************************/

/**
 * Express - dependencia do Node, que permite a integração entre o protocolo http com o código
 *     npm install express --save
 * 
 * Cors - Gerenciador de permissões para o protocolo HTTP
 *     npm install cors --save
 * 
 * Body-parser - É uma dependencia que permite manipular dados enviados pelo body da requisição 
 *     npm install body-parser --save
 */

/**
    Para realizar  a conexão com Banco e dados iremos utilizar o PRISMA
        npm install prisma --save
        npx prisma
        npx prisma init
        npm install @prisma/client
 */

//Import das bibliotecas do projeto
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { request, response } = require('express');

const app = express();

app.use((request, response, next) => {
    //Permissões de origin da requisição
    response.header('Access-Control-Allow-Origin', '*')

    //Permissões de metodos que serao utilizados na api
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Define as perissões para o cors
    app.use(cors())

    //Continua para a leitura dos EndPoints
    next();

});

//CRUD (Create, Read, Update e Delete)

const bodyJSON = bodyParser.json();


//Import da controller do aluno
var controllerAluno = require('./controller/controller_usuario.js');

//EndPoint: 