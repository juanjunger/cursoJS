// Seleciono o formulário
const form = document.querySelector('#form');
// Escuto o evento de submit do formulário para evitar o comportamento padrão de envio
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Seleciono os campos de peso e altura
  let weight = e.target.querySelector('#weight');
  let height = e.target.querySelector('#height');
  
  // Conversão explícita do valor dos campos
  weight = +weight.value;
  height = +height.value;

  if (!weight) {
    setResult('Peso inválido!', false);
    return;
  }

  if (!height) {
    setResult('Altura inválida!', false);
    return;
  }

  // Cálculo do imc
  const imc = getImc(weight, height);
  const imcLevel = getImcLevel(imc);

  setResult(`Seu imc é: ${imc}. Seu nível é: ${imcLevel}`, true);
});

function setResult(message, isValid) {
  // Exibição do resultado em tela
  let result = document.querySelector('#result');
  result.innerHTML = '';

  const newParagraph = createParagraph();
  
  if (isValid) {
    newParagraph.classList.add('paragraph-result'); 
  } else {
    newParagraph.classList.add('bad'); 
  }
  
  newParagraph.innerHTML = `${message}`;

  result.appendChild(newParagraph);
};

function createParagraph() {
  const newParagraph = document.createElement('p');
  return newParagraph;
}

function getImc(weight, height) {
  const imc = weight / (height ** 2);
  return imc.toFixed(2);
}

function getImcLevel(imc) {
  const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return level[5];
  if (imc >= 34.9) return level[4];
  if (imc >= 29.9) return level[3];
  if (imc >= 24.9) return level[2];
  if (imc >= 18.5) return level[1];
  if (imc < 18.5) return level[0];
}