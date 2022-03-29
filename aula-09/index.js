/* ECMAScript 2015 (ES6)
**
** O var permite a redeclaração de variáveis
** O let não permite a redeclaração de variáveis
** O var possui problemas de escopo
*/

var varName = 'Juan';
var varName = 'João'; // varName recebe o valor 'João' e sobrescreve o valor anterior: 'Juan'

let letName = 'Luiz';
let letName = 'Luiz'; // Erro ao executar, pois a variável letName já foi declarada

name = 'Fulano' // Não crie variáveis sem declarar como CONST ou LET

console.log(varName);
console.log(letName);
console.log(name);