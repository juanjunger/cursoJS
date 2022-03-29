/* Tipos de dados primitivos
**
** string: texto
** number: número inteiro ou flutuante
** undefined: não aponta pra local nenhum na memória
** null: valor nulo - não aponta pra local nenhum na memória; o javascript interpreta o tipo como objeto
** boolean: verdadeiro ou falso - valores lógicos
*/

const string1 = '';
const string2 = "";
const string3 = ``; // possibilita utilizar template string

const number1 = 10;
const number2 = 10.10;

const _undefined1 = undefined;
let _undefined2; // variável declarada sem valor inicial, nesse caso é atribuído undefined

const _null = null;

const bool1 = true;
const bool2 = false;