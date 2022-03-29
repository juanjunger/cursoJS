/* 
** Mesma regra de nomenclatura e boas práticas das variáveis
** Por padrão, qualquer função criada retorna undefined caso não retorne nenhum valor dentro dela
** O bloco de código dentro de uma função não é acessível fora dessa função => chamamos esse "contexto" de escopo
** Podemos acessar o resultado de uma função atribuindo a uma variável => const result = someFuncion()
** A partir do momento que o interpretador do JS encontrar a palavra return dentro de uma função, ela é encerrada
** Uma função sem nome atribuída a uma variável é chamada de função anônima
** Uma arrow function é uma função anônima simplificada
*/

function sayHello(name) {
  console.log(`Hello ${name}`);
}

function sayHelloWithReturn(name) {
  return `Hello ${name}`;
}

sayHello('Juan');

let helloPeter;
helloPeter = sayHello('Peter');
console.log(helloPeter); // undefined

helloPeter = sayHelloWithReturn('Peter');
console.log(helloPeter); // Hello Peter

function sum(x, y) {
  return x + y;
}

console.log(sum(2,2));

function sumWithDefaultValue(x = 0, y = 0) {
  return x + y;
}

console.log(sumWithDefaultValue()); // nesse caso é retornado a soma dos valores "default" da função caso não passe nenhum param
console.log(sumWithDefaultValue(10)); // nesse caso é retornado a soma dos valores x (10) + y ("0")

const square = function (n) {
  return n ** 0.5;
};
console.log(square(9)); // 3

const squareArrow = n => n ** 0.5;
console.log(squareArrow(9)); // 3