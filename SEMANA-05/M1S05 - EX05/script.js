//[M1S05] Ex 5 - Ordenação Crescente
//Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros. 
//Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.


//array de números do exercício anterior
let numerosOrdenados = [11, 17, 28, 15, 4];


// colocar array em ordem crescente
numerosOrdenados.sort(function(a, b) {
    return a - b;
});

// Imprime o array já ordenado 
console.log(numerosOrdenados);