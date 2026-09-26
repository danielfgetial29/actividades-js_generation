// ============================================
// test.js - Pruebas del Laboratorio de Clases
// ============================================

const { spawnSync } = require("child_process");
const assert = require("assert");
const fs = require("fs");
const path = require("path");

// Verificar que index.js exista antes de ejecutar las pruebas
const indexPath = path.join(__dirname, "index.js");
if (!fs.existsSync(indexPath)) {
  console.error("Error: No se encontró index.js en el directorio actual.");
  process.exit(1);
}

// Función auxiliar para preparar y verificar la salida
function prepararYVerificar(entradaArray, salidaArray) {
  const salidaEsperada = salidaArray.join("\n");

  const resultado = spawnSync("node", ["index.js", ...entradaArray], {
    encoding: "utf8",
    cwd: __dirname,
  });

  if (resultado.error) {
    throw new Error(`Error al ejecutar index.js: ${resultado.error.message}`);
  }

  if (resultado.status !== 0) {
    throw new Error(
      `index.js terminó con código ${resultado.status}. Stderr: ${resultado.stderr}`,
    );
  }

  let salidaReal = (resultado.stdout || "").trim();
  salidaReal = salidaReal.replace(/\r\n/g, "\n");

  assert.ok(
    salidaReal.includes(salidaEsperada),
    `Se esperaba encontrar la salida esperada en la salida real.\n\nEsperado:\n${salidaEsperada}\n\nReal:\n${salidaReal}`,
  );
}

// ============================================
// PRUEBA 1: Jugador { nombre: 'Grog' }
// ============================================
function probarTareaUno() {
  const entradaArray = ["1"];
  const salidaArray = ["Jugador { nombre: 'Grog' }"];
  prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// PRUEBA 2: Jugador { nombre: 'Grog', nivel: 4 }
// ============================================
function probarTareaDos() {
  const entradaArray = ["2"];
  const salidaArray = ["Jugador { nombre: 'Grog', nivel: 4 }"];
  prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// PRUEBA 3: Grog ha alcanzado el Nivel 4!
// ============================================
function probarTareaTres() {
  const entradaArray = ["3"];
  const salidaArray = ["Grog ha alcanzado el Nivel 4!"];
  prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// PRUEBA 4: Grog ha alcanzado el Nivel 4! y Nivel 5!
// ============================================
function probarTareaCuatro() {
  const entradaArray = ["4"];
  const salidaArray = [
    "Grog ha alcanzado el Nivel 4!",
    "Grog ha alcanzado el Nivel 5!",
  ];
  prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// EJECUTAR TODAS LAS PRUEBAS
// ============================================

function ejecutarPruebas() {
  const pruebas = [
    { nombre: 'Tarea 1: Jugador { nombre: "Grog" }', func: probarTareaUno },
    {
      nombre: 'Tarea 2: Jugador { nombre: "Grog", nivel: 4 }',
      func: probarTareaDos,
    },
    { nombre: "Tarea 3: Grog ha alcanzado el Nivel 4!", func: probarTareaTres },
    {
      nombre: "Tarea 4: Grog ha alcanzado el Nivel 4! y Nivel 5!",
      func: probarTareaCuatro,
    },
  ];

  let aprobadas = 0;
  const total = pruebas.length;

  console.log("Ejecutando pruebas del Laboratorio de Clases...");
  console.log("=".repeat(50));

  for (const prueba of pruebas) {
    try {
      prueba.func();
      console.log(`[OK] ${prueba.nombre}`);
      aprobadas++;
    } catch (error) {
      console.log(`[FALLO] ${prueba.nombre}`);
      console.log(`  ${error.message}`);
    }
  }

  console.log("=".repeat(50));
  console.log(`Puntaje: ${aprobadas}/${total}`);

  if (aprobadas === total) {
    console.log("¡Todas las pruebas pasaron!");
  } else {
    console.log("Algunas pruebas fallaron. Revisa tus tareas.");
    process.exit(1);
  }
}

// Ejecutar todas las pruebas
ejecutarPruebas();
