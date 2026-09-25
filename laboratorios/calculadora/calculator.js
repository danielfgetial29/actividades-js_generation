// Evaluación de Laboratorio de JavaScript: Calculadora Básica

// Objetivo:
// Diseña y construye una calculadora que pueda sumar, restar, multiplicar y dividir dos números.

// Instrucciones:
// Completa las partes faltantes del código a continuación. Piensa cuidadosamente en el orden de las condiciones.
// Debes manejar correctamente las operaciones +, -, * y / usando lógica condicional.

// Ejemplo de uso:
// node calculator.js 10 5 +
// Salida: 15

// Paso 1: Obtener los valores de entrada desde la línea de comandos
const args = process.argv.slice(2);

// Convertir las dos primeras entradas a números
const num1 = Number(args[0]);
const num2 = Number(args[1]);

// Obtener el operador (ej. "+", "-", "*", "/")
const operator = args[2];

// Variable para almacenar el resultado final
let result;

// Paso 2: Decidir qué operación realizar
// Pistas:
// - Usa sentencias if, else if y else para verificar el operador y realizar la operación correspondiente.
// - Asegúrate de usar el operador de igualdad estricta (===) para comparar
// tanto el valor como el tipo de la entrada.
// Esto ayuda a evitar errores causados por la conversión automática de tipos de JavaScript.

// Escribe tu primera condición a continuación
if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  if (num2 === 0) {
    console.log("No se puede dividir por cero");
  } else {
    result = num1 / num2;
  }
} else {
  console.log("Operador inválido");
}

// Paso 3: Imprimir el resultado
if (result != undefined) {
  console.log(result);
}
