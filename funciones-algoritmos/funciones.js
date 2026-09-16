// Sintaxis basica
/*
funcion nombreDeLaFuncion(){
    logica de la funcion
}
*/

function saludar() {
  console.log("Hola mundo desde la funcion...");
}

console.log("Llamando a la funcion saludar");

// Llamada a la funcion
saludar();

// Funciones con parametros
let nombreIngresado = "Daniel Felipe";
// usando la variable donde recibo la informacion
saludoPeronalizado(nombreIngresado);
// Pasando el nombre directamente por parametro
saludoPeronalizado("Lucero Adriana");

let num1 = 4;
let num2 = 6;

console.log(`La suma de ${num1} y ${num2} es: ${sumarParametros(num1, num2)}`);

// Apartado para las funciones
function sumarParametros(a, b) {
  let suma = a + b;
  return suma;
}

function saludoPeronalizado(nombre) {
  let mensaje = "Hola " + nombre + " :)";
  console.log(mensaje);
}
