// Ejercicio de logica de programacion para calcular el
// valor factorial de un numero

let numero = 4;
let factorial = 1;

for (let contador = 1; contador <= numero; contador++) {
  factorial *= contador;
}

console.log(`El factorial de ${numero} es : ${factorial}`);
