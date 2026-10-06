export class Jugador {
  constructor(nombre, nivel, experiencia) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.experiencia = experiencia;
  }
  // Metodos
  /**
   * Muestra todas las propiedades de
   * nuestra clase Jugador
   */
  informacion() {
    return `Hola soy ${this.nombre} y soy nivel ${this.nivel} con ${this.experiencia}XP`;
  }
  /**
   * Aumenta el nivel del jugador
   */
  subirNivel() {
    return this.nivel++;
  }
  /**
   * Adquiere el XP del jugador para poder subir de nivel dependiendo
   * de la XP ganada
   */
  ganarExperiencia(cantidad) {
    // valor para aumentar el XP
    const EXPERIENCIA_POR_NIVEL = 100;

    // Se suma la experiencia con la cantidad recibida como parametro
    this.experiencia += cantidad;

    // Entra a validar que sea mayor al valor para subir de nivel

    if (this.experiencia >= EXPERIENCIA_POR_NIVEL) {
      // Si es mayor entra en un Bucle do..While para que ejecuta
      // this.subirNivel(); para subir el nivel y luego resta 100 a la
      // propiedad experienca

      do {
        this.subirNivel();
        this.experiencia -= EXPERIENCIA_POR_NIVEL;

        // Esta es la condiccion para salir del bucle y es cuando ya ha restado
        // lo suficiente para que la propiedad experiencia sea menor a 100
        // y salir del bucle
      } while (this.experiencia >= EXPERIENCIA_POR_NIVEL);

      // devuelve el valor del nivel que obtuvo al final
      return `He subido al nivel ${this.nivel}`;

      // Salida en caso de no tener suiciente XP
    } else {
      return `Aun me falta experiencia para subir de nivel, XP: ${this.experiencia}`;
    }
  }
}

// Variables
let player_name = process.argv[2];
let player_level = process.argv[3];
let player_XP = Number(process.argv[4]);

const jugador1 = new Jugador(player_name, player_level, player_XP);

console.log(jugador1.ganarExperiencia(350));
console.log("-----");

console.log(jugador1.experiencia);
// console.log("-----segundo");

// console.log(jugador1.ganarExperiencia(50));
// console.log("-----tercero");
// console.log(jugador1.ganarExperiencia(jugador1.experiencia));
