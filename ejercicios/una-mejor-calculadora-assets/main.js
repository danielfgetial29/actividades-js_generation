function principal() {
  console.log("¡Hola, estudiantes!");
}

// Funciones requeridas para la calificación automática
function sumarMultiplesNumeros(numeros) {
  // TODO: Implementa esta función
  // Debe recibir un arreglo de números y devolver su suma
}

function multiplicarMultiplesNumeros(numeros) {
  // TODO: Implementa esta función
  // Debe recibir un arreglo de números y devolver el producto de multiplicarlos todos entre sí
}

function esPar(numero) {
  // TODO: Implementa esta función
  // Debe devolver true si el número es un entero par, false en caso contrario
}

function esEntero(numero) {
  // TODO: Implementa esta función
  // Debe devolver true si el número es un entero, false en caso contrario
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
