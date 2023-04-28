/***********************************
 * Objetivo: API para integração entre Back e Banco de Dados
 * (GET, POST, PUT, DELETE)
 * Data: 10/04/2023
 * Autor: Mateus Alves
 * Versão: 1.0
 ************************************/

/**Instalação do Prisma no projeto (biblioteca para conexao com BD)
 * npm install prisma --save
 * npx prisma
 * npx prisma init
 * npm install @prisma/client --save
 * 
 * npx prisma migrate dev  ###Serve para realizar o sincronismo entre o prisma e o BD
 */

//Import das bibliotecas para a API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

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

//Define que os dados que irao chegar no boddy da requisicao sera no padrao json
const bodyParserJson = bodyParser.json()

 //Import do arquivo da controller que ira solicitar a model os dados do BD
var controllerAluno = require('./controller/controller_aluno.js')

//EndPoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response){
    //Recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getAlunos()
    
    //Valida se existe registros de aluno
    if(dadosAluno){
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }
})

//EndPoint: Retorna o aluno filtrando pelo id
app.get('/v1/lion-school/aluno/id/:id', cors(), async function(request, response){
    let id = request.params.id

    let dadosAluno = await controllerAluno.getBuscarAluno(id)

    if(dadosAluno){
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }
})

//EndPoint: Insere um novo aluno
app.post('/v1/lion-school/aluno', cors(), bodyParserJson, async function(request, response){
    //Recebe os dados encaminhados na requisição
    let dadosBody = request.body

    let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody)

    response.status(resultDadosAluno.status)
    response.json(resultDadosAluno)

})

//EndPoint: Atualiza um aluno existente, filtrando pelo id
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response){

})

//EndPoint: Exclui um aluno, filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){

})

//EndPoint: Retorna o aluno filtrado pelo nome
app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function(request, response){
    let nome = request.params.nome

    let dadosAluno = await controllerAluno.getAlunoPorNome(nome)

    if(dadosAluno){
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }
})

app.listen(8080, function(){
    console.log('Servidor Aguardando  requisições na porta 8080')
})