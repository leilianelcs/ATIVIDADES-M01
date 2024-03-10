//[M1S07] Ex 8 - Criando classe Cliente
//Crie uma nova classe chamada de Cliente. Esta classe deve herdar a classe Pessoa.
//Além disso ela deve possuir os seguintes atributos:
//telefone
//email
//clienteDesde - deve ser uma string no formato “ANO-MES-DIA”
//Crie um construtor para receber os valores para todos os atributos da classe Cliente e também da classe Pessoa, 
//sendo necessário passar parâmetros para o construtor base da classe Pessoa.

// Criando classe Pessoa
class Pessoa {
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
// Criando classe Clientes
class Cliente extends Pessoa {
   //Atributos
    telefone;
    email;
    clienteDesde
    
    // Criando construtor para receber valores para a classe Pessoa e classe Clientes
    constructor(nome, idade, profissao, telefone, email, clienteDesde){
        super(nome, idade, profissao)
        this.telefone = telefone
        this.email = email
        this.clienteDesde = clienteDesde
}
}
// Instância
let ClienteLeiliane = new Cliente("Leiliane Costa", 38, "Relações Públicas", "(99) 99999-9999", "leilianelcs@gmail.com", "2024-02-28")
console.log(ClienteLeiliane)