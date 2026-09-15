// Practicar arreglos y sus métodos.

let inventario = ["laptop", "mouse", "teclado", "monitor", "cable HDMI"];

// Salidas por pantalla
//  Imprime el arreglo completo
console.log("Inventario completo:", inventario);
// 2. Imprime el primer elemento
console.log("Primer elemento: ", inventario[0]);
// 3. Imprime el último elemento (usando.length - 1)
console.log(`Ultimo elemento: ${inventario.at(-1)}`);
// 4. Agrega "webcam" al final con.push()
inventario.push("webcam");
console.log("Después de push('webcam'): ", inventario);
// 5. Elimina el último elemento con .pop e imprime el elemento eliminado
let elementoEliminado = inventario.pop();
console.log(`Elemento eliminado: ${elementoEliminado}`);
console.log("Despues de pop(): ", inventario);
// 6. Agrega "audífonos" al principio con .unshift()
inventario.unshift("audifonos");
console.log("Despues de unshift('audifonos'): ", inventario);
// 7. Elimina el primer elemento con .shift() e imprime el elemento eliminado
elementoEliminado = inventario.shift();
console.log(`Elemento eliminado: ${elementoEliminado}`);
console.log("Despues de shift(): ", inventario);
// 8. Imprime la cantidad total de elementos
console.log(`Total d elementos: ${inventario.length}`);
