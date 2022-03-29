/*
** Estruturas condicionais
** 
** If, Else e Else If
**
** If -> Se
** Else If -> Senão Se
** Senão
**
** O if pode ser usado sozinho
** Só podemos ter um else na checagem
** Podemos ter quantos else if forem necessários
** O bloco if e else dependem um do outro
** O bloco de código dentro do if só será executado se o resultado da expressão for verdadeira
** O bloco de código fora do if é independente do resultado dessa expressão dentro do if
** O bloco de condição com if e else if é encerrado na primeira condição que retornar verdadeira
**
*/

const number = 10;

if (number < 12) {
  console.log('The number is less than 12');
} else if (number === 12) {
  console.log('The number is equal as 12');
} else {
  console.log('The number is greather than 12');
};
