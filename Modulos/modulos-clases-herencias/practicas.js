
/*
# OBJETIVOS DE APRENDIZAJE

Al finalizar esta sesión, seré capaz de:

- Describir por qué los ingenieros de software optan por definir módulos y exponer sus funciones mediante exportaciones.
- Explicar cómo la abstracción de funciones en módulos ayuda a que las bases de código sean más fáciles de construir,
 gestionar y probar.
- Utilizar módulos en un programa JavaScript.
*/


//import { Perro } from "./perro.js";

//import { Perro,Gato } from "./animales.js";

import * as animales from './animales.js';

import { sumar,multiplicar } from './funciones.js';

//const perro1 = new Perro("Firulais");

//console.log(perro1.hacerSonido());

//console.log(perro1.respirar());
//console.log(perro1.ladrar());

const animal2 = new animales.Gato("Michin");

console.log("La suma de  4 + 12 da como resultado: ", sumar(4,12));
console.log("La multiplicacion de  4 * 12 da como resultado: ", multiplicar(4,12));

//camelCase variables y funciones, metodos

let miVariableEjemplo;

//UpperCammelCase - PascalCase Clases 

class Vehiculo{}

//kebab-case archivos funciones-para-multiplicar.js
