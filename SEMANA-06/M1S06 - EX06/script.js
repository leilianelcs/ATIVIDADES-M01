//[M1S06] Ex 6 - Projeto (parte 1)
//Para treinar um pouco mais requisições fetch inicie uma comunicação com a API via cep (Documentação - https://viacep.com.br/ ).
//OBS: 
//Crie uma página html para imprimir o endereço através do cep.
//Utilize este endpoint: https://viacep.com.br/ws/{cep_informado}/json
//Caso a api retorne sucesso imprima em um alert o endereço formatado da seguinte forma: “logradouro, complemento - bairro - localidade/uf”
//o cep_informado será passado por prompt pelo usuário.


function getEndereco() {
    // Obtendo CEP do usuário
    let cep = prompt("Por favor, insira seu CEP");
  
    // Faz uma solicitação para a API ViaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then(response => response.json())
      .then(data => {
        // Formata o endereço
        var endereco = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`;
  
        // Exibe o endereço em um alert
        alert("Este é seu endereço? " + endereco);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }
  
  getEndereco(); // Chama a função

