/********************************************************
 * Objetivo: Utilizar códigos e métodos de array
 * Data: 24/02/2023
 * Autor: Mateus Alves da Silva
 * Versão: 1.0
 ********************************************************/

// [] - representa o objeto do tipo array
// {} - representa um objeto do tipo JSON

const listaNomes = ['José', 'Maria', 'Luiz', 'Antônio', 'Ana', 'Carlos']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memoria']

const exibindoDados = function(){
    //Verifica o tipo de dados dos itens do array
    console.log(typeof (listaNomes))

    //Permite visualizar o conteudo do array no formato de uma tabela
    console.table(listaNomes)

    console.log('o nome do aluno é: ' + listaNomes[2])

    //lenght retorna a quantidade de itens de um array
    console.log(listaNomes.length)

    //Percorrendo um array com o while
    let cont = 0
    let qtdeItens = listaNomes.length

    while (cont < qtdeItens) {
        console.log('o nome do aluno é: ' + listaNomes[cont])
        cont++
    }

    //Percorrendo um array com For
    for (let cont = 0; cont < qtdeItens; cont++)
        console.log('o nome do aluno é: ' + listaNomes[cont])

    //Percorrendo um array com ForEach
    listaNomes.forEach(function (nome) {
        console.log('o nome do aluno é: ' + nome)
    })
}

const manipulandoDados = function(){
    //push - adiciona novos itens no final do array, preservando os elementos anteriores
    listaProdutos.push('Memória')
    console.table(listaProdutos)

    //unshift - adiciona novos itens no começo do array, reorganizando todos os elementos
    listaProdutos.unshift('Hd', 'Placa-Mãe', 'SSD')
    console.table(listaProdutos)

    //pop - remove o ultimo item do array, preservando os elementos anteriores
    listaProdutos.pop()
    console.log(listaProdutos)

    //shift - remove o item do inicio do array, reorganizando todos os elementos
    listaProdutos.shift()
    console.log(listaProdutos)

    //slice - permite criar uma cópia de um array
    const novosProdutos = listaProdutos.slice()
    console.log(novosProdutos)

    //indexOf - permite buscar dentro de um array um item
    //se o retorno for -1, o item não foi encontrado
    //se o retorno foi maior ou igual a 0, o item foi encontado e ele retorna o indice
    console.log(listaProdutos.indexOf('Mouse'))

    //Exemplo de utilização do indexOf
    if(listaProdutos.indexOf('Teclado') >= 0){
        console.log('item encontrado')
    }else{
        console.log('item não encontrado')
    }
}

const removerProduto = function(nomeProduto){
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status

    //splice - permite apagar um ou mais itens de um array através do indice
    //Se for encaminhado somente o indice ele ira apagar todos os itens para baixo
    //Para limitar a qtde de itens a ser apagado, devemos informar como segundo parametro
    if(indice >= 0){
        listaProdutos.splice(indice, 1)
        status =  true
    } else{
        status = false
    }

    return status
}

const retornaNovoArray = function(array, nomeItem){
    let nome = nomeItem
    let novoArray = array.slice()
    let indice = novoArray.indexOf(nome)
    let status
    
    if(indice >= 0){
        novoArray.splice(indice, 1)
        status = true
    }else{
        status = false
    }

    if(status == true)
        return novoArray
    else
        return status    
}

console.log(retornaNovoArray('PC'))