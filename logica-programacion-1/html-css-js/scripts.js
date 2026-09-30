// referenciar los inputs
const numero1 = document.getElementById("num1");
const numero2 = document.getElementById("num2");
const numero3 = document.getElementById("num3");

// refereciar el boton
const botonGuardar = document.getElementById("save-btn");

// referenciar las etiquetas <p> para mostrar los datos
const resultado = document.getElementById("valueNums");

botonGuardar.addEventListener("click", (event) => {
  // Para no recargar la pagina y no perder los datos
  event.preventDefault();

  if (numero1.value && numero2.value && numero3.value) {
    //convierto valores obtenidos en los inputs a numeros
    const num1 = Number(numero1.value);
    const num2 = Number(numero2.value);
    const num3 = Number(numero3.value);

    // los guardo en una lista
    const numerosObtenidos = [num1, num2, num3];
    console.log(numerosObtenidos);

    console.log("Numeros obtenidos correctamente");

    // resultado.textContent = numerosIngresados.join(", ");
  } else {
    alert("Los campos no pueden estar vacios");
  }
});
