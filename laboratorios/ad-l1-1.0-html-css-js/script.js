// cambio el texto del h1 con id="rojo", uso textContent para tratar todo como un simple texto
document.getElementById("rojo").textContent = "Adios";

// cambiar el color del id:"naranja" a color naranja directamente en el js, no el el css
document.getElementById("naranja").style.color = "orange";

// creo la constante para aplicarle un evento con addEventListener
// que hara que cambie de color a marron
const changeColor = document.getElementById("cambiar-color");

// agrego condicionales para que cuando vuelva a dar click dependiendo del color que este
// cambien de nuevo

changeColor.addEventListener("click", () => {
  if (changeColor.style.color === "brown") {
    changeColor.style.color = "black";
  } else {
    changeColor.style.color = "brown";
  }
});
