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

    //Envia para o cors() as regras de permissões
    app.use(cors())

    next()
})

//EndPoints

//Async - estabelece uma status de aguarde, assim que processar os dado são devolvidos
//OBS: Se não usar o async, a requisição é perdida, pois o front acha que a API
//está fora do ar.

//Import do arquivo modulo (funções)
const estadosCidades = require('./modulo/functions.js')

//EndPoint getListaDeEstados
app.get('/estados', cors(), async function(request, response, next){

    //Chama a função que vai listar todos os estados
    let estados = estadosCidades.getListaDeEstados()

    //Tratamento para validar o sucesso da requisição
    if(estados){
        response.status(200)
        response.json(estados)
    } else {
        response.status(500)
    }
})

//EndPoint: Lista os dados do estado filtrando pela sigla do estado
app.get('/estado/:uf', cors(), async function(request, response, next){

    let statusCode
    let dadosEstado = {}

    //Recebe a lista do estado que será enviada pela URL da requisição
    let siglaEstado = request.params.uf

    //Tratamento para validação de entrada de dados incorreta
    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode = 400
        dadosEstado.message = 'Não foi possivel processar pois os dados de entrada (uf) que foram enviados não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos,'
    }else{
        //Chama a função para retornar os dados do estado
        let estado = estadosCidades.getDadosEstado(siglaEstado)

        if(estado){
            statusCode = 200
            dadosEstado = estado
        }else{
            statusCode = 404
        }
    }
    //Retorna o código e o JSON
    response.status(statusCode)
    response.json(dadosEstado)
})

app.get('/capital/:uf', cors(), async function(request, response, next){
    let statusCode
    let dadosCapital = {}

    let siglaEstado = request.params.uf

    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode = 400
        dadosCapital.message = 'Não foi possivel processar pois os dados de entrada (uf) que foram enviados não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 dígitos,'
    }else{
        
        let capital = estadosCidades.getCapitalEstado(siglaEstado)

        if(capital){
            statusCode = 200
            dadosCapital = capital
        }else{
            statusCode = 404
        }
    }
    
    response.status(statusCode)
    response.json(dadosCapital)
})

app.get('/estadoRegiao/:regiao', cors(), async function(request, response, next){
    let statusCode
    let dadosEstado = {}

    let regiaoEstado = request.params.regiao

    if(regiaoEstado == '' || regiaoEstado == undefined || !isNaN(regiaoEstado)){
        statusCode = 400
        dadosEstado.message = 'Não foi possivel processar pois os dados de entrada (regiao) que foram enviados não corresponde ao exigido, confira o valor, pois não pode ser vazio.'
    }else{
        
        let regiao = estadosCidades.getEstadosRegiao(regiaoEstado)

        if(regiao){
            statusCode = 200
            dadosEstado = regiao
        }else{
            statusCode = 404
        }
    }
    
    response.status(statusCode)
    response.json(dadosEstado)
})

//Roda o serviço da API para ficar aguardando requisições
app.listen(8080, function(){
    console.log('servidor aguardando requisições na porta 8080.')
})