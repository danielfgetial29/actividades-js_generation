const prompt = require("prompt-sync")({ sigint: true });

// Consulta la Tarea 5 en tus Instrucciones para completar esta tarea
let rango = Number(prompt("Hasta que numero quieres analizar: "));

for (let i = 0; i < rango + 1; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    console.log("FizzBuzzWoof");
  } else if (i % 3 === 0 && i % 7 === 0) {
    console.log("FizzWoof");
  } else if (i % 5 === 0 && i % 7 === 0) {
    console.log("BuzzWoof");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 7 === 0) {
    console.log("Woof");
  } else {
    console.log(i);
  }
}
