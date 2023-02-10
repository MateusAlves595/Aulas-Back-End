/*************************************************************************
 * Objetivo: Funções para calcular a média de notas de um aluno com o exame
 * Data: 10/02/3023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 * ***********************************************************************/

 const mediaExame = function(media, notaExame) {

    let resultado
    let status = true

    if(notaExame == ''){
        console.log('ERRO: Você deve digitar a nota do exame')
        status = false
    } else if(isNaN(notaExame)){
        console.log('ERRO: Você deve digitar um numero')
        status = false
    } else if(notaExame < 0 || notaExame > 100){
        console.log('ERRO: A nota deve ter o valor entre 0 e 100')
        status = false
    } else{
        resultado = Number(notaExame) + Number(media) / 2
    }
    return resultado
 }

 module.exports = {
     mediaExame
 }

 