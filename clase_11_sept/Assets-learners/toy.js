// Importar el módulo readline para manejar la entrada del usuario desde la línea de comandos
const readline = require("readline");

// Crear una interfaz para leer la entrada y escribir la salida
const rl = readline.createInterface({
  input: process.stdin, // Leer entrada desde la entrada estándar (teclado)
  output: process.stdout, // Escribir salida en la salida estándar (consola)
});

// Programa principal
console.log("=== Programa de interactivo ===");

rl.question("Dime tu nombre: ", (nombre) => {
  rl.question("Dime un puesto en el mundo del software: ", (nombre_puesto) => {
    rl.question("Menciona un adjetivo: ", (primer_adjetivo) => {
      rl.question("Dime un segundo abjetivo: ", (segundo_adjetivo) => {
        rl.question("Menciona una comida que te guste: ", (primnera_comida) => {
          rl.question("Menciona otra comida: ", (segunda_comida) => {
            rl.question("Describe como te sientes: ", (sentimiento) => {
              //Imprimer mensaje con todas las palabras
              console.log(`${nombre} ha comenzado hoy su primer curso de Generation.
                  Se está formando como ${nombre_puesto}. Sus compañeros 
                  le parecieron muy ${primer_adjetivo}, pero su profesor era, cuando menos, 
                  ${segundo_adjetivo}. De almuerzo come ${primnera_comida} y 
                  ${segunda_comida} mientras repasa sus notas. Siente ${sentimiento} 
                  pero tiene la determinación de terminar el curso.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
