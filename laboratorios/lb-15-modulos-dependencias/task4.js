import { calculadoraEdad } from "./task3.js";

let nombreAmigo = process.argv[2];
let anioCumple = process.argv[3];
let mesCumple = process.argv[4];
let diaCumple = process.argv[5];

export class EdadAmigo {
  constructor(nombre, anio, mes, dia) {
    this.nombre = nombre;
    //propiedad importando la funcion calcularEdad()
    this.edadAmigo = calculadoraEdad(anio, mes, dia);
  }
  // metodo usando la propiedad edadAmigo
  retornarEdad() {
    return `¡${this.nombre} tiene ${this.edadAmigo} años hoy!`;
  }
}

// instancia
const amigo = new EdadAmigo(nombreAmigo, anioCumple, mesCumple, diaCumple);
console.log(amigo.retornarEdad());
