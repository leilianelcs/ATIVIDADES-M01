//[M1S06] Ex 2 - Async/Await
//Crie uma função chamada getUserInfo que simula uma consulta assíncrona a um servidor para obter informações de um usuário. 
//Essa função deve retornar um objeto com as informações de um usuário, como nome, idade e email (você pode definir os valores). 
//Com o setTimeout simule o tempo de espera da consulta para demorar 2 segundos. Utilize async/await para realizar a chamada 
//de forma assíncrona.
//Em seguida, crie outra função que utiliza getUserInfo para obter as informações do usuário e, após receber essas informações, 
//exibe-as no console.


// Função que simula uma consulta assíncrona a um servidor para obter informações de um usuário
async function getUserInfo() {
    return new Promise((resolve, reject)=>{
                setTimeout(() => {
            let user = {
                nome: "Leiliane",
                idade: 38,
                email: "leiliane_sa@estudante.sesisenai.org.br"
            };
            resolve(user);
        }, 2000);
    });
}

// Função que utiliza getUserInfo para obter as informações do usuário e exibe-as no console
async function infoUsuario() {
    let DadosUsuario = await getUserInfo();
    console.log(DadosUsuario);
}

// Chama a função infoUsuario
infoUsuario();


