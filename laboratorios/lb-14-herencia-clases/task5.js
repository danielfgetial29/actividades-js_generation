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
    const EXPERIENCIA_POR_NIVEL = 100;

    // cantidad = Number(prompt("Ingresa tu cantidad de experiencia: "));
    this.experiencia += cantidad;
    if (this.experiencia >= EXPERIENCIA_POR_NIVEL) {
      do {
        this.subirNivel();
      } while (this.experiencia <= EXPERIENCIA_POR_NIVEL);
      return `He subido al nivel ${this.nivel}`;
    } else {
      return `Aun me falta experiencia para subir de nivel`;
    }
  }
}

// Variables
let player_name = process.argv[2];
let player_level = process.argv[3];
let player_XP = Number(process.argv[4]);

const jugador1 = new Jugador(player_name, player_level, player_XP);

console.log(jugador1.ganarExperiencia(50));
console.log(jugador1.experiencia);
