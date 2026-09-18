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
