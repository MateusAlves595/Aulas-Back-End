/***********************************
 * Objetivo: API para integração entre Back e Banco de Dados
 * (GET, POST, PUT, DELETE)
 * Data: 10/04/2023
 * Autor: Mateus Alves
 * Versão: 1.0
 ************************************/

//Import das bibliotecas para a API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { request } = require('express')

//Cria o objeto app conforme a classe do express
const app = express()

//Definindo permissoes do cors
app.use((request, response, next) => {
    //Define quem podera acessar a API (* = todos)
    response.header('Access-Control-Allow-Origin', '*')
    //Define quais metodos serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao cors
    app.use(cors())

    next()
})
//Crud (Create, Read, Update e Delete)


/************************************
 * Objetivo: API de controle de alunos
 * Data: 14/04/2023
 * Autor: Mateus Alves
 * Versão: 1.0
 ************************************/

//EndPoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async, function(request, response){

})

//EndPoint: Retorna o aluno filtrando pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async, function(request, response){

})

//EndPoint: Insere um novo aluno
app.post('/v1/lion-school/aluno', cors(), async, function(request, response){

})

//EndPoint: Atualiza um aluno existente, filtrando pelo id
app.put('/v1/lion-school/aluno/:id', cors(), async, function(request, response){

})

//EndPoint: Exclui um aluno, filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async, function(request, response){

})

app.listen(8080, function(){
    console.log('Servidor Aguardando  requisiç~ões na porta 8080')
    
})