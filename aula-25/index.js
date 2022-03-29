/*
** Operação ternária
** 
** (condição) ? 'Valor verdadeiro' : 'Valor falso'
**
*/

const points = 1000;

if (points >= 1000) {
  console.log('The user is vip');
} else {
  console.log('The user is normal');
};

// ternary
const userLevel = points >= 1000 ? 'The user is vip' : 'The user is normal';
console.log(userLevel);
