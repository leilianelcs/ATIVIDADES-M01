//[M1S07] Ex 6 - Criando método AtualizarPreco
//Crie um método chamada de AtualizarPreco dentro da classe Produto.
//Este método deve receber como parâmetro o novo valor do produto e atualizar o preço atual.




//criando classe de produtos
class Produto {
  //atributos
    nome;
    preco;
    quantidade;

    //criando construtor para receber valores
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }

    //Método
    Vender(quantidadeVendida) {
      if (quantidadeVendida > this.quantidade) {
        console.log("Estoque insuficiente");
        console.log(`Somente ${this.quantidade} itens disponíveis!`)
    return
      } 
      // Calculando quantidade vendida
      this.quantidade -= quantidadeVendida
    }
    
    Repor(quantidadeReposta) {
      this.quantidade += quantidadeReposta;
    }

    MostrarEstoque() {
             console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`);
           }

    AtualizarPreco(novoPreco = 6) {
      this.preco = novoPreco;
    }

  }

  // instância
 let produto = new Produto("CANETA BIC AZUL", 8, 5)
 produto.Vender(4) // Anota a quantidade do produto vendido
 produto.Repor(4); // Aumenta a quantidade do produto
 produto.MostrarEstoque() // Mostra o estoque atual do produto
 produto.AtualizarPreco() //Atualização do preço
console.log(produto)

    
  