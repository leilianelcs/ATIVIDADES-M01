//[M1S06] Ex 7 - Projeto (parte 2)
//Continuando o exercício 06 iremos além de informar através do alert o endereço informado pelo cep 
//iremos perguntar também se os dados informados estão corretos, caso esteja tudo correto salve 
//esses dados no localStorage na chave “endereco”.
//OBS: Revise o conteudo do localStorage para relembrar o comando para salvar no localStorage.



//Obtendo CEP do usuário
let cep = prompt("Por favor, insira seu CEP");

// Faz uma solicitação para a API ViaCEP
fetch(`https://viacep.com.br/ws/${cep}/json`, { method: "GET"})
  .then((retornoFetch)=>{
    return retornoFetch.json();
  })
  .then((retornoApi) => {
    
    // Formata o endereço e exibe o endereço em um alert
    alert("Este é seu endereço? " + `${retornoApi.logradouro}, ${retornoApi.complemento} - 
  ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`);

  //pergunta ao usuário se os dados estão corretos
      let resposta = prompt("Os dados estão corretos?");

      //salvando no localStorage em caso positivo
    if (resposta.toLowerCase() == "sim") {
      localStorage.setItem("endereco", JSON.stringify(retornoApi));
    }
  });
