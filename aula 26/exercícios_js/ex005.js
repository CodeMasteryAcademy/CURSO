"use strict";

/*

EX005 - refaça o ex004, eliminando o 3º nome do array e em seguinda imprima cada um dos valores no array com o for of

*/

const array = [];

for(let index = 0; index < 5; index++) {
    let name = prompt('Informe um nome: ');
    array.push(name);
}

const value = prompt('Informe o nome que deseja eliminar: ');
array.indexOf(value);

console.log(array);

// array.splice(2, 1);

// for(let name of array) {
//     console.log(name);
// }
