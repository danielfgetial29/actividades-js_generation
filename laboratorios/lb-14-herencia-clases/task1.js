// variables
let nombre_usuario = process.argv[3];

// clase Jugador()
export class Jugador {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

const jugador1 = new Jugador(nombre_usuario);
console.log(jugador1.nombre);
