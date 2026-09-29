let anionNacimiento = Number(process.argv[2]);
let mesNacimiento = Number(process.argv[3]);
let diaNacimiento = Number(process.argv[4]);

const edad = calculadoraEdad(anionNacimiento, mesNacimiento, diaNacimiento);
// console.log(edad);

/**
 * Funcion que permite calcular la edad de una persona ingresando
 * su fecha de nacimiento y restando con la fecha actual
 */
export function calculadoraEdad(anio, mes, dia) {
  // obtengo la fecha actual con la clase propia de js Date()
  // y la instancio con new
  const fechaActual = new Date();

  // convierto a tipo Date los argumentos ingresados
  const cumpleanos = new Date(anio, mes - 1, dia); // resto 1 en mes porque Date comienza de 0 a 11

  // resto anio actual - anio cumpleanios para calcular solo el anio
  let edad = fechaActual.getFullYear() - cumpleanos.getFullYear();

  // converto la fecha de cumpleaños pero para el año actual, para poder validar si cumplio o no
  const cumpleanosEsteAnio = new Date(fechaActual.getFullYear(), mes, dia);

  // se verifica si aun no ha cumplido anios para restar un año
  // debido a que esa fecha aun no llega
  if (fechaActual < cumpleanosEsteAnio) {
    edad--;
  }

  return edad;
}
