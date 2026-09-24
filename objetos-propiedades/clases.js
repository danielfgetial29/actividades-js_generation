let persona = {
  nombre: "Daniel",
  apellido: "Getial",
  nombreCompleto: function () {},
};

// funcion constructura comienza con mayuscula
/**
 * plantilla para los objetos que creemos
 * apartir de este constructor Persona() que recibe
 * 2 parametros
 */
function Persona(p1, p2) {
  this.nombre = p1;
  this.apellido = p2;

  this.nombreCompleto = function () {
    return `Mi nombre es ${this.nombre} ${this.apellido}`;
  };
}

// instancia de la funcion persona
const persona1 = new Persona("Julian", "Rodriguez");
console.log(persona1.nombreCompleto());

// clase persona
class Personas {
  // El constructor inicializa las propiedades del objeto
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Un método de la clase
  saludar() {
    return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
  }
}
