"use strict";

/*

EX003 - peça 10 valores ao usuário pelo prompt e adicione cada um deles à um array. Em seguida imprima-os no console.

*/

const array = [];

for(let index = 0; index < 10; index++) {
    let number = Number(prompt('Digite um número: '));
    array.push(number);
}

console.log(array);
