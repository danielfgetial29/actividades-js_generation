const inputTemperatura = document.getElementById("texto-temperatura");
const btnEnviar = document.getElementById("btn-enviar");

function verificarData(campo) {
  console.log(
    "Ejecutandose funcion que valida el campo tenga contenido valido y no este vacio",
  );
  const valor = campo.value;

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
