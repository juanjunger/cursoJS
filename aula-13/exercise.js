/* Objetivo: Exibir a sequência B C A apenas atribuindo as variáveis */

// Primeira resolução: com uma variável auxiliar
let a = 'A';
let b = 'B';
let c = 'C';
let aux;

aux = a;
a = b;
b = c;
c = aux;

console.log(a, b, c);

// Segunda solução: sem uma variável auxiliar
let _a = 'A';
let _b = 'B';
let _c = 'C';

[_a, _b, _c] = [_b, _c, _a];

console.log(a, b, c);

