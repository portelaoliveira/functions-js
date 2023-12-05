// function writeMessageOnConsoleAndReturnTwo(message) {
//   console.log(message);
//   return 2;
// }

// Palavra-chave functions;
// Nome dafunção (a função pode ser armazenada em uma variável);
// Parâmetros - Parênteses;
// Bloco de chaves com instruções dentro;
// Instrução de retorno;

// Função anônima

// const variableThatStoresFunction = function (message) {
//   console.log(message);
//   return undefined;
// };

// const variableThatStoresFunction2 = function (message) {
//   console.log(message);
// };

// console.log(
//   `Primeria função retorna: ${variableThatStoresFunction("Primeira função")}`
// );
// console.log(
//   `Segunda função retorna: ${variableThatStoresFunction2("Sugunda função")}`
// );

// Arrow function

// const writeMessageOnConsoleAndReturnTwo = (message) => {
//   console.log(message);
//   return 2;
// }; // Para um parâmetro pode ser escrito sem () apenas o parâmetro message

function squareNumber(number) {
  return number * number;
}

// Quando tiver apenas uma instrução, mas para objetos não funciona

const squareNumberArrow = (number) => number * number;

console.log(squareNumberArrow(2));
