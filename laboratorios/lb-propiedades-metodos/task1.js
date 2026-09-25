// funcion constructura
function Mail(asunto, mensaje) {
  this.asunto = asunto;
  this.mensaje = mensaje;
  // this.mostrarMensaje = function () {
  //   return `${this.asunto} ${this.mensaje}`;
  // };
}

// ¡Escribe tu código debajo de esta línea!
// const saludo = new Mail("hola", "mundo");
// console.log(saludo.mostrarMensaje());

const nuevoCorreo = new Mail("hola", "mundo");

// ¡Escribe tu código encima de esta línea!

console.log(nuevoCorreo.asunto + ": " + nuevoCorreo.mensaje);
