/* Operadores aritméticos

 +: adição / concatenação
 -: subtração
 *: multiplicação
 /: divisão
 %: resto da divisão
 **: potenciação

 A precedência dos operadores é a mesma da matemática. 
 1 - (), 
 2 - **, 
 3 - *, /, %, 
 4 - +, -

 =: atribuição
 ++: incremento
 --: decremento

*/

// adição
const num1 = 5;
const num2 = 10;
console.log(num1 + num2) // 15
console.log(num1 + num2 + num1 + num2) // 30

// concatenação
const firstValue = '5';
const secondValue = 10;
console.log(firstValue + secondValue); // 510

// subtração
const num3 = 10;
const num4 = 6;
console.log(num3 - num4); // 4

// multiplicação
const num5 = 2;
const num6 = 3;
console.log(num5 * num6); // 6

// potenciação
const num7 = 5;
const num8 = 2;
console.log(num7 ** num8); // 25

// divisão
const num9 = 10;
const num10 = 5;
console.log(num9 / num10); // 2

// resto da divisão
const num11 = 10;
const num12 = 5;
console.log(num11 % num12); // 0


let num13 = 1; // atribuição

console.log(num13++); // incremento - atribui o valor e soma mais 1 // 1
console.log(++num13); // incremento - soma mais 1 e atribui o valor // 3

console.log(num13--); // decremento - atribui o valor e subtrai menos 1 // 3
console.log(--num13); // decremento - subtrai menos 1 e atribui o valor  // 1

let count = 0;
count += 2; // incrementa +2 ao valor e atribui em count. Mesmo que count = count + 2
count -= 2; // decrementa -2 ao valor e atribui em count. Mesmo que count = count - 2
count *= 2; // multiplca por 2 ao valor e atribui em count. Mesmo que count = count * 2
count /= 2; // divide por 2 ao valor e atribui em count. Mesmo que count = count / 2
count **= 2; // eleva por 2 ao valor e atribui em count. Mesmo que count = count ** 2

const num14 = 10;
const string1 = 'string';
console.log(num14 * string1) // NaN - not a number => erro de execução

const num15 = 10;
const string2 = '5';
console.log(num15 * string2) // 50 - O javascript converte a string para number e faz a multiplicação

console.log(parseInt('5.2')); // converte a string para um número inteiro
console.log(parseFloat('6.8')); // converte a string para um número flutuante
console.log(Number('7.4')); // converte a string para um número, mantendo o tipo original: inteiro ou flutuante