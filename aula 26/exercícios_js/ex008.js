"use strict";

/*

EX008 - crie um vetor com 5 elementos e elimine todos os elementos com a função splice.

EX009 - refaça o ex008 eliminando apenas o 1º e o último valor. 

EX010 - refaça o ex008 adicionando um elemento na 1ª posição e na última.

*/

const array = [2, 3, 4, 5, 6];

console.log(array);
array.unshift(1);
array.push(7);
console.log(array);

array.shift();
array.pop();
array.splice(0);
console.log(array);

// unshift, push, pop, shift, splice