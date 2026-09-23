const arr = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
];

// ¡Escribe tu código debajo de esta línea!

//Agregar un numero en la matriz con .push()
// arr[0] esto es la primera fila de la matriz y con push lo agrega al final
arr[0].push(100);
console.log("Primera fila de la matriz [0]", arr[0]);

//Para eliminar el ultimo elemento de la primera fila
arr[0].pop();
console.log(`Columnas de la primera fila ${arr[0].length}`);

// Agregar una fila completa de numeros
arr.push([30, 31, 32, 33, 34, 35, 36, 37, 38, 39]);
console.log(`Filas: ${arr.length} y columnas: ${arr[3].length}`);

// ¡Escribe tu código encima de esta línea!
