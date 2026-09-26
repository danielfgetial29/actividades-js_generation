// variables (en este caso no las usamos ya que el index.js las obtiene)
let nombreAmigo1 = process.argv[3];
let nombreAmigo2 = process.argv[4];
let nombreAmigo3 = process.argv[5];

//

export class NombresAmigos {
  constructor(nombre1, nombre2, nombre3) {
    this.nombre1 = nombre1;
    this.nombre2 = nombre2;
    this.nombre3 = nombre3;
  }
  agregarAmigos() {
    let nombresObtenidos = [this.nombre1, this.nombre2, this.nombre3];
    return nombresObtenidos;
  }
}

// instanciamos la clase
const amigos = new NombresAmigos(nombreAmigo1, nombreAmigo2, nombreAmigo3);
console.log(amigos.agregarAmigos());
