//[M1S04] Ex 4 - Funções de callback
//Implemente uma função chamada adicao que aceita dois números como argumentos e uma função anônima. 
//Esta função deve simular uma operação de adição, onde os dois números são somados. 
//Após a soma, chame a função passada como parâmetro e o resultado deve ser passado para a função anônima.




// Função adicao com dois números e uma função anônima
function adicao(num1, num2, callback) {
     // Realiza a adição
    let soma = num1 + num2;

     // Chama a função anônima
    callback(soma)
}
// realizar o cálculo e imprimir o resultado
adicao(9, 1, (soma)=>{
    console.log("O resultado da soma é: " + soma);
})
