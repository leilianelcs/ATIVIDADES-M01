//[M1S04] Ex 3 - Arrow function
// Crie uma arrow function que recebe um array de números e calcula a média deles.
// OBS: para pegar o tamanho de um array use nomeDoArray.length


//array de números para calcular a média de idade da família
const exercicio03 = (array)=>{
    let soma = 0;
for(let numero of array){
    soma = soma += numero;
}

//calcular a média
let media = soma/array.length;
return media;
}
//idade familiares
let arrayNumeros = [38,37,9,1];
console.log(exercicio03(arrayNumeros));