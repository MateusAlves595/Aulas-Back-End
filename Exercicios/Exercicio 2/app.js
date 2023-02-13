/************************************************************************
 * Objetivo: Tabuada interativa
 * Data: 13/02/2023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 **************************************************************************/

 var tabuada = require('./metodo/tabuada.js')
 var readline = require('readline')

 var entradaDados = readline.createInterface({
     input : process.stdin,
     ouutput : process.stdout
 })

 console.log('------------------------------------Tabuada------------------------------------')
 entradaDados.question('Dígite o primeiro número da tabuada: \n', function(primeiroNumero){

    numeroInicial = primeiroNumero

    entradaDados.question('Dígite o numero final da tabuada: \n', function(ultimoNumero){

        numeroFinal = ultimoNumero

        entradaDados.question('Dígite qual tabuada você quer ver primeiro: \n', function(primeiraTabuada){

            tabuadaInicial = primeiraTabuada

            entradaDados.question('Dígite qua será a ultima tabuada: \n', function(ultimaTabuada){

                tabuadaFinal = ultimaTabuada

                let resultado = tabuada.getTabuada(tabuadaInicial, tabuadaFinal, numeroInicial, numeroFinal)
                console.log(resultado)
            })
        })
    })
 })