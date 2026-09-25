import { Animal } from "./practica.js"; // importo la clase desde otro archivo
import { Perro } from "./clases-hijas.js";

// instancia de la clase Aniaml ()
/**
 * aqui usamos la clase exportada desde otro archivo
 *
 */
const animal1 = new Animal("Mi perro firulasi");
console.log(animal1.hacerSonido());

const mi_perro = new Perro("Negra");
console.log(mi_perro.hacerSonido());
