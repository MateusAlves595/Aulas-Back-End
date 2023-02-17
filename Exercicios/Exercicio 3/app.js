/*****************************************************************
 * Objetivo: fazer uma lista com números pares e impares
 * Autor: Mateus Alves da Silva
 * Data: 17/02/2023
 * Versão: 1.0
 *****************************************************************/

var readline = require('readline')
const parImpar = require('./metodo/parImpar.js')

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entradaDados.question("Dígite o número inicial: \n", function(numeroInicial) {
    let numInicial = Number(numeroInicial)

    entradaDados.question("Dígite o número final: \n", function(numeroFinal) {
        let numFinal = Number(numeroFinal)

        console.log("\nEscolha uma das opções abaixo",
        "\n1 - par",
        "\n2 - impar",
        "\n3 - ambos")

        entradaDados.question("Escolha sua opção: ", function(escolhaDoUsuario) {
            escolha = escolhaDoUsuario

            parImpar.getParesImpares(numInicial, numFinal, escolha)
            entradaDados.close
        })
    })
})