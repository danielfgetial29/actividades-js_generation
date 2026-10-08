import { nuevosEstilos } from "./dom.js";

// Atrapo los atributos para poderlos utilizar
const parrafo = document.getElementById("parrafo");
const btnChangeStyle = document.getElementById("botonEstilo");

// utilizo la funcion importada para cambiar estilos
btnChangeStyle.addEventListener("click", () => {
  console.log("btnChangeStyle ha sido clickeado");

  nuevosEstilos(parrafo);
});

// Tambien podria utilizar classList con toggle
// btnChangeStyle.addEventListener("click", () => {
//   console.log("btnChangeStyle ha sido clickeado");

//   parrafo.classList.toggle("new-p");
// });
