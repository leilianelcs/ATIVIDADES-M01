//[M1S07] Ex 5 - Criando método MostrarEstoque
//Crie um método chamado de MostrarEstoque() dentro da classe Produto.
//Este método deve exibir uma mensagem parecida com a seguinte:
//“O produto CANETA BIC AZUL possui 5 unidades disponíveis”



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
    
    Repor(quantidadeReposta) {
      this.quantidade += quantidadeReposta;
    }

    MostrarEstoque() {
             console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`);
           }

  }

  // Instância
 let produto = new Produto("CANETA BIC AZUL", 8, 5)
 produto.Vender(4) // Anota a quantidade do produto vendido
 produto.Repor(4); // Aumenta a quantidade do produto
 produto.MostrarEstoque() // Mostra o estoque atual do produto
console.log(produto)
