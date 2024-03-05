//[M1S06] Ex 3 - Fetch API
//Crie um arquivo JSON chamado data.json com a seguinte estrutura interna:
//{
//"nome": "João",
//"idade": 30,
//"email": "joao@example.com"
//}
//Após isso, utilize a fetch API para obter o arquivo JSON e, em seguida, a resposta deve ser convertida para o 
//formato JSON usando o método .json() . 
//O conteúdo JSON deve ser então exibido na página HTML.

//utilizando a fetch API para obter o arquivo JSON
fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data); 

    // Exibir na página HTML
    document.body.innerHTML = `
      <h1>${data.nome}</h1>
      <p><h2>Idade: ${data.idade}</h2></p>
      <p><h3>Email: ${data.email}</h3></p>
    `;
  })
  .catch((error) => {
    console.error('Erro:', error);
  });

