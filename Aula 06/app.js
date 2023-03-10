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

/*********
 * JSON é compostor: chave (atributo) e valor
 * 
 * Chave    Valor   Chave       Valor     Chave     Valor
 * {nome : 'José', celular : '11843667', email : 'José@gmail.com'}
 * 
 *********/

const exibindoDados = function () {
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

const manipulandoDados = function () {
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
    if (listaProdutos.indexOf('Teclado') >= 0) {
        console.log('item encontrado')
    } else {
        console.log('item não encontrado')
    }
}

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status

    //splice - permite apagar um ou mais itens de um array através do indice
    //Se for encaminhado somente o indice ele ira apagar todos os itens para baixo
    //Para limitar a qtde de itens a ser apagado, devemos informar como segundo parametro
    if (indice >= 0) {
        listaProdutos.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    return status
}

const removerItem = function (array, nomeItem) {
    let nome = nomeItem
    let novoArray = array.slice()
    let indice = novoArray.indexOf(nome)
    let status

    if (indice >= 0) {
        novoArray.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    if (status)
        return novoArray
    else
        return status
}

const listagemProdutos = function () {

    //Forma nº1 de cria um JSON e já atribuir chaves e valores
    //let listProdutosJSON = {produtos : listaProdutos, clientes : listaNomes}

    //Forma nº2 de criar um JSON, onde as chaves e valores são atribuidas no decorrer do projeto
    // let listProdutosJSON = {}

    // listProdutosJSON.produtos = listaProdutos
    // listProdutosJSON.clientes = listaNomes

    // //Extraindo valores de um JSON e ARRAY
    // console.log(listProdutosJSON)
    // console.log(listProdutosJSON.produtos[1])
    // console.log(listProdutosJSON.clientes[5])

    let listProdutosJSON = {}
    let listProdutosArray =
        [
            { nome: 'Monitor', quant: 300, marca: 'Dell', valor: 1000, codigo: 1 },
            { nome: 'Monitor', quant: 280, marca: 'LG', valor: 1300, codigo: 2 },
            { nome: 'Teclado', quant: 800, marca: 'Dell', valor: 200, codigo: 3 },
            { nome: 'Teclado', quant: 360, marca: 'LG', valor: 230, codigo: 4 },
            { nome: 'Teclado', quant: 80, marca: 'Razer', valor: 120, codigo: 5 },
            { nome: 'Teclado', quant: 100, marca: 'Logitech', valor: 1230, codigo: 6 },
            { nome: 'Mouse', quant: 790, marca: 'Dell', valor: 115, codigo: 7 },
            { nome: 'Mouse', quant: 25, marca: 'Razer', valor: 1800, codigo: 8 }
        ]


    //Arrays para cores
    let listCoresDellArray = ['Preto', 'Branco', 'Cinza']
    let listCoresLgArray = ['Preto', 'Cinza']
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul']
    let listCoresMouseArray = ['Branco', 'Preto', 'Cinza', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo']

    //Arrays para modelos
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4K']
    let listModelosTeclado = ['Mecânico', 'Semi-Mecânico', 'Membrana', 'Óptico']

    //Adiciona o Array de produtos dentro de um JSON
    listProdutosJSON.produtos = listProdutosArray

    //Adicionar cores ao monitor Dell e Lg
    listProdutosJSON.produtos[0].cores = listCoresDellArray
    listProdutosJSON.produtos[1].cores = listCoresLgArray

    //Adicionar cores ao teclado Dell, Lg e genéricos
    listProdutosJSON.produtos[2].cores = listCoresDellArray
    listProdutosJSON.produtos[3].cores = listCoresLgArray
    listProdutosJSON.produtos[4].cores = listCoresTecladoArray
    listProdutosJSON.produtos[5].cores = listCoresTecladoArray

    //adicionar cores ao mouse Dell e genérico
    listProdutosJSON.produtos[6].cores = listCoresDellArray
    listProdutosJSON.produtos[7].cores = listCoresMouseArray


    //Adiionar modelos aos monitores
    listProdutosJSON.produtos[0].modelos = listModelosMonitor
    listProdutosJSON.produtos[1].modelos = listModelosMonitor

    //Adicionar modelos aos teclados
    listProdutosJSON.produtos[2].modelos = listModelosTeclado
    listProdutosJSON.produtos[3].modelos = listModelosTeclado
    listProdutosJSON.produtos[4].modelos = listModelosTeclado
    listProdutosJSON.produtos[5].modelos = listModelosTeclado

    // console.log(listProdutosJSON)

    //Percorre o array de produtos para listar os itens
    listProdutosJSON.produtos.forEach(function (itemProduto) {
        console.log('Nome: ' + itemProduto.nome)
        console.log('Marca: ' + itemProduto.marca)

        //Tratamento de erro para quando não existir array de cores
        if (itemProduto.cores != undefined) {
            //Percorre o array de cores que está dentro do array de cores
            itemProduto.cores.forEach(function (itemCor) {
                console.log('Cores:' + itemCor)
            })
        }

        //Tratamento de erro para quando não existir array de modelos
        if (itemProduto.modelos != undefined) {
            //Percorre o array de modelos que está dentro do array de produtos
            itemProduto.modelos.forEach(function (itemModelo) {
                console.log('Modelos: ' + itemModelo)
            })
        }

    })

}

listagemProdutos()