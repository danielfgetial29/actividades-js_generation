let arreglo = [1, 2, 3];

let arreglo2 = arreglo;

arreglo.push(4);

console.log("arr1: ", arreglo);
console.log("arr2: ", arreglo2);

let puntaje = [10, 20, 30];

//operador spread ...
let respaldoPuntaje = [...puntaje];

puntaje[0] = 3;

console.log(
  `Puntaje original = ${respaldoPuntaje}\npuntaje modificado ${puntaje}`,
);
