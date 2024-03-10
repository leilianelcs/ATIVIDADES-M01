//[M1S07] Ex 3 - Criando método Vender
//Crie um método para a classe Produto chamado de Vender().
//Este método deve receber como parâmetro a quantidade vendida e deve reduzir (deduzir) da quantidade do produto. 
//Porém, para ser possível essa venda a quantidade vendida não pode ser maior que a quantidade disponível.
//Caso não haja quantidade suficiente, exiba uma mensagem de “Estoque insuficiente”.


// Criando classe de produtos
class Produto {
  // Atributos
    nome;
    preco;
    quantidade;

    // Criando construtor para receber valores
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }

    // Método
     Vender(quantidadeVendida) {
      if (quantidadeVendida > this.quantidade) {
        console.log("Estoque insuficiente");
        console.log(`Somente ${this.quantidade} itens disponíveis!`)
      return
      }
      // Calculando quantidade vendida
      this.quantidade -= quantidadeVendida
    }
  }
  // Instância
 let produto = new Produto("macarrão", 8, 5)
 produto.Vender(4) // Anota a quantidade do produto vendido
console.log(produto)