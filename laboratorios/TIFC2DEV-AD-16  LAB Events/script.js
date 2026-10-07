//Tarea 1
const parrafo = document.getElementById("parrafo");
const btnChangeStyle = document.getElementById("botonEstilo");

// aplicar toggler para cambiar de estilo
btnChangeStyle.addEventListener("click", () => {
  console.log("El boton para cambiar de estilo ha sido clickeado");

  parrafo.classList.toggle("new-p");
});
