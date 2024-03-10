//[M1S07] Ex 7 - Criando classe Pessoa
//Crie uma nova classe chamada de Pessoa que deve ter os seguintes atributos:
//nome
//idade
//profissao
//Esta classe deve possuir um construtor para receber os valores para cada um dos atributos.

// Criando classe Pessoa
class Pessoa {
    //Atributos
    nome;
    idade
    profissao;

    // Criando construtor para receber valores para a classe Pessoa
    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}
// Instância
let ClienteLeiliane = new Pessoa("Leiliane Costa", 38, "Relações Públicas")
console.log(ClienteLeiliane)
    