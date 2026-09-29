document.getElementById("titulo-h1").innerHTML =
  "Este es el nuevo titulo h1 modificado con DOM";

document.getElementById("titulo-h1").style.color = "green";

// Cambiar el fondo de pantalla
// document.body.style.backgroundColor = "grey";

// accion para un boton, lo referenciamos en una variable constante
// para poderlo utilizar despues
const boton = document.getElementById("btnSaludar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "Has hecho click";
});
// boton.textContent = "Holaaa";

// aqui hacemos todo en una sola linea sin usar la constante
// document.getElementById("btnSaludar").textContent = "Dimelooo";

// accion para los parrafos (p) getElementsByClassName() obtiene una coleccion de
// todos los ids texto
const textos = document.getElementsByClassName("texto");
for (let texto of textos) {
  texto.textContent = "nuevo texto";
}

// // Seleccionar por ID (usa #)
// const boton = document.querySelector('#btnSaludar');

// // Seleccionar por clase (usa .)
// const titulo = document.querySelector('.mi-clase');

// // Seleccionar por etiqueta HTML
// const parrafo = document.querySelector('p');

// obtener y mostrar datos de un form
// referencias de los inputs de id y contraseña
const userId = document.getElementById("u-id");
const password = document.getElementById("pwd");

// referencia del boton
const botonLogin = document.getElementById("btn-login");

// referencia de los p para poderlos mostrar cuando obtenga el valor
const textId = document.getElementById("valueId");
const textPassword = document.getElementById("valuePassword");

botonLogin.addEventListener("click", (event) => {
  // Para no recargar la pagina por defecto
  event.preventDefault();

  // valida ambos inputs  NO esten vacios
  if (userId.value && password.value) {
    // obtiene los datos de los inputs y los muestra
    textId.textContent = userId.value;
    textPassword.textContent = password.value;
  }
  //muestra una alerta en caso tal que esten vacios
  else {
    alert("Los campos no pueden estar vacios");
  }
});
