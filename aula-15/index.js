let num1 = 9.44768;
let num2 = Math.floor(num1); // arredonda o número decimal pra baixo
let num3 = Math.ceil(num1); // arredonda o número decimal pra cima
let num4 = Math.round(num1); // arredonda o número pro mais próximo do decimal
let num5 = Math.max(1,2,4,5,8,10,500,40000,-1500); // retorna o maior número da lista
let num6 = Math.min(1,2,4,5,8,10,500,40000,-1500); // retorna o maior número da lista
let num7 = Math.random(); // retorna um número aleatório entre 0 e 1
let num8 = Math.random() * (10 - 5) + 5; // retorna um número aleatório entre 10 e 5
let num9 = Math.PI; // retorna o número PI
let num10 = Math.pow(2, 10); // retorna o número 2 elevado a 10 => Mesma coisa que 2 ** 10
let num11 = 25 ** 0.5; // retorna a raiz quadrada de 25
let num12 = 100 / 0; // retorna o valor infinity no JS => Avaliado como true

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(num8);
console.log(num9);
console.log(num10);
console.log(num11);
console.log(num12);
console.log(typeof num12);
