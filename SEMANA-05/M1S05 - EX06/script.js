//[M1S05] Ex 6 - Filtragem de Elementos
//Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores. 
//Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.


//array de números
let numeros = [11, 17, 28, 15, 4];


// filtrando somente os números pares usando o filter
let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

// Imprime os números pares no console
console.log(pares);
