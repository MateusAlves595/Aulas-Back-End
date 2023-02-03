var readline = require('readline');
const { close } = require('fs');

var entradaDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log('---------------------------CALCULADORA----------------------------')

entradaDados.question('Selecione o primeiro número da operação: \n', function(primeiroValor){
    let valor1 = primeiroValor

    entradaDados.question('Selecione o segundo número da operação: \n', function(segundoValor){
        let  valor2 = segundoValor
        
        if(valor1 == '' || valor2 == ''){
            console.log('ERRO: Digite os dois numeros')
        }else if(isNaN(valor1) || isNaN(valor2)){
            console.log('ERRO: Digite somente numeros')
        }else{
            console.log(' Digite 1 - Somar\n',
        'Digite 2 - Subtrair\n',
        'Digite 3 - Multiplicar\n',
        'Digite 4 - Dividir\n')

        entradaDados.question('Seleccione uma operação matemática: \n', function(operacaoSelecionada){
            
            var operacao = operacaoSelecionada

            if(operacao > 4 || operacao < 1){
                console.log('ERRO: Você não selecionou uma operação')
            }else if(operacao == ''){
                console.log('ERRO: Selecione uma operação válida')
            }else if(isNaN(operacao)){
                console.log('ERRO: Escreva somente números')
            }
            
            //Somar
            else if(operacao == 1){
                let somar = Number(valor1) + Number(valor2);
                console.log('O resultado da soma é: ' + somar)
               
            //Subtrair    
            } else if(operacao == 2){
                let subtrair = Number(valor1) - Number(valor2)
                console.log('O resultado da subtração é: ' + subtrair)

            //Multiplicar    
            }else if(operacao == 3){
                let multiplicar = Number(valor1) * Number(valor2)
                console.log('O resultado da multiplicação é: ' + multiplicar)  
            }
            
            //Dividir
            else if(operacao == 4){
                if(valor1 == 0 || valor2 == 0){
                    console.log('ERRO: não é possivel dividir por 0')
                }else{
                    let dividir = Number(valor1) / Number(valor2)
                    console.log('O resultado da divisão é: ' + dividir)
                }   
            }
        })
      }
    })
});