/**
 * OBJETIVOS DE APRENDIZAJE
 *
 *
 */
//clase que se va a exportar para utilizar en otro archivo
export class Animal {
  // propiedades de la clase Animal()
  constructor(nombre) {
    this.nombre = nombre;
  }

  // metodos
  respirar() {
    return `${this.nombre} esta respirando...`;
  }

  hacerSonido() {
    return `${this.nombre} esta haciendo un sonido`;
  }
}
