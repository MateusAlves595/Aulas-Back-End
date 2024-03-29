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

var message = require('./controller/modulo/config.js')

//EndPoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {
    //Recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getAlunos()

    response.status(dadosAluno.status)
    response.json(dadosAluno)
})

//EndPoint: Retorna o aluno filtrando pelo id
app.get('/v1/lion-school/aluno/id/:id', cors(), async function (request, response) {
    let id = request.params.id

    let dadosAluno = await controllerAluno.getBuscarAluno(id)

    response.status(dadosAluno.status)
    response.json(dadosAluno)
})

//EndPoint: Insere um novo aluno
app.post('/v1/lion-school/aluno', cors(), bodyParserJson, async function (request, response) {

    let contentType = request.headers['content-type']

    if (String(contentType).toLowerCase() == 'application/json') {
        //Recebe os dados encaminhados na requisição
        let dadosBody = request.body

        let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status) //Status - 415
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }


})

//EndPoint: Atualiza um aluno existente, filtrando pelo id
app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJson, async function (request, response) {

    //Recebe o Content-Type da requisição
    let contentType = request.headers['content-type']

    //Validação para receber dados apenas no formato JSON
    if (String(contentType).toLowerCase() == 'application/json') {
        //Recebe o id do aluno pelo parametro
        let idAluno = request.params.id
        //Recebe os dados do aluno encaminhado pelo corpo da requisicao
        let dadosBody = request.body

        //Encaminha dados para a controller
        let resultDadosAluno = await controllerAluno.atualizarAluno(dadosBody, idAluno)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status) //Status - 415
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }

})

//EndPoint: Exclui um aluno, filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    let idAluno = request.params.id

    let resultDadosAluno = await controllerAluno.deletarAluno(idAluno)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)
    

})

//EndPoint: Retorna o aluno filtrado pelo nome
app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function (request, response) {
    let nome = request.params.nome

    let dadosAluno = await controllerAluno.getAlunoPorNome(nome)

    if (dadosAluno) {
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }
})

app.listen(8080, function () {
    console.log('Servidor Aguardando  requisições na porta 8080')
})

/************************************
 * Objetivo: API de controle de professores
 * Data: 12/05/2023
 * Autor: Mateus Alves
 * Versão: 1.0
 ************************************/