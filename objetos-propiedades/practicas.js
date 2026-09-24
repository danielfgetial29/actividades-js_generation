/*
# OBJETIVOS DE APRENDIZAJE
Al finalizar esta sesión, seré capaz de:
- Describir cómo los ingenieros de software organizan colecciones de propiedades desordenadas en Objetos JavaScript.
- Explicar cómo las definiciones de funciones están asociadas con objetos JavaScript para proporcionar métodos 
para actuar sobre ellos.
- Usar métodos y propiedades de objetos JavaScript en un programa JavaScript.

*/

let elfo = {
  nombre: "Legolas",
  armas: ["espada", "arco"],
  ataque: 1500,
  saludar: function () {
    return `Hola mi nombre es ${this.nombre} y mi ataque es de ${this.ataque} puntos`;
  },
};

//console.log(elfo.saludar());

let persona = {
  nombre: "luis",
  apellido: "gutierrez",
  nombreCompleto: function () {
    return `Mi nombre es ${this.nombre} ${this.apellido} `;
  },
};

function Persona(p1, p2) {
  this.nombre = p1;
  this.apellido = p2;
  this.nombreCompleto = function () {
    return `Mi nombre es ${this.nombre} ${this.apellido} `;
  };
}

//PersonaUno
//NumeroMayor

const persona1 = new Persona("Julian", "Rodriguez");
const persona2 = new Persona("Marcela", "Torres");

console.log(persona1.nombre);
console.log(persona1.nombreCompleto());

/*
console.log(Math.sqrt(-6));
console.log();

let numeroRand = Math.trunc(Math.random() * 100) ;

console.log(numeroRand);

console.log(Math.PI);


//typeof

console.log(typeof "marco polo");

console.log(typeof 45.2);
console.log(typeof true);
console.log(typeof function() {});
let nombre = null;
console.log(typeof nombre);



console.log(typeof elfo);

const prompt = require('prompt-sync')();

let edadDarwin = parseInt(prompt("Indiqueme su edad: "));
let edadLuis = parseInt(prompt("Indiqueme su edad: "));

//llamar a las funciones 
procesarEdad(edadDarwin);
procesarEdad(edadLuis);


//hoisting
//solo existe, no hace nada
function procesarEdad(edad){

    if (typeof edad === "number"){
        console.log("Procesando edad correctamente");
    }else{
        console.log("error: el tipo de dato ingresado es incorrecto: "+ typeof parametro);
    }
}



*/
