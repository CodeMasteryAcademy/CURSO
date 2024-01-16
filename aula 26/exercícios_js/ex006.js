"use strict";

/*

EX006 - refaça o ex004, perguntando ao usuário que valor deseja eliminar. Elimine e no final imprima o array no console.

*/

const array = [];

for(let index = 0; index < 2; index++) {
    let name = prompt('Informe um nome: ');
    array.push(name);
}

const value = prompt('Informe o nome que deseja eliminar: ');
const position = array.indexOf(value);

if(position === -1) {
    alert('Valor não encontrado');
} else {
    array.splice(position, 1);
}

console.log(array);