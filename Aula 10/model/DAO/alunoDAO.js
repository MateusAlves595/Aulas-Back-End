/***************************************************************************************************************************************************
 * Objetivo: Responsavel pela manipulação de dados dos ALUNOS no Banco de Dados
 * Data: 10/04/2023
 * Autor: Mateus Alves
 * Versão: 1.0
 ***************************************************************************************************************************************************/

//Import da biblioteca do prisma client
var {PrismaClient} = require('@prisma/client')

//Instancia da classe PrismaClient
var prisma = new PrismaClient()

const insertAluno = async function(dadosAluno) {

    //ScriptSQL para inserir dados
    let sql = `insert into tbl_aluno  (
        nome,
        rg,
        cpf,
        data_nascimento,
        email
    ) values (
        '${dadosAluno.nome}',
        '${dadosAluno.rg}',
        '${dadosAluno.cpf}',
        '${dadosAluno.data_nascimento}',
        '${dadosAluno.email}'
    )`

    //Executa o ScriptSQL no Banco de Dados
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus){
        return true
    } else {
        return false
    }
}

const updateAluno = async function(dadosAluno) {

    //Script para atualizar o banco de dados
    let sql = `update tbl_aluno set
                    nome = '${dadosAluno.nome}',
                    rg = '${dadosAluno.rg}',
                    cpf = '${dadosAluno.cpf}',
                    data_nascimento = '${dadosAluno.data_nascimento}',
                    email = '${dadosAluno.email}'
                where id = ${dadosAluno.id}    
            `

    //Executa o scriptSQL no BD
    let resultStatus = await prisma.$executeRawUnsafe(sql)
    
    if(resultStatus)
        return true
    else
        return false

}

const deleteAluno = async function(id) {
    let sql = `delete from tbl_aluno where id = ${id}`

    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus)
        return true
    else
        return false
}

const selectAllAlunos = async function() {
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

    let sql = 'select * from tbl_aluno where id = ' + idAluno

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0)
        return rsAluno
    else
        return false
}

const selectByName = async function(nome) {
    let nomeAluno = nome

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
    selectByName,
    insertAluno,
    deleteAluno,
    updateAluno
}