var readline = require ('readline')
var sistema = require('../Exercicio1/sistema.js')
var exame = require('../Exercicio1/exame.js')
const { type } = require('os')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let status = true

entradaDados.question('Dígite o nome do Aluno(a): \n', function(nomeAluno){

    if(nomeAluno == ''){
        console.log('ERRO: Você deve informar o nome do aluno')
        status = false
    } else {

        let nomeAluno = nomeAluno
        entradaDados.question('Informe o gênero do aluno(a): \n 1 - Feminino\n 2 - Masculino\n',function(generoAluno){

            if(generoAluno == ''){
                console.log('ERRO: Você deve informar o gênero do aluno')
                status = false
            } else if(generoAluno < 1 || generoAluno > 2){
                console.log('ERRO: Selecione um gênero valido')
                status = false
            }else{

                let generoAluno = generoAluno
                entradaDados.question('Dígite o nome do professor(a) \n', function(nomeEducador){
                    
                    if(nomeEducador == ''){
                        console.log('ERRO: Você deve informar o nome do professor(a)')
                        status = false
                    } else {

                        let nomeEducador = nomeEducador
                        entradaDados.question('Informe o gênero do professor(a) \n 1 - Feminino\n 2 - Masculino\n', function(generoEducador){
                            
                            if(generoEducador == ''){
                                console.log('ERRO: Você deve informar o gênero do professor(a)')
                                status = false
                            } else if(generoEducador < 1 || generoEducador> 2){
                                console.log('ERRO: Você deve informar um gênero válido')
                                status = false
                            } else{

                                let generoEducador = generoEducador
                                entradaDados.question('Informe qual o seu curso: \n', function(curso){

                                    if(curso == ''){
                                        console.log('ERRO: Você deve informar o nome do curso')
                                    } else{

                                        let curso = curso
                                        entradaDados.question('Informe a disciplina: \n', function(disciplina){

                                            if(disciplina == ''){
                                                console.log('ERRO: Você deve informar a disciplina')
                                            }else{

                                                let disciplina = disciplina
                                                entradaDados.question('Informe a nota 1: \n', function(valor1){
                                                    let nota1 = valor1.replace(',', '.')

                                                    entradaDados.question('Informe a nota 2: \n', function(valor2){
                                                        let nota2 = valor2.replace(',', '.')

                                                        entradaDados.question('Informe a nota 3: \n', function(valor3){
                                                            let nota3 = valor3.replace(',', '.')

                                                            entradaDados.question('Informe a nota 4: \n', function(valor4){
                                                                let nota4 = valor4.replace(',', '.')

                                                                let resultado
                                                                resultado = sistema.mediaNotas(nota1, nota2, nota3, nota4)

                                                                console.log(resultado)
                                                                
                                                            })
                                                        })
                                                    })
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})

    
