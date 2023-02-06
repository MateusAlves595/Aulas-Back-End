var readline = require ('readline')
var matematica = require ('./modulo/calculadora.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Valor: \n', function(numero1){

    let valor1 = numero1.replace(',', '.')

    entradaDados.question('Valor2: \n', function(numero2){

        let valor2 = numero2.replace(',', '.')

        entradaDados.question('Escolha uma operação: [SOMAR || SUBTRAIR || MULTIPLICAR || DIVIDIR] \n', function(tipoCalculo){
            
            let operacao = tipoCalculo.toUpperCase()
            let resultado

            if(valor1 == '' || valor2 == '' || operacao == '')
                console.log('ERRO: Não é possivel calcular se algum dado estiver em branco.')
            else if(isNaN(valor1) || isNaN(valor2))
                console.log('ERRO: Não é possivel calcular se os dados digitados não forem números.')
            else{

                //Chama a função para calcular os valores (função que nós criamos)
                resultado = matematica.calculadora(valor1, valor2, operacao)

                if(resultado === false)
                    entradaDados.close()
                else
                    console.log(resultado)
            }
        })
    })
})