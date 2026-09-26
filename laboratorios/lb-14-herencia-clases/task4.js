export class Jugador {
  constructor(nombre, nivel) {
    this.nombre = nombre;
    this.nivel = nivel;
  }

  // metodos
  /**
   * metodo que muestra la propiedad nombre y nivel
   * en la consola
   */
  informacion() {
    console.log(`${this.nombre} ha alcanzado el Nivel ${this.nivel}!`);
  }

  /**
   * metodo que incrementea nivel++
   *
   */
  subirNivel() {
    return this.nivel++;
  }
}

// variables con argumentos a recibir
let player_name = process.argv[2];
let player_level = process.argv[3];

// instancia de la clase
const jugador1 = new Jugador(player_name, player_level);

// llamamos los metodos para que se puedan ejecutar
jugador1.informacion();
jugador1.subirNivel(); // si no lo llamaos nunca realizara la suma

// simplemente mostramos el dato nuevo
console.log(jugador1.subirNivel());
