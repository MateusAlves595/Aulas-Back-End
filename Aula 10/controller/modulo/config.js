/******************************************
 * Objetivo: Arquivo responsável por padronizar as mensagens de ERRO, SUCESSO, FUNCOES, VARIAVEIS para o projeto
 * Data: 28/04/2023
 * Autor: Mateus Alves
 * Versão: 1.0
 ******************************************/

//Mensagems de Erro
const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos.'}

const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno do servidor, não foi possível processar a requisição.'}

//Mensagems de Sucesso
const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso.'}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER
}

