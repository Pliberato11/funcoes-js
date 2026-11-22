function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}
let nota1 = Number(prompt("Digite a nota do Fulano:"));
let nota2 = Number(prompt("Digite a nota do Beltrano:"));
let nota3 = Number(prompt("Digite a nota do Sicrano:"));
console.log("A média é: " + calcularMedia(nota1, nota2, nota3));