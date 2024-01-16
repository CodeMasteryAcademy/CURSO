"use strict";

/*

EX004 - adicione, pedindo primeiro 5 nomes ao usuário pelo prompt e imprima-os no console por ordem alfabética.

*/




const array = [];

for(let index = 0; index < 5; index++) {
    let name = prompt('Informe um nome: ');
    array.push(name);
}

console.log(array.sort());


