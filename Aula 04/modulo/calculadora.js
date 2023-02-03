/***************************************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Data: 03/02/2023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 * **************************************************************************/

//Função para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVISAO)
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado

    if (operacao == 'SOMAR')
        resultado = valor1 + valor2
    else if (operacao == 'SUBTRAIR')
        resultado = valor1 - valor2
    else if (operacao == 'MULTIPLICAR')
        resultado = valor1 * valor2
    else if (operacao == 'DIVIDIR') {
        if (valor2 == 0)
            console.log('ERRO: Não é possivel realizar a divisão por 0.')
        else
            resultado = valor1 / valor2
    } else {
        console.log('ERRO: A sua escolha de operação matemática foi inválida!')
        entradaDados.close()

    } if (resultado == undefined)
        return false
    else
        return resultado
}

//Permite adicionar um fuction no escopo global (public)
//As functions que não estiverem  aqui no exports, serão tratadas como escopo local (private)
module.exports = {
    calculadora
}