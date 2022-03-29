const person = { // atribuição do objeto a variável person
  name: 'Juan', // atributo do objeto person
  age: 23,
  
  isAdult () {
    return this.age > 18 // o this possui todos os atributos do objeto person e pode ser reutilizado / compartilhado entre os atributos / métodos => chamamos isso de escopo
  }, // uma função como atributo de um objeto é chamada de método
};

console.log(person);
console.log(person.name); // acessar o atributo name do objeto person

function createPerson(name, age) { // params => valor recebido do arg
  return { name, age }
}

const firstPerson = createPerson('Peter Parker', 20); // args => valor passado para o param
console.log(firstPerson);

console.log(person.isAdult());