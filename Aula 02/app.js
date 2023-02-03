/********************************************************************************
 * Objetivo: Calcular a média de 4 notas escolares
 * Autor: Mateus Alves da Silva
 * Data: 27/01/2023
 * Versão: 1.0
 ********************************************************************************/

 //Import de biblioteca readline
var readline = require('readline');

//Cria o objeto para ser especialista em entrada de dados pelo teclado 
var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

/**
 * Criação de Variáveis
    * var - cria um espaço em memória de escopo global para o projeto, ou seja,
        * essa variáveç poderá ser utilizada em qualquer parte do arquivo (várias funções)  
        *   
    * let - cria um espaço em memória de escopo local para o projeto, ou seja,
        * essa variável somente poderá ser utilizada dentro da função que foi criada
        *   
    * const - cria um espaço em memória de escopo local ou global para o projeto, ou seja,
        *  essa constante poderá ser utilizada em qualquer parte do projeto e nunca sofrerá
        *  alteração  
 * 
 */

//Função de Callback para entrar o nome do aluno
entradaDados.question('Digite o seu nome: \n', function(nome){
    //Recebe o valor indicado pelo teclado
    let nomeAluno = nome

    //Função de Callback para entrar a nota1
    entradaDados.question('Digite a nota 1: \n', function(nota1){
        let valor1 = nota1
        
        //Função de Callback para entrar a nota2
        entradaDados.question('Digite a nota 2: \n', function(nota2){
            let valor2 = nota2

            entradaDados.question('Digite a nota 3: \n', function(nota3){
                let valor3 = nota3

                entradaDados.question('Digite a nota 4: \n', function(nota4){
                    let valor4 = nota4
                    let media;

                    /*
                        Conversão de tipos de dados

                            parseInt() ou Number.parseInt() - Converte uma String em inteiro
                            parseFloat() ou Number.parseFloat() - Converte String em real

                            Number() - Converte uma String para um numero, conforme a entrada do valor
                            o JS define se será inteiro ou real
                    */
                    if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == ''){
                        console.log('ERRO: Você deixou de entrar com algum valor')
                    }else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){
                        console.log('ERRO: Você precisa digitar um numero valido')
                    }else if (valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
                        console.log('ERRO: Todas as notas devem ter um valor entre 0 e 10')
                    }else if (valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
                        console.log('ERRO: Todas as notas devem ter um valor entre 0 e 10')
                    }else{
                        media = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4))/4;
                        
                        console.log('Sua média final é: ' + media.toFixed(1));

                        if(media < 7){
                            console.log('RESULTADO: Reprovado')
                        }else{
                            console.log('RESULTADO: Aprovado')
                        } 
                    }
                    
                });

            });
        });

    });

});