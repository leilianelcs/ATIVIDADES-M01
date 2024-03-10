//[M1S07] Ex 4 - Criando método Repor
//Crie um método chamado Repor() dentro da classe Produto.
//Este método deve receber como parâmetro a quantidade reposta e adicionar o montante à quantidade do produto.



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
    //Calculando quantidade vendida
    this.quantidade -= quantidadeVendida
    }
    
    Repor(quantidadeReposta) {
      this.quantidade += quantidadeReposta;
    }
  }

  // Instância
 let produto = new Produto("macarrão", 8, 5)
 produto.Vender(4) // Anota a quantidade do produto vendido
 produto.Repor(5); // Aumenta a quantidade do produto
console.log(produto)
