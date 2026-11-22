function areaRetangulo(comprimento, altura) {
  return comprimento * altura;
}
let comprimento = Number(prompt("Digite o comprimento do retângulo:"));
let altura = Number(prompt("Digite a altura do retângulo:"));
console.log("A área do retângulo é: " + areaRetangulo(comprimento, altura));