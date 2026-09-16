// Carito de compras con arreglos y objetos

//Arreglo
let carrito = [
  { producto: "Laptop", precio: 2500000, cantidad: 1 },
  { producto: "Mouse", precio: 80000, cantidad: 2 },
  { producto: "Teclado", precio: 150000, cantidad: 1 },
];

// 1. Imprime el carrito completo
console.log("Carrito completo", carrito);
// 2. Imprime el nombre del primer producto
console.log("Primer producto: ", carrito[0].producto);
// 3. Imprime el precio del segundo producto
console.log("Precio del segundo producto: ", carrito[1].precio);
// 4. Imprime la cantidad del tercer producto
console.log(`Cantidad del tercer producto: ${carrito[2].cantidad}`);
// 5. Agrega un nuevo producto: { producto: "Monitor", precio: 800000, cantidad: 1 } con .push()
carrito.push({ producto: "Monitor", precio: 800000, cantidad: 1 });
// 6. Imprime el nombre del nuevo producto agregado
console.log(`Nuevo producto agregado: ${carrito[3].producto}`);
// 7. Calcula el total a pagar (suma de precio * cantidad de cada producto)
// let valorProducto1 = carrito[0].precio * carrito[0].cantidad;
// let valorProducto2 = carrito[1].precio * carrito[1].cantidad;
// let valorProducto3 = carrito[2].precio * carrito[2].cantidad;
// let valorProducto4 = carrito[3].precio * carrito[3].cantidad;
// let valorTotal =
//   valorProducto1 + valorProducto2 + valorProducto3 + valorProducto4;
// //Resultados de sumas
// // console.log(valorProducto1);
// // console.log(valorProducto2);
// // console.log(valorProducto3);
// // console.log(valorProducto4);

//Calculando el valor con el for..of
let totalProductos = 0;
for (let producto of carrito) {
  const subTotal = producto.precio * producto.cantidad;
  totalProductos += subTotal;
}
// console.log(`Total usando el for: $${totalProductos}`);

// obtener valor de cada producto en un for..of
// for (let producto of carrito) {
//   const valorProducto = producto.precio * producto.cantidad;

//   console.log(valorProducto);
// }

// 8. Imprime el total a pagar
console.log(`Total a pagar: $${totalProductos} `);
