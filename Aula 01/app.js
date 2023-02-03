//Comentário em linha

/*

Comentário em bloco

*/

console.log('Testando o Node.Js')

//Import da biblioteca que permite entrada de dados via teclado
var readline = require('readline')

//Criando um objeto que será especialista na entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//CallBack - Uma função de CallBack permite que na própria linha de programação
//seja uma variavel, um processamento, a chamada de um metodo possa acontecer
//um retorno de dados automaticamente, sem precisar sair deste processamento

//Criar uma interação com o usuário, para entrada de dados
//Após o usuário digitar o conteúdo, o objeto entradaDados permite
//retornar o conteúdo digitado para ser utilizado. Isso acontece através
//de uma função de CallBack.

entradaDados.question('Favor digitar o seu nome: \n', function(nome){
    console.log('Bem vindo, ' + nome + ' ao servidor Node.js')
})

