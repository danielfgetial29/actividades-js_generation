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
