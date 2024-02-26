//[M1S04] Ex 7 - Laço for
//Você foi contratado por um supermercado para catalogar a compra de uma cliente. 
//Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar,
// só serão aceitas as seguintes respostas:
//(1)Hortifruti
//(2)Laticínios
//(3)Carnes
//(4)Peixes
//(5)Aves
//(6)Fechar pedido
//Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.
//Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.
//Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade.


//  Exibe a lista de produtos e quantidade 
let produto = ["Hortifruti", "Laticínios", "Carnes", "Peixes", "Aves"];
let quantidades = [0, 0, 0, 0, 0];

while (true) {
    // Pergunta qual produto o cliente deseja comprar
    let produto = prompt("Qual produto você deseja comprar?\n(1)Hortifruti\n(2)Laticínios\n(3)Carnes\n(4)Peixes\n(5)Aves\n(6)Fechar pedido");

    // Verifica o fechamento do pedido
    if (produto == "6") {
        break;
    }

    // Pergunta a quantidade do produto 
    let quantidade = prompt("Quantos deste item você deseja comprar?");

    // Atualiza a quantidade do produto
    quantidades[produto - 1] += parseInt(quantidade);
}

// Encontra o item de maior quantidade
let maxQuantidade = Math.max(...quantidades);
let produtoMaisComprado = produto[quantidades.indexOf(maxQuantidade)];

// Imprime o produto comprado em maior quantidade
alert("O produto comprado em maior quantidade foi: " + produtoMaisComprado);