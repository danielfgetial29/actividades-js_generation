// Ejercicio 10: Ficha de Producto (Objeto Anidado)
// Objetivo: Practicar objetos anidados y acceso a propiedades profundas.
let producto = {
  nombre: "Smartphone Galaxy",
  precio: 1800000,
  disponible: true,
  colores: ["negro", "blanco", "azul"],
  especificaciones: {
    marca: "Samsung",
    ram: "8GB",
    almacenamiento: "256GB",
    camara: "108MP",
  },
  vendedor: {
    nombre: "TechStore",
    ciudad: "Bogotá",
    calificacion: 4.8,
  },
};

// 1. Imprime el nombre del producto
console.log(`Nombre: ${producto.nombre}`);
// 2. Imprime el precio del producto
console.log(`Precio: $${producto.precio}`);
// 3. Imprime el primer color disponible
console.log(`Primer color: ${producto.colores[0]}`);
// 4. Imprime la marca desde las especificaciones
console.log(`Marca: ${producto.especificaciones.marca}`);
// 5. Imprime la RAM desde las especificaciones
console.log(`RAM: ${producto.especificaciones.ram}`);
// 6. Imprime la ciudad del vendedor
console.log(`Ciudad del vendedor: ${producto.vendedor.ciudad}`);
// 7. Imprime la calificación del vendedor
console.log(`Calificacion: ${producto.vendedor.calificacion}`);
// 8. Cambia la disponibilidad a false
producto.disponible = false;
console.log(`Disponible actualizado: ${producto.disponible}`);
// 9. Agrega un nuevo color "rojo" al arreglo de colores con .push()
producto.colores.push("rojo");
console.log(`Colores actualizados: ${producto.colores}`);
// 10. Imprime el objeto completo actualizado
console.log("Producto completo: ", producto);
