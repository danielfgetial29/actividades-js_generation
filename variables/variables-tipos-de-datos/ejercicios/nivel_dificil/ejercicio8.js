// Practicar objetos, acceso a propiedades y modificación.

// objeto
let perfil = {
  nombre: "Maria",
  apellido: "Lopez",
  edad: 28,
  profesion: "Diseñadora",
  ciudad: "Medellin",
};

// 1. Imprime el objeto completo
console.log("Perfil completo:", perfil);
// 2. Imprime el nombre usando notación de punto
console.log("Nombre: ", perfil.nombre);
// 3. Imprime el apellido usando notación de corchetes
console.log("Apellido: ", perfil["apellido"]);
// 4. Cambia la edad a 29
perfil.edad = 29;
console.log("Edad actualizada: ", perfil.edad);
// 5. Agrega una nueva propiedad hobby con valor
perfil.hobby = "Fotografia";
console.log("Despues de agregar hobby", perfil);
// 6. Elimina la propiedad ciudad
delete perfil.ciudad;
// 7. Imprime el objeto final
console.log("Despues de eliminar ciudad: ", perfil);
