// Desafío FizzBuzz

// Este programa debe imprimir los números del 1 al 1000
// - Si es divisible por 3, imprime "Fizz"
// - Si es divisible por 5, imprime "Buzz"
// - Si es divisible por ambos, imprime "Fizzbuzz" (con "b" minúscula)
// - Si no, imprime el número

// console.log("=== Juego frizzBuzz");

for (let i = 1; i <= 1000; i++) {
  // Logica
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
