const arr = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
];

// ¡Escribe tu código debajo de esta línea!

//Agregar un numero en la matriz con .push()
// arr[0] esto es la primera fila de la matriz y con push lo agrega al final
console.log("Agregar un numero a una matriz");

arr[0].push(100);
console.log("Primera fila de la matriz [0]", arr[0]);
console.log();

//Para eliminar el ultimo elemento de la primera fila
console.log("Eliminar ultimo numero");

arr[0].pop();
console.log(`Columnas de la primera fila ${arr[0].length}`);
console.log();

// Agregar una fila completa de numeros
console.log("Agregar una fila completa");

arr.push([30, 31, 32, 33, 34, 35, 36, 37, 38, 39]);
console.log(`Filas: ${arr.length} y columnas: ${arr[3].length}`);
console.log();

// Eliminar un solo numero especifico en una fila
console.log("Eliminar un numero en un lugar especifico");

arr[2].splice(10, 0, 101); // lo agregamos para el ejemplo
console.log(arr[2]); // para ver el numero agregado

arr[2].splice(10, 1);
console.log(arr[2]);
console.log();

// Revertir una UNICA fila
console.log("Revertir solo una fila en la matriz");
console.log("Fila normal", arr[3]);
console.log("Fila invertida", arr[3].reverse());

// ¡Escribe tu código encima de esta línea!
