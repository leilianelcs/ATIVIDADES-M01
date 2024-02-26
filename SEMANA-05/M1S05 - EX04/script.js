//[M1S05] Ex 4 - Soma de Elementos
//Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos do array. 
//Utilize o reduce para realizar a soma.


//array de números exercício anterior
let numeros = [11, 17, 28, 15, 4];

//calculando a soma de todos os elementos do array
let resultado = numeros.reduce((numeroAtual, soma) =>{
    return soma + numeroAtual
},0);

//imprima a soma de todos os elementos do array
console.log(resultado);
