export class Jugador {
  constructor(nombre, nivel) {
    this.nombre = String(nombre);
    this.nivel = Number(nivel);
  }
}

// variables con argumentos a recibir
let player_name = process.argv[2];
let player_level = process.argv[3];

// instancia de Jugador()
const jugador1 = new Jugador(player_name, player_level);

console.log(jugador1.nivel);
