// funcion flecha (arrow function)

// ejemplo de funcion normal
function sumar(a, b) {
  return a + b;
}

//funcion flecha
const sumar1 = (a, b) => {
  return a + b;
};

const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 4));
/**
 * Crea una nueva lista donde a cada precio se le aplique un 10% de descuento
 * utilizando el método .map() y una función flecha.
 *
 */
console.log("Aplciar descuentos");
const precios = [100, 250, 500, 750, 1000];

let preciosConDescuento = precios.map((precio) => precio * 0.9);
console.log(preciosConDescuento);
console.log();

console.log("Filtro para adultos\n");
/**
 * Crea una nueva lista que contenga únicamente
 * las edades de las personas que sean mayores o iguales a 18 años
 * usando .filter() y una función flecha.
 */

const edades = [12, 17, 22, 15, 30, 18, 45];
let adultos = edades.filter((edad) => edad >= 18);

// para ordenar el arreglo usando toSorted()
const adultos_ordenado = adultos.toSorted((a, b) => a - b);

console.log(`Edades adultas en la lista edades: ${adultos}`);

console.log(`Arreglo adultos ordenado por edades: '${adultos_ordenado}'`);
console.log(`cantidad de adultos: ${adultos.length}\n`);

console.log("Buscando el VIP\n");
/**
 * Encuentra y guarda en una variable el primer nombre que comience con el texto "VIP_"
 * usando el método .find() y una funcion flecha
 */
const invitados = ["Carlos", "Ana", "Beto", "VIP_Laura", "Eduardo"];
const invitados2 = ["Carlos", "VIP_Ana", "Beto", "VIP_Laura", "Eduardo"];
// .find() encontramos la primera coincidencia y devolvemos un strg
const vip = invitados.find((invitado) => invitado.startsWith("VIP"));

// .filter() encuentra todas las coincidencias y devuelve un array
const all_vip = invitados2.filter((invitado) => invitado.startsWith("VIP"));
console.log("usando .find()", vip);
console.log("usando .filter()", all_vip);
