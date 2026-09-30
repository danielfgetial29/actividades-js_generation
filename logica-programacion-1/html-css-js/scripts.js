// referenciar los inputs
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const input3 = document.getElementById("num3");

// refereciar el boton
const botonGuardar = document.getElementById("save-btn");

// referenciar las etiquetas <p> para mostrar los datos
const resultado = document.getElementById("valueNums");
const resultado_MayorMenor = document.getElementById("value-mayorMenor");
const resultado_MenorMayor = document.getElementById("value-menorMayor");

botonGuardar.addEventListener("click", (event) => {
  // Para no recargar la pagina y no perder los datos
  event.preventDefault();

  // Valido que los datos no esten vacios
  if (input1.value && input2.value && input3.value) {
    if (isNaN(input1.value) || isNaN(input2.value) || isNaN(input3.value)) {
      console.log("valor no valido");

      alert("Por favor ingresa valores numericos");
    } else {
      //convierto valores obtenidos en los inputs a numeros
      const num1 = Number(input1.value);
      const num2 = Number(input2.value);
      const num3 = Number(input3.value);

      console.log("Numeros obtenidos correctamente");
      // los guardo en una lista
      const numerosObtenidos = [num1, num2, num3];

      // logs para ir depurarando el codigo y ver que pasos se ejecutan correctamente
      console.log(numerosObtenidos.join(", "));

      // muestro el array en la pagina HTML
      resultado.textContent = numerosObtenidos.join(", ");

      // ordeno la lista de menor a mayor y luego solo la invierto
      const menorMayor = numerosObtenidos.toSorted((a, b) => a - b);
      const mayorMenor = menorMayor.toReversed();

      console.log("Numeros ordenados correctamente...");

      //Muestro en el HTML los arrays ordenados segun el ejercicio
      resultado_MayorMenor.textContent = mayorMenor.join(", ");
      resultado_MenorMayor.textContent = menorMayor.join(", ");

      console.log("El resultado se ha mostrado con exito en la pagina");
    }
  } else {
    alert("Los campos no pueden estar vacios");
  }
});
