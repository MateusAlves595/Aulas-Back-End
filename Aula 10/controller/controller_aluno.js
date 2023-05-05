/***************************************************************************************************************************************************
 * Objetivo: Responsavel pela regra de negocio referente ao CRUD de Alunos  
 * (GET, POST, PUT, DELETE)
 * Data: 10/04/2023
 * Autor: Mateus Alves
 * Versão: 1.0
 ***************************************************************************************************************************************************/

//Import do arquivo de configuração das variaveis, constantes e funções globais
var message = require('./modulo/config.js')

 //Import do arquivo DAO para acessar dados do aluno no BD
 var alunoDAO = require('../model/DAO/alunoDAO.js')
const { request } = require('express')

const inserirAluno = async function(dadosAluno) {

    //Validação para tratar campos obrigatórios e quantidade de caracteres
    if(
        dadosAluno.nome == ''             || dadosAluno.nome == undefined            || dadosAluno.nome.length > 100           ||
        dadosAluno.rg == ''               || dadosAluno.rg == undefined              || dadosAluno.rg.length > 15              ||
        dadosAluno.cpf == ''              || dadosAluno.cpf == undefined             || dadosAluno.cpf.length > 18             ||
        dadosAluno.data_nascimento == ''  || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == ''            || dadosAluno.email == undefined           || dadosAluno.email.length > 200
    ){
        return message.ERROR_REQUIRED_FIELDS //Status code 400
    } else {

        //Envia os dados para a model inserir no banco de dados
        let resultDadosAluno = await alunoDAO.insertAluno(dadosAluno)

        //Valida se o banco de dados inseriu corretamente os dados
        if(resultDadosAluno)
            return message.SUCCESS_CREATED_ITEM //Status code 201
        else
            return message.ERROR_INTERNAL_SERVER //Status code 500
    }

}

const atualizarAluno = async function(dadosAluno, idAluno) {
    
    if(
        dadosAluno.nome == ''             || dadosAluno.nome == undefined            || dadosAluno.nome.length > 100           ||
        dadosAluno.rg == ''               || dadosAluno.rg == undefined              || dadosAluno.rg.length > 15              ||
        dadosAluno.cpf == ''              || dadosAluno.cpf == undefined             || dadosAluno.cpf.length > 18             ||
        dadosAluno.data_nascimento == ''  || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == ''            || dadosAluno.email == undefined           || dadosAluno.email.length > 200
    ){
        return message.ERROR_REQUIRED_FIELDS
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)){
        //Validação de ID incorreto ou não informado
        return message.ERROR_INVALID_ID
    } else {
        //Adiciona o ID do aluno no JSON dos dados
        dadosAluno.id = idAluno

        //Encaminha os dados para a model do aluno
        let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno)

        if(resultDadosAluno)
            return message.SUCCESS_UPDATED_ITEM
        else 
            return message.ERROR_INTERNAL_SERVER    
    }

}

const deletarAluno = async function(idAluno) {

    let buscarAluno = await getBuscarAluno(idAluno)

    if(buscarAluno){

        if(idAluno == '' || idAluno == undefined || isNaN(idAluno)){
            return message.ERROR_INVALID_ID
        } else {
            let resultDadosAluno = await alunoDAO.deleteAluno(idAluno)
    
            if(resultDadosAluno)
                return message.SUCCESS_DELETED_ITEM
            else 
                return message.ERROR_INTERNAL_SERVER 
        }
        
    } else {
        return message.ERROR_NOT_FOUND_ID
    }
    
}

const getAlunos = async function() {

    let dadosAlunosJson = {}

    //Chama a função do arquivo DAO que irá retornar todos os registros do DB
    let dadosAlunos = await alunoDAO.selectAllAlunos()

    if(dadosAlunos){
        //Criando um Json com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJson.quantidade = dadosAlunos.length
        dadosAlunosJson.alunos = dadosAlunos
        return dadosAlunosJson
    } else {
        return false
    }
}

const getBuscarAluno = async function(id) {
    let idAluno = id
    let dadosAlunoJson = {}

    let alunoDao = require('../model/DAO/alunoDAO.js')

    let dadosAluno = await alunoDao.selectByIdAluno(idAluno)

    if(dadosAluno){
        dadosAlunoJson.aluno = dadosAluno
        return dadosAlunoJson
    } else {
        return false
    }
}

const getAlunoPorNome = async function (nome) {
    let nomeAluno = nome
    let dadosAlunoJson = {}

    let alunoDAO = require('../model/DAO/alunoDAO.js')

    let dadosAluno = await alunoDAO.selectByName(nomeAluno)

    if(dadosAluno){
        dadosAlunoJson.aluno = dadosAluno
        return dadosAlunoJson
    } else {
        return false
    }
}

module.exports = {
    getAlunos,
    getBuscarAluno,
    getAlunoPorNome,
    inserirAluno,
    atualizarAluno,
    deletarAluno
}
