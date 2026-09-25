const prompt = require("prompt-sync")({ sigint: true });

const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12];

let search_value = Number(prompt("Ingresa un numero a buscar en la lista: "));

let indice = arr.indexOf(search_value);

if (indice !== -1) {
  console.log(`El indice de ${search_value} es [${indice}]`);
} else {
  console.log("El numero no esta en el arreglo");

  // Buscamos el índice del primer número que sea mayor al valor ingresado
  let posicionDestino = arr.findIndex((num) => num > search_value);

  // Si no encuentra ningún número mayor (ej. ingresas 15), findIndex devuelve -1.
  // En ese caso, su posición correcta es al final del arreglo.
  if (posicionDestino === -1) {
    posicionDestino = arr.length;
  }

  insertarValor(posicionDestino, search_value);
  console.log(
    `Valor insertado en la posición ${posicionDestino}. Nuevo arreglo:`,
    arr,
  );
}

function insertarValor(indice, valor) {
  arr.splice(indice, 0, valor);
}
