// referenciar los inputs
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const input3 = document.getElementById("num3");

// refereciar el boton
const botonGuardar = document.getElementById("save-btn");

// referenciar las etiquetas <p> para mostrar los datos
const resultado = document.getElementById("valueNums");

botonGuardar.addEventListener("click", (event) => {
  // Para no recargar la pagina y no perder los datos
  event.preventDefault();

  // Valido que los datos no esten vacios
  if (num1.value && num2.value && num3.value) {
    //convierto valores obtenidos en los inputs a numeros
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    const num3 = Number(input3.value);

    // los guardo en una lista
    const numerosObtenidos = [num1, num2, num3];
    // logs para ir depurarando el codigo y ver que pasos se ejecutan correctamente
    // console.log(numerosObtenidos);

    console.log("Numeros obtenidos correctamente");

    resultado.textContent = numerosObtenidos.join(", ");
    console.log("El resultado se ha mostrado con exito en la pagina");
  } else {
    alert("Los campos no pueden estar vacios");
  }
});
