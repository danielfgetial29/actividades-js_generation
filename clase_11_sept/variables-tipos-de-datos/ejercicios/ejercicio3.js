// Practicar los problemas aritmeticos en un contexto real

//Declaracion de variables
let precioProducto = 50000;
const PORCENTAJE_IVA = 19;

//Problema
let iva = (precioProducto * PORCENTAJE_IVA) / 100;
let precioFinal = precioProducto + iva;

//salidas
console.log(`Precio del producto: $${precioProducto}`);
console.log(`IVA (19%): $${iva}`);
console.log(`Precio Total con IVA: $${precioFinal}`);
