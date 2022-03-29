const number = Number(prompt('Digite um número:'));

const numberTitle = document.getElementById("number-title");
const text = document.getElementById("text");

numberTitle.innerHTML = number;
text.innerHTML = `<p>A raiz quadrada é ${Math.round(number) ** 0.5} </p>`;
text.innerHTML += `<p>O número ${number} é inteiro: ${Number.isInteger(number)} </p>`;
text.innerHTML += `<p>O número ${number} é NaN: ${Number.isNaN(number)} </p>`;
text.innerHTML += `<p>O número arredondado para baixo é: ${Math.floor(number)} </p>`;
text.innerHTML += `<p>O número arredondado para cima é: ${Math.ceil(number)} </p>`;
text.innerHTML += `<p>O número com duas casas decimais é: ${number.toFixed(2)} </p>`;
