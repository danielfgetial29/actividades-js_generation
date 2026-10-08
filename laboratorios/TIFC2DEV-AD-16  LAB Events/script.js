// Capturar elementos
//Elementos tarea1
const parrafo = document.getElementById("parrafo");
const btnChangeStyle = document.getElementById("botonEstilo");

// Formulario
//Elementos tarea 2
const formulario = document.getElementById("form1");

// Elementos tarea 3
const btnInfoEnlaces = document.getElementById("botonEnlaces");
const enlaces = document.querySelectorAll("a");

//Tarea 1- Modificar el estilo del texto del párrafo
// aplicar toggler para cambiar de estilo
btnChangeStyle.addEventListener("click", () => {
  console.log("El boton para cambiar de estilo ha sido clickeado");

  parrafo.classList.toggle("new-p");
});

// Tarea 2 - Obtener valores del formulario
/**
 * Valida si todos los campos del formulario tiene contenido
 * @param {string} campo1
 * @param {string} campo2
 * @returns {boolean} true/ false en caso que este vacio
 */
function formularioVacio(campo1, campo2) {
  if (!campo1 || !campo2) {
    console.log("Formulario vacio, por favor llena todos los campos");
    cleanForm();
    return true;
  }
  return false;
}

/**
 * Imprimie los datos del formulario en la consola
 * @param {string} input1
 * @param {string} input2
 */
function showDataForm(input1, input2) {
  console.log(`Nombre: ${input1}`);
  console.log(`Apellido: ${input2}`);
}
/**
 * Limpia los campos del formulario
 */
function cleanForm() {
  formulario.elements["fname"].value = "";
  formulario.elements["lname"].value = "";
}

/**
 * Envia los datos del formulario con el submit
 */
function sendData() {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Detiene el recargo de página

    // Obtengo siempre los ultimos datos ingresados
    const formData = new FormData(formulario);
    const inputName = formData.get("fname");
    const lastName = formData.get("lname");

    // Validamos si están vacíos
    const estaVacio = formularioVacio(inputName, lastName);

    // Si no está vacío, mostramos los datos y limpiamos los campos
    if (!estaVacio) {
      showDataForm(inputName, lastName);

      // Limpio el formulario
      cleanForm();
    }
  });
}

sendData();

// Tarea 3 - Mostrar alerta con información de enlaces

btnInfoEnlaces.addEventListener("click", () => {
  console.log("Boton de informacion de enlaces clickeado");
  alert(`
    Numer de enlaces: ${enlaces.length}
    Primer enlace: ${enlaces[0]}
    Ultimo enlace: ${enlaces[enlaces.length - 1]}
    `);
});
