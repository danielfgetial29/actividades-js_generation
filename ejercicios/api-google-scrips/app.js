const path = require("path");
// Sube niveles desde la ubicación de app.js hasta llegar al .env
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
// app.js
// URL del Web App de Google Apps Script (completar esta línea)
const URL_API = process.env.API_SHEET;

// Función para enviar un mensaje (nombre y correo) al servidor
async function enviarMensaje(nombre, correo) {
  const respuesta = await fetch(URL_API, {
    // completar esta línea
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, correo }),
  });
  const resultado = await respuesta.text();
  console.log(resultado);
  return resultado;
}

// Función para enviar varios mensajes en un bucle
async function enviarMultiplesMensajes(mensajes) {
  for (const mensaje of mensajes) {
    // completar esta línea
    await enviarMensaje(mensaje.nombre, mensaje.correo); // completar esta línea
  }
}

// Función para obtener TODOS los mensajes desde el servidor
async function obtenerTodosLosMensajes() {
  const respuesta = await fetch(URL_API); // completar esta línea
  const datos = await respuesta.json();
  console.log(JSON.stringify(datos));
  return datos;
}

// Función para obtener el ÚLTIMO mensaje registrado
async function obtenerUltimoMensaje() {
  const respuesta = await fetch(URL_API);
  const datos = await respuesta.json();
  const ultimo = datos[datos.length - 1];
  console.log(JSON.stringify(ultimo));
  return ultimo;
}

// Extraer los argumentos de la línea de comandos
const [, , funcion, ...argumentos] = process.argv;

// Ejecutar la función correspondiente según el argumento recibido
(async () => {
  if (funcion === "enviarMensaje") {
    await enviarMensaje(argumentos[0], argumentos[1]);
  } else if (funcion === "enviarMultiplesMensajes") {
    await enviarMultiplesMensajes(JSON.parse(argumentos[0]));
  } else if (funcion === "obtenerTodosLosMensajes") {
    await obtenerTodosLosMensajes();
  } else if (funcion === "obtenerUltimoMensaje") {
    await obtenerUltimoMensaje();
  }
})();

// Exportar las funciones para que puedan usarse en otros archivos
module.exports = {
  enviarMensaje,
  enviarMultiplesMensajes,
  obtenerTodosLosMensajes,
  obtenerUltimoMensaje,
};
