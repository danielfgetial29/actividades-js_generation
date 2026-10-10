const inputTemperatura = document.getElementById("texto-temperatura").value;
const btnEnviar = document.getElementById("btn-enviar");

function verificarData(campo) {
  console.log(
    "Ejecutandose funcion que valida el campo tenga contenido valido y no este vacio",
  );
  const valor = campo;

  if (!valor || Number.isInteger(Number(valor))) {
    console.log("El campo esta vacio o no es un numero entero..");
    return true;
  }
  return false;
}

/**
 * Funcion que convierte un numero a grados
 * Kelvin
 * @param {number} numero
 * @returns el resultado de la conversion
 */
function converKelvin(numero) {
  console.log("Ejecutandose funcion de convertir a Kelvin");

  const gradKelvin = numero + 273.15;
  return gradKelvin;
}
converKelvin(inputTemperatura);

/**
 * Convierte los grados Celsius a grados
 * Fahrenheit
 * @param {number} numero
 * @returns el resultado de la conversion
 */
function converFahrenheit(numero) {
  console.log("Ejecutandose funcion de convertir a Fahrenheit");

  const gradFahrenheit = numero * 1.8 + 32;
  return gradFahrenheit;
}

function showData(campo, num1, num2) {
  console.log(`Mostrando datos en la consola`);

  const numeroIngresado = document.getElementById("numeroIngresado");
  const gradosKelvin = document.getElementById("gradosKelvin");
  const gradosFahrenheit = document.getElementById("gradosFahrenheit");

  console.log(`Numero ingresado: ${campo}`);
  console.log(`Grados Kelvin: ${num1}`);
  console.log(`Grados Fahrenheit: ${num2}`);

  numeroIngresado.textContent = campo;
  gradosKelvin.textContent = num1;
  gradosFahrenheit.textContent = num2;
}

function enviarData() {
  btnEnviar.addEventListener("submit", (event) => {
    event.preventDefault();

    const datosCorrectos = verificarData(inputTemperatura);

    converKelvin(inputTemperatura);
    converFahrenheit(inputTemperatura);

    if (!datosCorrectos) {
      showData(inputTemperatura, gradKelvin, gradFahrenheit);
    }
  });
}

enviarData();
