const prompt = require("prompt-sync")({ sigint: true });

// Consulta la Tarea 5 en tus Instrucciones para completar esta tarea
console.log("=== Desafio FizzBuzz ===\n");

console.log("1. Indicar limite");
console.log("2. Evaluar un solo valor");

const decision = [1, 2];

while (true) {
  let respuesta = Number(prompt("Ingresa el numero de la opcion a elegir: "));

  if (decision.includes(respuesta)) {
    if (respuesta === 1) {
      let rango = Number(prompt("Hasta qué número quieres analizar: "));
      fizzBuzz(rango);
      break;
    } else if (respuesta === 2) {
      let numero = Number(prompt("Ingresa un número a analizar: "));
      let resultado = oneNumber(numero);
      console.log(resultado);
      break;
    }
  } else {
    console.log("Opción no válida. Por favor elige 1 o 2.");
  }
}

function oneNumber(number) {
  if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
    return "FizzBuzzWoof";
  } else if (number % 3 === 0 && number % 7 === 0) {
    return "FizzWoof";
  } else if (number % 5 === 0 && number % 7 === 0) {
    return "BuzzWoof";
  } else if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 7 === 0) {
    return "Woof";
  } else {
    return number;
  }
}

function fizzBuzz(limite) {
  for (let i = 1; i < limite + 1; i++) {
    let resultado = oneNumber(i);
    console.log(resultado);
  }
}
