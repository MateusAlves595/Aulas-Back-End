const getTabuada = function(multiplicandoInicial, multiplicandoFinal, numeradorInicial, numeradorFinal) {

    let numeroInicial = Number(String(multiplicandoInicial).replace(',', '.'))
    let numeroFinal = Number(String(multiplicandoFinal).replace(',', '.'))
    let tabuadaInicial = Number(String(numeradorInicial).replace(',', '.'))
    let tabuadaFinal = Number(String(numeradorFinal).replace(',', '.'))
    let resultado

    if(numeroInicial == '' || numeroFinal == '' || tabuadaInicial == '' || tabuadaFinal == ''){
        console.log('ERRO: Você deve dígitar todos os numeros')
    }else if(tabuadaFinal < 2 || tabuadaFinal > 100 || tabuadaInicial < 2 || tabuadaInicial > 100){
        console.log('ERRO: A tabuada deve ser de 2 a 100')
    } else if (numeroFinal > 50 || numeroInicial > 50 || numeroInicial < 1 || numeroFinal < 1){
        console.log('ERRO: A tabuada só pode ser calculada de 1 á 50')
    } else if(isNaN(numeroFinal) || isNaN(numeroInicial) || isNaN(tabuadaInicial) || isNaN(tabuadaFinal)){
        console.log('ERRO: Você deve digitar somente numeros')
    } else{

        for (let contador = tabuadaInicial; contador <= tabuadaFinal; contador++) {

            for(let i = numeroInicial; i <= numeroFinal; i++) {

                resultado = contador * i

                console.log(`${contador} x ${i} = ${resultado}`)
            }
        }
    }
    return resultado
}

module.exports = {
    getTabuada
}