// ¡NO MODIFIQUES ESTE ARCHIVO!

// Tus 7 tareas están en archivos separados.
// Abre task1.js para comenzar.

let tarea;
let args;

if (process.argv[2]) {
  tarea = parseInt(process.argv[2]);
  args = process.argv.slice(2);
} else {
  const prompt = require("prompt-sync")();
  tarea = parseInt(prompt("Ejecutar tarea [1-7]: "));
};

switch (tarea) {
  case 1:
    require('./task1.js');
    break;
  case 2:
    require('./task2.js');
    break;
  case 3:
    require('./task3.js');
    break;
  case 4:
    require('./task4.js');
    break;
  case 5:
    require('./task5.js');
    break;
  case 6:
    require('./task6.js');
    break;
  case 7:
    require('./task7.js');
}