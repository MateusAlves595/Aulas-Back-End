/*************************************************************************
 * Objetivo: Funções para calcular a média de notas de um aluno com o exame
 * Data: 10/02/3023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 * ***********************************************************************/


 const mediaExame = function(mediaDoAluno, notaDoExame) {

    let media = mediaDoAluno
    let exameNota = notaDoExame

        let mediaExame = (Number(media) + Number(exameNota)) / 2  

        return mediaExame
 }

 

 module.exports = {
     mediaExame
 }

 