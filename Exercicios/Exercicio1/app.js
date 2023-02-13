var readline = require('readline')
var sistema = require('./sistema.js')
var exame = require('./exame')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Dígite o nome do Aluno(a): \n', function (nomeAluno) {

    if (nomeAluno == '') {
        console.log('ERRO: Você deve informar o nome do aluno')
        entradaDados.close()
    } else {

        let aluno = nomeAluno
        entradaDados.question('Informe o gênero do aluno(a): \n 1 - Feminino\n 2 - Masculino\n', function (generoAluno) {

            if (generoAluno == '') {
                console.log('ERRO: Você deve informar o gênero do aluno')
                entradaDados.close()
            } else if (generoAluno < 1 || generoAluno > 2) {
                console.log('ERRO: Selecione um gênero valido')
                entradaDados.close()
            } else if (isNaN(generoAluno)) {
                console.log('ERRO: Você deve dígitar um número')
                entradaDados.close()
            } else {

                let generoDoAluno = generoAluno
                entradaDados.question('Dígite o nome do professor(a) \n', function (nomeEducador) {

                    if (nomeEducador == '') {
                        console.log('ERRO: Você deve informar o nome do professor(a)')
                        entradaDados.close()
                    } else {

                        let educador = nomeEducador
                        entradaDados.question('Informe o gênero do professor(a) \n 1 - Feminino\n 2 - Masculino\n', function (generoEducador) {

                            if (generoEducador == '') {
                                console.log('ERRO: Você deve informar o gênero do professor(a)')
                                entradaDados.close()
                            } else if (generoEducador < 1 || generoEducador > 2) {
                                console.log('ERRO: Você deve informar um gênero válido')
                                entradaDados.close()
                            } else if (isNaN(generoEducador)) {
                                console.log('ERRO: Você deve dígitar um número')
                                entradaDados.close()
                            } else {

                                let generoDoEducador = generoEducador
                                entradaDados.question('Informe qual o seu curso: \n', function (nomeCurso) {

                                    if (nomeCurso == '') {
                                        console.log('ERRO: Você deve informar o nome do curso')
                                        entradaDados.close()
                                    } else {

                                        let curso = nomeCurso
                                        entradaDados.question('Informe a disciplina: \n', function (nomeDisciplina) {

                                            if (nomeDisciplina == '') {
                                                console.log('ERRO: Você deve informar a disciplina')
                                                entradaDados.close()
                                            } else {

                                                let disciplina = nomeDisciplina
                                                entradaDados.question('Informe a nota 1: \n', function (valor1) {
                                                    let nota1 = valor1.replace(',', '.')

                                                    entradaDados.question('Informe a nota 2: \n', function (valor2) {
                                                        let nota2 = valor2.replace(',', '.')

                                                        entradaDados.question('Informe a nota 3: \n', function (valor3) {
                                                            let nota3 = valor3.replace(',', '.')

                                                            entradaDados.question('Informe a nota 4: \n', function (valor4) {
                                                                let nota4 = valor4.replace(',', '.')

                                                                let resultado
                                                                resultado = sistema.calculoNotas(nota1, nota2, nota3, nota4)

                                                                if (generoAluno == 1) {
                                                                    generoAluno = "Aluna"
                                                                } else if (generoAluno == 2) {
                                                                    generoAluno = 'Aluno'
                                                                }

                                                                if (generoEducador == 1) {
                                                                    generoEducador = "Professora"
                                                                } else if (generoEducador == 2) {
                                                                    generoEducador = 'Professor'
                                                                }

                                                                if (resultado >= 50 && resultado <= 69) {

                                                                    console.log('Você está em exame!!!')

                                                                    entradaDados.question('Informe a nota do Exame: \n', function (notaExame) {

                                                                        notaDoExame = notaExame.replace(',', '.')

                                                                        mediaExame = exame.mediaExame(resultado, notaDoExame)

                                                                        if (resultado >= 60) {
                                                                            status = 'Aprovado'
                                                                        } else if(resultado <= 59){
                                                                            status = 'Reprovado'
                                                                        }

                                                                        console.log(`${generoAluno} ${aluno}
                                                                        ${generoEducador} ${educador}
                                                                        Curso: ${curso}
                                                                        Disciplina: ${disciplina}
                                                                        Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}
                                                                        Exame: ${notaExame}
                                                                        Média Final: ${mediaExame}
                                                                        Status: ${status}`)
                                                                        entradaDados.close()

                                                                    })

                                                                } else{
                                                                    resultado = sistema.exibirResultado(generoAluno, aluno, generoEducador, educador, curso, disciplina, nota1, nota2, nota3, nota4, resultado)
                                                                    entradaDados.close
                                                                }
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


