function converterESomar(num1, num2) {
  let numero1 = parseInt(num1);
  let numero2 = parseInt(num2);

  let soma = numero1 + numero2;

  if (soma % 2 === 0) {
    return "A soma é " + soma + " e é um número par";
  } else {
    return "A soma é " + soma + " e é um número ímpar";
  }
}