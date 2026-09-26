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
    let nivel_aumentado = this.nivel + 1;
    return nivel_aumentado;
  }
}

// variables con argumentos a recibir
let player_name = process.argv[2];
let player_level = process.argv[3];

// instancia de la clase
const jugador1 = new Jugador(player_name, player_level);
jugador1.informacion();
console.log(jugador1.subirNivel());
