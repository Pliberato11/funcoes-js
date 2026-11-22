function ehPar(numero) {
  return numero % 2 === 0;
}
let numero = Number(prompt("Digite um número:"));
console.log("É par? " + ehPar(numero));