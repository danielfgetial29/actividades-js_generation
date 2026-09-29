/**
 * Funcion que muestra un alert al dar click
 * en el parrafo ¡VEN A BURGER TOWN!
 */
function alertaBurgerTown() {
  alert("ES LA HORA DE LA HAMBURGUESA");
  console.log("¡Alguien hizo clic en BURGER TOWN!");
}

const lista = document.getElementsByClassName(".lista");
const cambiarColor = document.getElementById("h2-rojo");

function clickArroz() {
  if (cambiarColor.style.color === "red") {
    cambiarColor.style.color = ""; // Vuelve al color original
  } else {
    cambiarColor.style.color = "red"; // Cambia a rojo
  }
}
