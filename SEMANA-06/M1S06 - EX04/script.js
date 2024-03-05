//[M1S06] Ex 4 - LocalStorage
//Crie uma função que irá pedir 3 informações através do prompt, o nome, a idade e o email. 
//Monte essas informações em um objeto igual ao do exercício 03, após isso salve esse objeto com a chave “user” no localStorage.

function getUserInfo() {
    // prompt para coletar as informações do usuário
    let nome = prompt("Qual seu nome?");
    let idade = prompt("Qual sua idade?");
    let email = prompt("Digite seu email:");
  
    // Cria um objeto com as informações do usuário
    var user = {
      nome: nome,
      idade: idade,
      email: email
    };
  
    // Converte o objeto para uma string JSON e salva no localStorage
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  // Chama a função
  getUserInfo(); 
  