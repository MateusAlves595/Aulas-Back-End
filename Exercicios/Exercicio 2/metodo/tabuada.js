const getTabuada = function(tabuadaInicial, tabuadaFinal, numeroInicial, numeroFinal) {

    let numeroInicial = Number(String(multiplicandoInicial).replace(',', '.'))
    let numeroFinal = Number(String(multiplicandoFinal).replace(',', '.'))
    let tabuadaInicial = Number(String(numeradorInicial).replace(',', '.'))
    let tabuadaFinal = Number(String(numeradorFinal).replace(',', '.'))

    if(tabuadaFinal < 2 || tabuadaFinal > 100 || tabuadaInicial < 2 || tabuadaFinal > 100){
        console.log('ERRO: A tabuada deve ser de 2 a 100')
    } else if (numeroFinal > 50 || numeroInicial > 50 || numeroInicial < 1 || numeroFinal < 1){
        console.log('ERRO: A tabuada só pode sr calculada de 1 á 50')
    } else if(isNaN(numeroFinal) || isNaN(numeroInicial) || isNaN(tabuadaInicial) || isNaN(tabuadaFinal)){
        console.log('ERRO: Você só deve digitar numeros')
    } else if(numeroInicial == '' || numeroFinal == '' || tabuadaInicial || '' || tabuadaFinal == ''){
        console.log('ERRO: Você deve dígitar todos os numeros')
    } else {

        for (contador < tabuadaFinal; tabuadaInicial++){
            

            for(numeroInicial < numeroFinal){
                numeroInicial++;

                let resultado = numeroInicial * numeroFinal
                console.log(`${numeroInicial} x ${numeroFinal} = ${resultado}`)
            }
        }
    }
    return resultado
}

module.exports = {
    getTabuada
}