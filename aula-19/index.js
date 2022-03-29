/*
** Tipos primitivos (valores imutáveis) - string, number, boolean, undefined, null, bigint, symbol
** Tipos por referência (valores mutáveis) - array, object, function
*/

//          0123
let name = 'Juan';
name[0] = 'R'; // o valor da string é imutável, portanto essa linha de código não altera o primeiro caractere da string
console.log(name[0], name);

let a = 'A';
let b = a; // cópia do valor contido de a para b quando o dado é primitivo => nesse caso: string
console.log(a, b);

a = 'Outra string';
console.log(a, b); // o valor de b manteve o valor original de a

let c = [1, 2, 3];
let d = c; // d aponta para o mesmo lugar na memória que c
console.log(c, d)

c.push(4); // apenas o valor de c foi alterado
console.log(c, d) // o valor de d aponta para o mesmo local na memória que c

d.pop(); // apenas o valor de d foi alterado
console.log(c, d) // o valor de c aponta para o mesmo local na memória que d

let e = [...c]; // usando o spread operator, é possível copiar o valor de c para a variável e e torná-lo independente, sem apontar para o mesmo local na memória por referência
e.push('Juan');
console.log(e, c);

const f = { name: 'Juan' };
const g = f;

f.name = 'Otávio';
console.log(f, g)

const h = { name: 'Luiz' };
const i = {...h}; // usando o spread operator, é possível copiar o valor de c para a variável e e torná-lo independente, sem apontar para o mesmo local na memória por referência

h.name = 'Peter';
console.log(h, i)