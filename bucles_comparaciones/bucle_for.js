let listaNombre = ["Ana", "miguel", "Andres", "Claudia", "Luisa"];

//   inicio   |       condicion       | incremento
for (let i = 0; i < listaNombre.length; i++) {
  console.log("Me gusta este nombre: " + listaNombre[i]);
}
console.log();

// for.. of
let frutas = ["Manzana", "pera", "uva"];
for (let fruta of frutas) {
  console.log(fruta);
}
console.log();

// for..in
let persona = {
  nombre: "daniel",
  edad: 25,
  email: "daniel@gmail.com",
};
// recorre cada clave en la lista persona
for (let clave in persona) {
  console.log(clave + ": " + persona[clave]); // nos imprime las claves y el valor de cada clave (persona[clave])
}
