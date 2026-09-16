function principal() {
  console.log("¡Hola, estudiantes!");
}
//Entradas de las funciones
let listNumbers = [1, 2, 3, 4];
let numeroEvaluar = 11;

// llamado a la funcion
console.log(sumarMultiplesNumeros(listNumbers));
console.log(multiplicarMultiplesNumeros(listNumbers));
console.log(esPar(numeroEvaluar));
console.log(esEntero(numeroEvaluar));

// Funciones requeridas para la calificación automática
function sumarMultiplesNumeros(numeros) {
  // let valorSuma = 0;
  // for (const numero of numeros) {
  //   valorSuma += numero;
  // }
  // return valorSuma;

  // usando.reduce();
  const suma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
  }, 0);
  return suma;
}

function multiplicarMultiplesNumeros(numeros) {
  let total = 1;
  for (const numero of numeros) {
    total *= numero;
  }
  return total;
}

function esPar(numero) {
  // if (numero % 2 === 0) {
  //   numero = true;
  // } else {
  //   numero = false;
  // }

  return Number.isInteger(numero) && numero % 2 === 0;
}

function esEntero(numero) {
  // if (numero % 1 === 0) {
  //   numero = true;
  // } else {
  //   numero = false;
  // }

  return Number.isInteger(numero);
}

// Exportar funciones para pruebas (estilo Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    sumarMultiplesNumeros,
    multiplicarMultiplesNumeros,
    esPar,
    esEntero,
  };
}

// Ejecutar la función principal si este archivo se ejecuta directamente
if (require.main === module) {
  principal();
}
