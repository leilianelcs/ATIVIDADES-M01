//exemplo escopo
let a = 2; //escopo global

function soma(){
    //escopo local
    let b = 3;
        return a + b;   
}
console.log(soma());


//Exemplo Closure
function soma (x) {
    // x = 5
    return function(y) {
        // x = 5 / y = 2
        return x + y;
    };
}
var add5 = soma(5);
console.log(add5(2)) // 7