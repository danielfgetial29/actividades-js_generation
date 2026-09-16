function principal() {
  console.log("¡Hola, estudiantes!");
}
//Entradas de las funciones
let listNumbers = [1, 2, 3, 4];
let numeroEvaluar = 11;

// llamado a la funcion
sumarMultiplesNumeros(listNumbers);
multiplicarMultiplesNumeros(listNumbers);
esPar(numeroEvaluar);
esEntero(numeroEvaluar);

// Funciones requeridas para la calificación automática
function sumarMultiplesNumeros(numeros) {
  let valorSuma = 0;
  for (const numero of numeros) {
    valorSuma += numero;
  }
  return valorSuma;
}

function multiplicarMultiplesNumeros(numeros) {
  let total = 1;
  for (const numero of numeros) {
    total *= numero;
  }
  return total;
}

function esPar(numero) {
  if (numero % 2 === 0) {
    numero = true;
  } else {
    numero = false;
  }
  return numero;
}

function esEntero(numero) {
  if (numero % 1 === 0) {
    numero = true;
  } else {
    numero = false;
  }
  return numero;
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
