// ¡NO MODIFIQUES ESTE ARCHIVO!

// Tus 7 tareas están en archivos separados.
// Abre task1.js para comenzar.

import promptSync from "prompt-sync";

import * as tarea1 from "./task1.js";
import * as tarea2 from "./task2.js";
import * as tarea3 from "./task3.js";
import * as tarea4 from "./task4.js";
import * as tarea5 from "./task5.js";
import * as tarea6 from "./task6.js";
import * as tarea7 from "./task7.js";

let tarea;

if (process.argv[2]) {
  tarea = parseInt(process.argv[2]);
} else {
  const prompt = promptSync();
  tarea = parseInt(prompt("Ejecutar tarea [1-7]: "));
};

switch (tarea) {
  case 1:
    globalThis.Jugador = tarea1.Jugador;
    const jugador1 = new Jugador("Grog", 4);
    console.log(jugador1);
    break;
  case 2:
    globalThis.Jugador = tarea2.Jugador;
    const jugador2 = new Jugador("Grog", 4);
    console.log(jugador2);
    break;
  case 3:
    globalThis.Jugador = tarea3.Jugador;
    const jugador3 = new Jugador("Grog", 4);
    console.log(jugador3.informacion());
    break;
  case 4:
    globalThis.Jugador = tarea4.Jugador;
    const jugador4 = new Jugador("Grog", 4);
    console.log(jugador4.informacion());
    jugador4.subirNivel();
    console.log(jugador4.informacion());
    break;
  case 5:
    globalThis.Jugador = tarea5.Jugador;
    const jugador5 = new Jugador("Grog", 4);
    console.log(jugador5);
    break;
  case 6:
    globalThis.Jugador = tarea6.Jugador;
    const jugador6 = new Jugador("Grog", 4);
    console.log(jugador6);
    break;
  case 7:
    globalThis.Jugador = tarea7.Jugador;
    const jugador7 = new Jugador("Grog", 4);
    console.log(jugador7);
};