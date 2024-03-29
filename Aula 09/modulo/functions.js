/************************************************************************
 * Objetivo: criar funções que tragam nomes de cidades e estados
 * Autor: Mateus Alves da Silva
 * Data: 03/03/2023
 * Versão:1.0
 ************************************************************************/
var listaGeral = require('./estados_cidades.js')

const getListaDeEstados = function () {

    let novoArray = []
    let novoJson = {}

    listaGeral.estadosCidades.estados.forEach(function (itemEstado) {
        novoArray.push(itemEstado.sigla)
    })

    novoJson.uf = novoArray
    novoJson.quantidade = novoArray.length

    return novoJson
}

const getDadosEstado = function (siglaEstado) {
    let novoJson = {}
    let uf = siglaEstado
    let nome
    let capital
    let regiao
    let status = false

    listaGeral.estadosCidades.estados.forEach(function (dadosEstado) {
        uf = dadosEstado.sigla
        nome = dadosEstado.nome
        capital = dadosEstado.capital
        regiao = dadosEstado.regiao

        if (uf == siglaEstado.toUpperCase()) {
            novoJson.uf = uf
            novoJson.descricao = nome
            novoJson.capital = capital
            novoJson.regiao = regiao
            status = true
        }
    })

    if (status == true) {
        return novoJson
    } else {
        return false
    }

}

const getCapitalEstado = function (siglaEstado) {
    let novoJson = {}
    let uf = siglaEstado
    let nome
    let capital

    listaGeral.estadosCidades.estados.forEach(function (dadosEstado) {
        uf = dadosEstado.sigla
        nome = dadosEstado.nome
        capital = dadosEstado.capital

        if (uf == siglaEstado.toUpperCase()) {
            novoJson.uf = uf
            novoJson.descricao = nome
            novoJson.capital = capital
        }
    })

    if (novoJson == undefined) {
        return false
    } else if (novoJson == '') {
        return false
    } else {
        return novoJson
    }
}

const getEstadosRegiao = function (regiao) {

    let jsonEstados = {}
    let arrayEstados = []
    let status = false
 
    listaGeral.estadosCidades.estados.forEach(estado => {
       if (estado.regiao.toUpperCase() == regiao.toUpperCase()) {
 
          let getUfs = {}
 
          getUfs.uf = estado.sigla
          getUfs.descricao = estado.nome
 
          arrayEstados.push(getUfs)
          status = true
       }
    });
 
 
    if (status == true) {
       jsonEstados.regiao = regiao
       jsonEstados.estados = arrayEstados
       return jsonEstados
    } else {
       return status
    }
 
 }

const getCapitalPais = function () {
    let capitalJSON = {}
    let capitaisBrasil =
        listaGeral.estadosCidades.estados.filter(estadosDados => estadosDados.capital_pais != undefined)
            .map(estadosDados => ({
                capital_atual: estadosDados.capital_pais.capital,
                uf: estadosDados.sigla,
                descricao: estadosDados.nome,
                capital: estadosDados.capital,
                regiao: estadosDados.regiao,
                capital_pais_ano_inicio: estadosDados.capital_pais.ano_inicio,
                capital_pais_ano_termino: estadosDados.capital_pais.ano_fim
            }))

    capitalJSON.capitaisBrasil = capitaisBrasil

    return capitaisBrasil
}

const getCidades = function (siglaEstado) {
    let uf = siglaEstado.toUpperCase()
    let nomeEstado
    let listCidadesJSON = {}
    let cidades = []

    listaGeral.estadosCidades.estados.forEach(function (estadosDados) {
        if (estadosDados.sigla == uf) {
            nomeEstado = estadosDados.nome

            estadosDados.cidades.forEach(function (cidadeDados) {
                cidades.push(cidadeDados.nome)
            })
        }
    })

    listCidadesJSON.uf = uf
    listCidadesJSON.descricao = nomeEstado
    listCidadesJSON.quantidade_cidades = cidades.length
    listCidadesJSON.cidades = cidades

    if (listCidadesJSON == undefined) {
        return false
    } else if (listCidadesJSON == '') {
        return false
    } else {
        return listCidadesJSON
    }

}

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}