//Practicar operadores de comparación y lógicos.

// Declaracion de variables
let edad = 25;
let tieneEntrada = true;
let esMayorDeEdad = edad >= 18;
let puedeIngresar = esMayorDeEdad && tieneEntrada; //(&&) AND
let necesitaAcompañante = !esMayorDeEdad || !tieneEntrada; // || OR

//salidas
console.log(`Es mayor de edad?: ${esMayorDeEdad}`);
console.log(`Puede ingresar? ${puedeIngresar}`);
console.log(`Necesita acompañante? ${necesitaAcompañante}`);
