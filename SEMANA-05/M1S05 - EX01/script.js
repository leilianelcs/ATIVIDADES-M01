//[M1S05] Ex 1 - Acesso simples

//Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array.
//Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.

//criando array de frutas
//let frutas =["Cupuaçu", "Bacuri", "Açaí"];

//imprimindo segunda fruta do array
//console.log(frutas[1]);

//Desafio

//array das frutas
let frutas =["Cupuaçu", "Bacuri", "Açaí"];

// Recebe a entrada do usuário para cada fruta
for (let i = 0; i < 3; i++) {
    frutas[i] = prompt("Digite o nome de uma fruta:");
}

// Imprime a segunda fruta do array
console.log(fruta[1]);