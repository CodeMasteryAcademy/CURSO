"use strict"

const num1OfPrompt = window.prompt('Informe um valor: ');
const num2OfPrompt = window.prompt('Informe outro valor: ');

const num1Value = Number(num1OfPrompt);
const num2Value = Number(num2OfPrompt);
const soma = num1Value + num2Value;

alert(`a soma dos números é: ${soma}`);