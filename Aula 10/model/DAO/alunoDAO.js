/***************************************************************************************************************************************************
 * Objetivo: Responsavel pela manipulação de dados dos ALUNOS no Banco de Dados
 * Data: 10/04/2023
 * Autor: Mateus Alves
 * Versão: 1.0
 ***************************************************************************************************************************************************/

//Import da biblioteca do prisma client
var {PrismaClient} = require('@prisma/client')

const insertAluno = function(dadosAluno) {

}

const updateAluno = function(dadosAluno) {
    
}

const deleteAluno = function(id) {
    
}

const selectAllAlunos = async function() {
    //Instancia da classe PrismaClient
    let prisma = new PrismaClient()

    //ScriptSQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno'

    //$queryRawUnsafe(sql) - Permite interpretar uma variavel como sendo um scriptSQL
    //$queryRaw() - Permite interpretar o scriptSQL direto no metodo
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if(rsAluno.length > 0)
        return rsAluno
    else
        return false
}

const selectByIdAluno = async function(id) {
    let idAluno = id
    let prisma = new PrismaClient()

    let sql = 'select * from tbl_aluno where id = ' + idAluno

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0)
        return rsAluno
    else
        return false
}

const selectByName = async function(nome) {
    let nomeAluno = nome
    let prisma = new PrismaClient()

    let sql = `select * from tbl_aluno where nome like '%${nomeAluno}%'` 

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0)
        return rsAluno
    else
        return false
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByName
}