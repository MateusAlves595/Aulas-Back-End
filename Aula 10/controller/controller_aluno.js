/***************************************************************************************************************************************************
 * Objetivo: Responsavel pela regra de negocio referente ao CRUD de Alunos  
 * (GET, POST, PUT, DELETE)
 * Data: 10/04/2023
 * Autor: Mateus Alves
 * Versão: 1.0
 ***************************************************************************************************************************************************/

const inserirAluno = function(dadosAluno) {

}

const atualizarAluno = function(dadosAluno) {
    
}

const deletarAluno = function(id) {
    
}

const getAlunos = async function() {

    let dadosAlunosJson = {}

    //Import do arquivo DAO para acessar dados do aluno no BD
    let alunoDAO = require('../model/DAO/alunoDAO.js')

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
    getAlunoPorNome
}