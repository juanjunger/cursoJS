// Padrão que o JS segue para precisão dos números com casas decimais: IEEE 754-2008

let num1 = 1500; // Number
let num2 = 2.5; // Number
let num3 = 15.23523525235253;

console.log(num1 + num2); // 3.5

// Converter números para strings
console.log(num1.toString() + num2); // concatena string + number
console.log(num1.toString() + num2.toString()); // concatena string + string
console.log(num1.toString(2)); // converte o num1 para string binário
console.log(num1.toString(10)); // converte o num1 para string decimal
console.log(num1.toString(16)); // converte o num1 para string hexadecimal

// Arredondar o valor real para cima com 2 casas decimais
console.log(num3.toFixed(2));

// Verificar se o número é inteiro
console.log(Number.isInteger(num1)); // true
console.log(Number.isInteger(num2)); // false

// Verificar se o número é NaN = not a number
console.log(Number.isNaN(num1 * 'hello world')); // true
console.log(Number.isNaN(num1 * num2)); // false

// Precisão das casas decimais
let num4 = 0.7;
let num5 = 0.1;

console.log(num4 + num5);
console.log(num4 + num5);