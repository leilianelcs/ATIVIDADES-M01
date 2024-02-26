//[M1S04] Ex 2 - Função
//Crie uma função nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar


//Verificar se o número é par ou ímpar
function verificarParOuImpar(n) {
    
    // Se o número for divisível por 2, ele é par
    if (n % 2 == 0) {
        return "O número é par!";

    //// Se o número não for divisível por 2, ele é ímpar
    } else {
        return "O número é ímpar!";
    }
    
}
//imprimir resultado: par ou ímpar?
console.log(verificarParOuImpar(8))
