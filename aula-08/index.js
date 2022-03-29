/* Exercício de cálculo do IMC
**
** Resultado final: Juan Junger tem 23 anos, nasceu em 1998, pesa 89kg, tem 1.71 de altura e seu IMC é xxx
**
*/

const completeName = 'Juan Junger';
const age = 23;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const birthYear = currentYear - age;

const weight = 89;
const height = 1.71;
const imc = (weight / (height * height)).toFixed(2);

// template string => `${javascriptLogic}`
console.log(`${completeName} tem ${age} anos, nasceu em ${birthYear}, pesa ${weight}kg, tem ${height} de altura e seu IMC é ${imc}`);