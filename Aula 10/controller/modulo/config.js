/***************************************************************************************************************
 * Objetivo: Arquivo responsável por padronizar as mensagens de ERRO, SUCESSO, FUNCOES, VARIAVEIS para o projeto
 * Data: 28/04/2023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 **************************************************************************************************************/

//Mensagems de Erro
const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos.'}

const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno do servidor, não foi possível processar a requisição.'}

const ERROR_INVALID_ID = {status: 400, message: 'O ID iformado na requisição não é válido, ou não foi encaminhado'}

const ERROR_NOT_FOUND_ID = {status: 404, message: 'O ID iformado na requisição não existe ou não foi encontrado'}

const ERROR_NOT_FOUND = {status: 404, message: 'Nenhum item foi encontrado na requisição'}

const ERROR_INVALID_CONTENT_TYPE = {status: 415, message: 'O tipo de mídia Content-Type da solicitação não é compativel com o servidor. Tipo aceito:[application/json]'}

//Mensagems de Sucesso
const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso.'}

const SUCCESS_UPDATED_ITEM = {status: 200, message: 'Item atualizado com sucesso.'}

const SUCCESS_DELETED_ITEM = {status: 200, message: 'Item deletado com sucesso.'}

const SUCESS_REQUEST = {status: 200, message: 'Requisição bem-sucedida'}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER,
    ERROR_INVALID_ID,
    SUCCESS_UPDATED_ITEM,
    ERROR_INVALID_CONTENT_TYPE,
    SUCCESS_DELETED_ITEM,
    ERROR_NOT_FOUND_ID,
    SUCESS_REQUEST,
    ERROR_NOT_FOUND
}