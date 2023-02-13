/*************************************************************************
 * Objetivo: Funções para calcular a média de notas de um aluno
 * Data: 10/02/3023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 * ***********************************************************************/

 const calculoNotas = function(valor1, valor2, valor3, valor4) {

    let resultado

    if(valor1 < 0 || valor1 > 100 || valor2 < 0 || valor2 > 100 || valor3 < 0 || valor3 > 100 || valor4 < 0 || valor4 > 100){
        console.log('ERRO: Todas as notas devem estar entre 0 e 100')
    } else {
        resultado = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)) / 4

    return resultado
 }
}

const exibirResultado = function(generoAluno, generoEducador, aluno, educador, curso, disciplina, nota1, nota2, nota3, nota4, resultadoFinal){

    let generoA = generoAluno
    let generoE = generoEducador
    let nomeA = aluno
    let nomeE = educador
    let nomeCurso = curso
    let nomeDisciplina = disciplina
    let n1 = nota1
    let n2 = nota2
    let n3 = nota3
    let n4 = nota4
    let resultado = resultadoFinal
    let media

    media = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4

        if (media >= 70){
            status = 'Aprovado'
        } else if(media < 50){
            status = 'Reprovado'
        }  

        console.log(`${generoA} ${nomeA}
        ${generoE} ${nomeE}
        Curso: ${nomeCurso}
        Disciplina: ${nomeDisciplina}
        Notas: ${n1}, ${n2}, ${n3}, ${n4}
        Exame: Não fez o exame
        Média Final: ${resultado}
        Status: ${status}`)

 } 

module.exports = {
    calculoNotas,
    exibirResultado
}
