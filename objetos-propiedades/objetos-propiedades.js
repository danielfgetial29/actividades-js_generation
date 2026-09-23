let elfo = {
  nombre: "Legolas",
  armas: ["Espada", "arco"],
  ataque: 1500,
  saludar: function () {
    return "Hola soy Legolas el elfo";
  },
};
console.log(elfo.saludar());

// metodo MATH
let numeroAleatorio = Math.trunc(Math.random() * 100);
// const numeroRedondeado = numeroAleatorio;
// console.log(numeroRedondeado);
console.log(numeroAleatorio);

console.log(Math.PI);

// typeof
console.log(typeof "Daniel Getial"); //string
console.log(typeof 25); // number
console.log(typeof true, typeof "daniel"); // boolean string
console.log(typeof function () {}); // function
let nombre;
console.log(typeof nombre); // undefined

// funcion usando type of
let edad = 25;

// llamar funcion
procesarEdad(edad);

/**
 * funcion para procesar edad usando
 */
function procesarEdad(parametro) {
  if (typeof edad === "number") {
    console.log("Procesando corectamente");
  } else {
    console.log("Erro: tipo de dato ingresado es incorrecto");
  }
}

// This
