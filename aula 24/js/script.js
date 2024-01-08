/*

    OTHERS:

*/




const somar = (a=0, b=0) => { return a + b };
const subtrair = (a=0, b=0) => { return a - b };
const multiplicar = (a=0, b=0) => { return a * b };
const dividir = (a=0, b=0) => { return a / b };

function operar(num1, num2, operacao) {
    return operacao(num1, num2);
}

const resultado = operar(5, 2, multiplicar);

console.log(resultado);


