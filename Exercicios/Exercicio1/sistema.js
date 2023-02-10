/*************************************************************************
 * Objetivo: Funções para calcular a média de notas de um aluno
 * Data: 10/02/3023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 * ***********************************************************************/

 const calculoNotas = function() {

    let media
    let status = true
    let situacao

    const mediaNotas = (valor1, valor2, valor3, valor4) => {

    if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == ''){
        console.log('ERRO: Você deve informar todas as notas')
        status = false
    } else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){
        console.log('ERRO: Você deve dígitar somente numeros')
        status = false
    }else if(valor1 < 0 || valor1 > 100 || valor2 < 0 || valor2 > 100 || valor3 < 0 || valor3 > 100 || valor4 < 0 || valor4 > 100){
        console.log('ERRO: Todas as notas devem estar entre 0 e 100')
        status = false
    } else {
        media = Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4) / 4

        if(media < 50){
            console.log('Reprovado')
            situacao = "Reprovado"
        } else if(media >= 70){
            console.log('Aprovado')
            situacao = 'Aprovado'
        }
    return media
   
 }
}

module.exports = {
    calculoNotas
 }
}
