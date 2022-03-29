/* 
** const name = 'Juan'; 
** Essa variável "name" é definida em um escopo global, o que significa que pode ser acessada em qualquer parte do sistema.
** Isso pode ocasionar conflito com outras partes do código ou até mesmo bibliotecas externas que o sistema utilize.
** Uma função sempre possui seu escopo próprio, o que evita conflitos e erros entre variáveis de mesma nomenclatura.
** IIFE = Imediatly Invoke Function Expression => Função criada e auto invocada ao mesmo tempo
*/

function myEscope() {
  const form = document.querySelector('.form'); // o querySelector permite selecionar um elemento pela tag "form", pela classe ".form" ou pelo id "#form"
  const result = document.querySelector('.result');

  const people = [];
  
  // form.onsubmit = function (event) {
  //   event.preventDefault();
  // }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = form.querySelector('.firstName');
    const lastName = form.querySelector('.lastName');
    const weight = form.querySelector('.weight');
    const height = form.querySelector('.height');

    const person = {
      firstName: firstName.value,
      lastName: lastName.value,
      weight: weight.value,
      height: height.value
    };

    people.push(person);
    console.log(people);

    result.innerHTML += `<p>Nome: ${person.firstName}, Sobrenome: ${person.lastName}, Peso: ${person.weight}, Altura: ${person.height}</p>`;
  });
};

myEscope();
