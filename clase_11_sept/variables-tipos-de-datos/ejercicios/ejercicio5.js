// Generador de nombres de usuario

// variables
let primerNombre = "Daniel";
let primerApellido = "Getial";
let anioNacimiento = 2001;

let primeraLetra = primerNombre.toLowerCase()[0];
let ultimosDigitos = String(anioNacimiento).slice(-2);

// console.log(ultimosDigitos);
// console.log(primera_letra.toLowerCase());
// console.log(primerNombre.toLowerCase()[0]); otra manera de mostrar la miniscula

//Mostrar el mensaje
console.log(
  `Nombre de usuario generado: ${primeraLetra}${primerApellido.toLowerCase()}${ultimosDigitos}`,
);
