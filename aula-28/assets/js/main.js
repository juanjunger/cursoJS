const element = document.querySelector('.date');

function addLeftZero(number) {
  return number >= 10 ? number : `0${number}`;
}

function dateFormat(date) {
  const day = addLeftZero(date.getDate());
  const month = getMonth(date);
  const year = date.getFullYear();

  return `${getWeekDay(date)}, ${day} de ${month} de ${year}`;
};

function timeFormat(date) {
  const hour = addLeftZero(date.getHours());
  const minute = addLeftZero(date.getMinutes());

  return `${hour}:${minute}`;
}

function getMonth(date) {
  const month = date.getMonth() + 1;

  switch (month) {
    case 1:
      return 'Janeiro'
    case 2:
      return 'Fevereiro'
    case 3:
      return 'Março'
    case 4:
      return 'Abril'
    case 5:
      return 'Maio'
    case 6:
      return 'Junho'
    case 7:
      return 'Julho'
    case 8:
      return 'Agosto'
    case 9:
      return 'Setembro'
    case 10:
      return 'Outubro'
    case 11:
      return 'Novembro'
    case 12:
      return 'Dezembro'
    default:
      break;
  }
}

function getWeekDay(date) {
  const dayOfWeek = date.getDay();

  switch (dayOfWeek) {
    case 0:
      return 'Domingo'
    case 1:
      return 'Segunda-feira'
    case 2:
      return 'Terça-feira'
    case 3:
      return 'Quarta-feira'
    case 4:
      return 'Quinta-feira'
    case 5:
      return 'Sexta-feira'
    case 6:
      return 'Sábado'
    default:
      break;
  }
}

const date = new Date;
const getDateFormatted = dateFormat(date);
const getTimeFormatted = timeFormat(date);

element.innerHTML += `<p>${getDateFormatted} </br> ${getTimeFormatted}</p>`;

/*
** Short Answer
** 

const options = {
  dateStyle: 'full',
  timeStyle: 'short'
}

date.toLocaleString('pt-BR', options);

*/