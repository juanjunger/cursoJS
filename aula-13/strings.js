// indice =   01234567
const text = 'Um texto';
const bigText = 'O rato roeu a roupa do rei de roma.';

// pegar um caracter em uma posição específica do indice
console.log(text[3]); // t
console.log(text.charAt(3)); // t

// pegar um indice em uma posição específica pelo caractere
console.log(text.indexOf('t')); // 3
console.log(text.indexOf('texto')); // 3
console.log(text.indexOf('o', 3)); // 7
console.log(text.lastIndexOf('e')); // 4

// concatenar strings
console.log(text.concat(' é apenas um texto.'));
console.log(text + ' é apenas um texto.');
console.log(text, 'é apenas um texto.');
console.log(`${text} é apenas um texto.`);

// Escapar aspas ou \ dentro de uma string
const escapeText = 'Um \'texto\'';
const escapeTextWithBar= 'Um \\texto';
console.log(escapeText);
console.log(escapeTextWithBar);

// Expressões regulares
console.log(text.match(/[a-z]/g));
console.log(text.search(/[a-z]/g));
console.log(text.search(/x/));
console.log(text.replace('Um', 'Outro'));
console.log(text.replace(/Um/, 'Outro'));
console.log(bigText.replace(/r/g, '#'));

// Tamanho da string
console.log(text.length); // 8
console.log(bigText.length); // 35

// Fatiar a string
console.log(bigText.slice(2, 6)); // rato
console.log(bigText.slice(-5, -1)); // roma
console.log(bigText.substring(bigText.length - 5, bigText.length - 1)); // roma

// Dividir a string nos espaços
console.log(bigText.split(' '));
console.log(bigText.split(' ', 2));

// string para maiúscula
console.log(bigText.toUpperCase());

// string para minúscula
console.log(bigText.toLowerCase());

console.log(Number.MIN_VALUE);