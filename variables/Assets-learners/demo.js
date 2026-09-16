// Importar el módulo readline para manejar la entrada del usuario desde la línea de comandos
const readline = require('readline');

// Crear una interfaz para leer la entrada y escribir la salida
const rl = readline.createInterface({
  input: process.stdin, // Leer entrada desde la entrada estándar (teclado)
  output: process.stdout // Escribir salida en la salida estándar (consola)
});


// Programa principal
console.log("¡Bienvenido a tu primer programa interactivo!");

rl.question('¿Cuál es tu primer nombre? ', (primerNombre) => {
  rl.question('¿Cuál es tu apellido? ', (apellido) => {
    console.log(`¡Hola ${primerNombre} ${apellido}!`);
    rl.close();
  });
});