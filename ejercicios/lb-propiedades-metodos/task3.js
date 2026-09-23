// ¡Escribe tu código debajo de esta línea!

function Mail(asunto, mensaje) {
  this.asunto = asunto;
  this.mensaje = mensaje;
  this.imprimirCorreo = function () {
    console.log(`${this.asunto}: ${this.mensaje}`);
  };
}

let entrada1 = process.argv[3];
let entrada2 = process.argv[4];

const nuevoCorreo = new Mail(entrada1, entrada2);

// ¡Escribe tu código encima de esta línea!

nuevoCorreo.imprimirCorreo();
