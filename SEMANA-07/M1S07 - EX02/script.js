//[M1S07] Ex 2 - Criando construtor da classe Produto
// Crie um construtor para a classe Produto que permita receber os valores base para cada um dos parâmetros.

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

  } 
  let produto = new Produto("macarrão", 8, 10)
console.log(produto);