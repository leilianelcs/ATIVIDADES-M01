//[M1S05] Ex 2 - Adicionar e Remover Elementos
//Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. 
//Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.

//criando array de frutas
let frutas =["Cupuaçu", "Bacuri", "Açaí"];


//adicionando fruta no array
frutas.push('Pitaya');

//removendo a primeira fruta do array
frutas.shift();

//imprimindo segunda fruta do array
console.log(frutas[1]);

//imprimindo array atualizado
console.log(frutas);