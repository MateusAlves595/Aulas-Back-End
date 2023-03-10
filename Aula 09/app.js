/*************************************************************************
 * Objetivo: Criar uma  API para disponibilizar dados de Estados e cidades
 * Data: 10/03/2023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 *************************************************************************/

/**
 * Express - dependencia para realizar requisições de api pelo protocolo HTTP
 *      npm install express --save
 * 
 * Cors - dependencia para gerenciar permissões de requisição da API
 *      npm install cors --save
 * 
 * Body-Parser - é uma dependencia que gerencia o corpo das requisições
 *      npm install body-parser --save
 */

//Import das depedencias do projeto
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria um objeto com as caracteristicas do express
const app = express()

//API publica - Fica disponivel para utilização de qualquer aplicação
//API privada - Somente o IP informado poderá consumir dados da API

//Define se a API é pública ou privada
//* = pública
//(número IP) = privada
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')

    //Permite definir quais métodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
})