export class Jugador {
  constructor(nombre, nivel) {
    this.nombre = nombre;
    this.nivel = nivel;
  }
  informacion() {
    console.log(`${this.nombre} ha alcanzado el Nivel ${this.nivel}!`);
  }
}

// variables con argumentos a recibir
let player_name = process.argv[2];
let player_level = process.argv[3];

// instancia de la clase
const jugador1 = new Jugador(player_name, player_level);
jugador1.informacion();
