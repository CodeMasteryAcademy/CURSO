"use strict";

/*

Ex001 - Crie um vetor com os valores: 2, 3, 45, "Ana", true, null e imprima cada valor com o for in.

*/

const array = [2, 3, 45, "Ana", true, null];

for(let index in array) {
    console.log(array[index]);
}
