const prompt = require("prompt-sync")({ sigint: true });
/*
    PRACTICA DE JAVASCRIPT
    Temas a desarrollar: Metodos de Arrays, Switch y Bucles
*/
// Ejercicio 1: Operador Ternario
console.log("----- Ejercicio 1 -----");
let nota = Number(prompt("Ingresa un numero del 1 - 10: "));

// constante    | condicion |  valorSiTrue | valorSiFalse
const resultado = nota >= 6 ? "Aprobado" : "Reprobado";
console.log(`Tu nota es ${nota} y estas ${resultado}`);

console.log();
// Ejercicio 2 Arreglos y .slice()
console.log("---- Ejercicio 2 -----");
const frutas = ["manzana", "banana", "kiwi", "uva", "mango"];

let elementoEliminado = frutas.pop();
let seleccion = frutas.slice(1, 2);
frutas.unshift("fresa");

console.log(`Eliminaste a "${elementoEliminado}" de la lista`);
console.log(`Elementos extraidos: ${seleccion}`);
console.log(`Lista completa ${frutas}`);
console.log();

// Ejercicio 3 control de flujo con switch
console.log("---- Ejercicio 2 -----");

let diaSemana = prompt("Ingresa un dia de la semana: ").toLowerCase();

switch (diaSemana) {
  case "lunes":
  case "martes":
    console.log("Inicio de semana");
    break;

  case "viernes":
    console.log("¡Por fin es fin de semana!");
    break;

  case "miercoles":
  case "jueves":
    console.log("Día laboral estandar");
    break;

  default:
    console.log("Por favor ingresar un dato valido");
    break;
}
console.log();
// mismo ejercicio usando if..else if, else

console.log("usando if..else if, else");

const inicioSemana = ["lunes", "martes"];
const medioSemana = ["miercoles", "jueves"];

if (inicioSemana.includes(diaSemana)) {
  console.log("Inicio de Semana");
} else if (medioSemana.includes(diaSemana)) {
  console.log("Día laboral estandar");
} else if (diaSemana === "viernes") {
  console.log("Por fin fin de semanaaa!!");
} else {
  console.log("Por favor ingresar un dia valido");
}

console.log();

//Ejerciciop 4
console.log("--- Ejercicio 4: Bucles y Number.isInteger ----");

const datos = [15, "hola", 3.14, 42, true, 8];

for (const i of datos) {
  if (Number.isInteger(i)) {
    console.log(i);
  }
}

// for (const i of datos) {
//   console.log("Numeros: ", Number.isInteger(i));
// }
