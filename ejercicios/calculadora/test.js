// test.js
const { execSync } = require("child_process");
const assert = require("assert");

function ejecutarCalculadora(args) {
  // Ejecutar calculator.js con los argumentos proporcionados y capturar la salida
  const resultado = execSync(`node calculator.js ${args.join(" ")}`, {
    encoding: "utf8",
    stdio: "pipe",
  });
  return resultado.trim();
}

function probarSuma() {
  assert.strictEqual(ejecutarCalculadora(["10", "5", "+"]), "15");
}

function probarResta() {
  assert.strictEqual(ejecutarCalculadora(["10", "5", "-"]), "5");
}

function probarMultiplicacion() {
  assert.strictEqual(ejecutarCalculadora(["6", "7", "*"]), "42");
}

function probarDivision() {
  assert.strictEqual(ejecutarCalculadora(["20", "4", "/"]), "5");
}

// Casos de prueba para implementaciones adicionales
function probarDivisionPorCero() {
  assert.strictEqual(
    ejecutarCalculadora(["10", "0", "/"]),
    "No se puede dividir por cero",
  );
}

function probarOperadorInvalido() {
  assert.strictEqual(ejecutarCalculadora(["4", "2", "^"]), "Operador inválido");
}

// Ejecutar todas las pruebas
try {
  probarSuma();
  probarResta();
  probarMultiplicacion();
  probarDivision();
  probarDivisionPorCero();
  probarOperadorInvalido();
  console.log("¡Todas las pruebas pasaron!");
} catch (error) {
  console.error("Prueba fallida:", error.message);
  process.exit(1);
}
