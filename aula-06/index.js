/* 
** Definição: Variáveis são valores alocados (armazenados) na memória do computador
**
** Como o nome diz, variáveis podem variar, ou seja, seu valor pode ser alterado em qualquer ponto do código
** Não podemos criar variáveis com palavras reservadas da linguagem (let, console, if...)
** Variáveis precisam ter nomes significativos (boa prática)
** Variáveis não podem iniciar com números ou caracteres especiais na declaração
** Variáveis não podem conter espaços ou traços
** Por convenção, utilizamos camelCase (boa prática)
** Variáveis são Case-sensitive (distinção entre maiúsculas e minúsculas)
** Não podemos redeclarar variáveis com let (Identificador '<nome-variavel>' já foi declarado)
** NÃO UTILIZE VAR, UTILIZE LET (boa prática e evita problemas de escopo)
*/

let firstName; // variável declarada sem valor inicial, nesse caso é atribuído undefined
firstName = 'Juan'; // recebe uma string como valor inicial
console.log(firstName);

let firstName = 'outro nome'; // Erro ao executar, pois a variável letName já foi declarada