/*
** Operação de curto circuito (Short Circuit)
** 
** && -> false && true && true && true  = false -> Vai retornar o primeiro valor falso da expressão
** || -> false || true || true || true  = true -> Vai retornar o primeiro valor verdadeiro da expressão
**
** O valor false é avaliado como falso literal
**
** Valores avaliados como FALSY (falso não literal)
** - 0
** - '' ou "" ou `` // string vazia
** - null
** - undefined
** - NaN
**
** Os valores diferentes dos FALSY listados acima retornam true
** Ex: 'Maria' && 'João' = true
** Ex: 1 = true
**
*/

console.log(false && true && true && true); // false = retorna o primeiro valor falso ou FALSY
console.log('João' && 'Maria'); // true
console.log('João' && 'Maria' && ''); // ''
console.log('João' && 'Maria' && 1); // true
console.log('João' && 'Maria' && 0); // false
console.log('João' && 'Maria' && null); // null
console.log('João' && 'Maria' && NaN); // NaN

function sayHello () {
  return 'Hello';
};

const shouldSayHello = false;
shouldSayHello && sayHello(); // retorna falso e não executa a função = curto circuito

console.log(0 || false || null || undefined || 'Juan Junger' || true); // retorna o primeiro valor verdadeiro -> Juan Junger
console.log(0 || 'false' || false || undefined || NaN); // retorna o primeiro valor verdadeiro -> 'false' -> Nesse caso o false é avaliado como uma string, que por sua vez caso tenha valor (qualquer) retorna true. Não é o valor literal false
console.log(0 || '' || false || undefined || NaN); // retorna o último valor falso da expressão caso todas as comparações possuam valor falso -> NaN
