/************************************************************************
 * Objetivo: criar funções que tragam nomes de cidades e estados
 * Autor: Mateus Alves da Silva
 * Data: 03/03/2023
 * Versão:1.0
 ************************************************************************/
var listaGeral = require('./estados_cidades.js')

const getListaDeEstados = function() {

    let novoArray = []
    let novoJson = {}

    listaGeral.estadosCidades.estados.forEach(function(itemEstado){
        novoArray.push(itemEstado.sigla)
    })

    novoJson.uf = novoArray
    novoJson.quantidade = novoArray.length

    return novoJson
}

getListaDeEstados()