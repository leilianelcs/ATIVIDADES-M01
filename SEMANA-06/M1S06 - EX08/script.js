//[M1S06] Ex 8 - Projeto (parte 3)
//Para validar ainda mais o mini projeto criado a partir dos exercícios 06 e 07 iremos adaptar melhor nossa aplicação. 
//Antes de tudo, assim que executar a aplicação você irá verificar no localStorage se já existe a chave “endereco” caso haja, 
//deverá ser informado que já existe um endereço na nossa base de dados e se o usuário deseja fazer uma nova 
//requisição para um novo endereço, após disponibilizar o prompt para a captura do novo cep, 
//salve os dados na mesma chave “endereco” existente no localStorage. Caso não haja a chave o fluxo deve ser feito 
//como no exercício 06 e 07, ou seja, você irá capturar o cep pelo prompt, fazer a requisição, e salvar os dados no localStorage.
//OBS: Lembre-se dos comandos para criar ou editar e pegar um item no Local Storage.



// Verifica se já existe um endereço no localStorage
let endereco = localStorage.getItem('endereco');

if (endereco) {
    // Se existir, pergunta se o usuário quer buscar um novo endereço
    let novoEndereco = prompt("Já existe um endereço salvo. Deseja buscar um novo endereço?");
    if (novoEndereco) {
        buscarEndereco();
    }
} else {
    buscarEndereco();
}

function buscarEndereco() {
    // Solicita o CEP do usuário
    let cep = prompt("Informe o CEP:");

    // Faz uma solicitação para a API ViaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => response.json())
        .then(data => {
            // Verifica se a API retornou um erro
            if (!data.erro) {
                // Formata o endereço
                let enderecoFormatado = `${data.logradouro}, ${data.complemento ? data.complemento + ' - ' : ''}${data.bairro} - ${data.localidade}/${data.uf}`;

                // Exibe o endereço em um alert
                alert("Este é seu endereço? " + enderecoFormatado);

                // Pergunta se os dados estão corretos
                let confirmacao = prompt("Os dados estão corretos?");
                if (confirmacao) {
                    // Se estiverem corretos, salva o endereço no localStorage
                    localStorage.setItem('endereco', JSON.stringify(data));
                }
            } else {
                alert("CEP não encontrado.");
            }
        })
        .catch(error => console.error('Erro:', error));
}
