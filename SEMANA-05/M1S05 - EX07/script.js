//[M1S05] Ex 7 - Mapeamento de Elementos
//Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array chamado quadrados que contenha o 
//quadrado de cada número do array numeros. Imprima o array quadrados no console. 
//Use o método map para realizar a criação de um novo array.

// array de numeros
let numeros = [11, 17, 28, 15, 4];

// Calculando o quadrado de cada número do array numeros
let quadrados = numeros.map((numero) => {
    return numero * numero;
});

// Imprime o array quadrados no console
console.log(quadrados);