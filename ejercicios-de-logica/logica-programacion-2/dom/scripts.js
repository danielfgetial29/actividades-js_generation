// Referencias a los elementos HTML
const formulario = document.getElementById("form-temperatura");
const inputTemperatura = document.getElementById("texto-temperatura");

const numeroIngresado = document.getElementById("numeroIngresado");
const gradosKelvin = document.getElementById("gradosKelvin");
const gradosFahrenheit = document.getElementById("gradosFahrenheit");

// Valida que el campo tenga un número entero

function verificarData(valor) {
  if (valor.trim() === "") {
    return false;
  }

  const numero = Number(valor);

  return Number.isFinite(numero) && Number.isInteger(numero);
}

/**
 * Convierte Celsius a Kelvin.
 * @param {number} numero
 * @returns {number}
 */
function converKelvin(numero) {
  console.log("conviertiendo a grados Kelvin");

  return numero + 273.15;
}

/**
 * Convierte Celsius a Fahrenheit.
 * @param {number} numero
 * @returns {number}
 */
function converFahrenheit(numero) {
  console.log("conviertiendo datos a Fahrenheit");

  return numero * 1.8 + 32;
}

// Muestra los resultados en el HTML
function showData(campo, kelvin, fahrenheit) {
  console.log("mostrando datos en el html...");

  numeroIngresado.textContent = `${campo} °C`;
  gradosKelvin.textContent = `${kelvin.toFixed(2)} K`;
  gradosFahrenheit.textContent = `${fahrenheit.toFixed(2)} °F`;
}

// Escucha el envío del formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  // Leer el valor actual del input
  const valor = inputTemperatura.value;

  // Validar antes de realizar los cálculos
  if (!verificarData(valor)) {
    alert("Ingresa una temperatura válida, sin decimales.");
    return;
  }

  // Convertir el valor de texto a número
  const temperatura = Number(valor);

  // Realizar las conversiones
  const resultadoKelvin = converKelvin(temperatura);
  const resultadoFahrenheit = converFahrenheit(temperatura);

  // Mostrar los resultados
  showData(temperatura, resultadoKelvin, resultadoFahrenheit);
});
