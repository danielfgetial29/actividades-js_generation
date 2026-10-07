// Capturar elementos
const parrafo = document.getElementById("parrafo");
const btnChangeStyle = document.getElementById("botonEstilo");

// Formulario
const formulario = document.getElementById("form1");

// valores del formulario desde

//Tarea 1- Modificar el estilo del texto del párrafo
// aplicar toggler para cambiar de estilo
btnChangeStyle.addEventListener("click", () => {
  console.log("El boton para cambiar de estilo ha sido clickeado");

  parrafo.classList.toggle("new-p");
});

// Tarea 2 - Obtener valores del formulario
function formularioVacio(campo1, campo2) {
  if (!campo1 || !campo2) {
    console.log("Formulario vacio, por favor llena todos los campos");
    cleanForm();
    return true;
  }
  return false;
}

function showDataForm(input1, input2) {
  console.log(`Nombre: ${input1}`);
  console.log(`Apellido: ${input2}`);
}

function cleanForm() {
  formulario.elements["fname"].value = "";
  formulario.elements["lname"].value = "";
}

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
