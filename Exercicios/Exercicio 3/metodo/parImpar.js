const getParesImpares = function (numeroInicial, numeroFinal, escolhaDoUsuario) {
    let numInicial = Number(String(numeroInicial).replace(',', '.'))
    let numFinal = Number(String(numeroFinal).replace(',', '.'))
    let escolha = escolhaDoUsuario
    let quantidadeDePares = 0
    let quantidadeDeImpares = 0
    let quantidadeFinal = 0

    if (numInicial < 0 || numInicial > 500) {
        console.log("O valor do numero inicial deve ficar entre 0 e 500")
    } else if (numFinal < 0 || numFinal > 1000) {
        console.log("O valor do numero final deve ficar entre 0 e 1000")
    } else if (numInicial > numFinal) {
        console.log("O numero inicial não pode ser maior que o numero final")
    } else if (numFinal == '' || numInicial == '') {
        console.log("Você deve dígitar todos os numeros")
    } else if (isNaN(numInicial) || isNaN(numFinal)) {
        console.log("Você deve dígitar somente numeros")
    } else if (numInicial == numFinal) {
        console.log("O numero inicial não pode ser igual ao numero final")
    } else if (escolha < 1 || escolha > 3) {
        console.log("O valor da descolha deve ficar entre 1 e 3")
    } else {

        if (escolha == 1) {
            for (i = numInicial; i <= numFinal; i++) {
                if (i % 2 == 0) {
                    console.log(`\n${i}`)
                    quantidadeDePares++
                }
            }
        } else if (escolha == 2) {
            for (i = numInicial; i <= numFinal; i++) {
                if (i % 2 == 1) {
                    console.log(`\n${i}`)
                    quantidadeDeImpares++
                }
            }
        } else {
            (escolha == 3)
            for (i = numInicial; i <= numFinal; i++) {
                if (i % 2 == 0) {
                    console.log(`\n${i}`)
                    quantidadeDePares++
                }
            }
            console.log(`\nQuantidade de numeros pares encontrados: ${quantidadeDePares}`)


            for (i = numInicial; i <= numFinal; i++) {
                if (i % 2 == 1) {
                    console.log(`\n${i}`)
                    quantidadeDeImpares++
                }
            }

            console.log(`\nQuantidade de numeros impares encontrados: ${quantidadeDeImpares}`)
        }
    }
}

module.exports = {
    getParesImpares
}