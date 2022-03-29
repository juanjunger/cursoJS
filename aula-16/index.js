/* 
** Um array nada mais é do que uma lista de alguma coisa. Pode ser de qualquer tipo de dado
** É uma boa prática de programação deixar o array conciso, com apenas um tipo de dado
** Ex: const alunos = ['Juan', 'Maria', 'João']; => Boa prática
** Ex: const alunos = ['Juan', 'Maria', 'João', 1, true, null]; => Má prática
** Os arrays são indexados por elemento, diferente das strings, que são indexadas pelos caracteres
*/

//               0       1        2
const alumns = ['Juan', 'Maria', 'João'];
console.log(alumns[0]);

//             012345678910
const aluno = 'Juan Junger';
console.log(aluno[0]);

alumns[0] = 'Eduardo'; // altera o valor do elemento 0 do array
console.log(alumns);

alumns[3] = 'Mônica'; // adiciona um elemento no array
console.log(alumns);

console.log(alumns.length); // exibe o tamanho do array => quantidade de elementos

alumns.push('Luiz'); // adiciona o elemento com o valor "Luiz" ao final do array => último elemento
console.log(alumns);

alumns.unshift('Luiza'); // adiciona o elemento com o valor "Luiz" no início do array => primeiro elemento
console.log(alumns);

alumns.pop(); // remove o último elemento do array
console.log(alumns);

alumns.shift(); // remove o primeiro elemento do array
console.log(alumns);

delete alumns[1]; // remove o elemento do índice 1 e retorna um elemento vazio => undefined
console.log(alumns[1]);
console.log(alumns);

console.log(alumns.slice(0, 1)); // Pega os 2 primeiros elementos do array => o segundo elemento nesse caso é vazio

console.log(alumns instanceof Array); // Retorna true se a variável alumns é uma instância de array
