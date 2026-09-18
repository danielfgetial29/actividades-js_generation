const {
  enviarMensaje,
  enviarMultiplesMensajes,
  obtenerTodosLosMensajes,
  obtenerUltimoMensaje,
} = require("./app.js");
const assert = require("assert");

// Datos simulados
let datosSimulados = [];

// Simulación de fetch
const fetchOriginal = global.fetch;
global.fetch = async (url, opciones) => {
  if (opciones && opciones.method === "POST") {
    const cuerpo = JSON.parse(opciones.body);
    datosSimulados.push({
      Timestamp: new Date().toISOString(),
      Nombre: cuerpo.nombre,
      Correo: cuerpo.correo,
    });
    return {
      text: async () => "Success",
    };
  } else {
    return {
      json: async () => datosSimulados,
    };
  }
};

// Prueba 1: Verificar la función enviarMensaje
async function prueba1() {
  const resultado = await enviarMensaje("Alice", "alice@example.com");
  assert(resultado === "Success", "enviarMensaje falló");
  console.log("Prueba 1 pasada");
  await prueba2();
}

// Prueba 2: Verificar la función enviarMultiplesMensajes
async function prueba2() {
  const mensajes = [
    { nombre: "Bob", correo: "bob@example.com" },
    { nombre: "Charlie", correo: "charlie@example.com" },
  ];
  await enviarMultiplesMensajes(mensajes);
  assert(datosSimulados.length === 3, "enviarMultiplesMensajes falló");
  console.log("Prueba 2 pasada");
  await prueba3();
}

// Prueba 3: Verificar la función obtenerTodosLosMensajes
async function prueba3() {
  const datos = await obtenerTodosLosMensajes();
  assert(
    Array.isArray(datos) && datos.length > 0,
    "obtenerTodosLosMensajes falló",
  );

  // Verificar que cada entrada tenga los encabezados esperados
  for (const entrada of datos) {
    assert(
      entrada.hasOwnProperty("Timestamp") &&
        entrada.hasOwnProperty("Nombre") &&
        entrada.hasOwnProperty("Correo"),
      "obtenerTodosLosMensajes: faltan encabezados",
    );
  }

  // Verificar que los mensajes enviados en prueba1 y prueba2 estén presentes
  const mensajesEsperados = [
    { Nombre: "Alice", Correo: "alice@example.com" },
    { Nombre: "Bob", Correo: "bob@example.com" },
    { Nombre: "Charlie", Correo: "charlie@example.com" },
  ];
  for (const esperado of mensajesEsperados) {
    const encontrado = datos.some(
      (entrada) =>
        entrada.Nombre === esperado.Nombre &&
        entrada.Correo === esperado.Correo,
    );
    assert(
      encontrado,
      `Mensaje ${JSON.stringify(esperado)} no encontrado en obtenerTodosLosMensajes`,
    );
  }

  console.log("Prueba 3 pasada");
  await prueba4();
}

// Prueba 4: Verificar la función obtenerUltimoMensaje
async function prueba4() {
  const datos = await obtenerUltimoMensaje();
  assert(
    datos.hasOwnProperty("Timestamp") &&
      datos.hasOwnProperty("Nombre") &&
      datos.hasOwnProperty("Correo"),
    "obtenerUltimoMensaje: faltan encabezados",
  );

  // Verificar que el último mensaje sea el último enviado en prueba2
  const ultimoMensajeEsperado = {
    Nombre: "Charlie",
    Correo: "charlie@example.com",
  };
  assert(
    datos.Nombre === ultimoMensajeEsperado.Nombre &&
      datos.Correo === ultimoMensajeEsperado.Correo,
    "obtenerUltimoMensaje no devolvió el último mensaje enviado",
  );

  console.log("Prueba 4 pasada");
  console.log("Todas las pruebas pasadas");

  // Restaurar el fetch original
  global.fetch = fetchOriginal;
}

// Ejecutar las pruebas
(async () => {
  await prueba1();
})();
