//Object
const operations = {
    add: (a=0, b=0) => {
        return a + b;
    },
    mine: (a=0, b=0) => {
        return a - b;
    },
    times: (a=0, b=0) => {
        return a * b;
    },
    divide: (a=0, b=0) => {
        return a / b;
    }
};


function operar(operation) {
    const spanResult = document.querySelector('.result');
    const input1 = document.querySelector('#num1');
    const input2 = document.querySelector('#num2');
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    // bracket notation
    const result = operations[operation](num1, num2);

    spanResult.innerHTML = "Resultado: " + result;
}
