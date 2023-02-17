/************************************************************************
 * Objetivo: Tabuada interativa
 * Data: 13/02/2023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 **************************************************************************/

 var readline = require('readline')
 var tabuada = require('./metodo/tabuada.js')

 var entradaDados = readline.createInterface({
     input : process.stdin,
     output : process.stdout
 })

 entradaDados.question('Dígite o primeiro número da tabuada: \n', function (primeiroNumero){
    let numeroInicial = Number(primeiroNumero)

    entradaDados.question('Dígite o numero final da tabuada: \n', function (ultimoNumero){
        let numeroFinal = Number(ultimoNumero)

        entradaDados.question('Dígite qual tabuada você quer ver primeiro: \n', function (primeiraTabuada){
            let tabuadaInicial = Number(primeiraTabuada)

            entradaDados.question('Dígite qua será a ultima tabuada: \n', function (ultimaTabuada){
                let tabuadaFinal = Number(ultimaTabuada)

                tabuada.getTabuada(tabuadaInicial, tabuadaFinal, numeroInicial, numeroFinal)
            })
        })
    })
 })