/*
** Objeto Date
** 
** Ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
**
** const dateUnix = new Date(0); // timestamp UNIX (01/01/1970);
*/

const date = new Date(); // função construtora que cria um objeto com várias propriedades
console.log(date.toString());
console.log('Dia', date.getDate());
console.log('Mês', date.getMonth()); // Mês começa do 0 (janeiro)
console.log('Ano', date.getFullYear());
console.log('Hora', date.getHours());
console.log('Minuto', date.getMinutes());
console.log('Segundo', date.getSeconds());
console.log('Mili Segundo', date.getMilliseconds());
console.log('Dia da Semana', date.getDay()); // 0 - Domingo, 6 - Sábado


function addLeftZero(num) {
  return num >= 10 ? num : `0${num}`;
};

function formatDate(date) {
  const day = addLeftZero(date.getDate());
  const month = addLeftZero(date.getMonth() + 1);
  const year = addLeftZero(date.getFullYear());
  const hour = addLeftZero(date.getHours());
  const minute = addLeftZero(date.getMinutes());
  const second = addLeftZero(date.getSeconds());

  return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}

const myDate = new Date();
console.log(formatDate(myDate));
