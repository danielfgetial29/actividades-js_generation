import { Animal } from "./practica.js";

// Clase hija de la clase Padre Animal()
export class Perro extends Animal {
  ladrar() {
    return `${this.nombre} esta ladrandoo WOUFF WOUFF`;
  }
}

export class Gato extends Animal {
  maullar() {
    return `${this.nombre} esta haciendo MIAUU MIAUUU`;
  }
}
