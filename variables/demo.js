// Importartamos readline para manejar la entrada del usuario para la terminal 
const readline = require('readline');

// interfaz para leer entrada y mostrar salida
const rl = readline.createInterface({
    input: process.stdin, // leer entrada desde el teclado
    output: process.stdout // mostrar salida    
});

// programa principal
console.log("Bienvenido a mi primer programa interactivo con JS");

rl.question('Dime tu primer nombre:', (primerNombre) => {
    rl.question('Y cual es tu apellido:', (apellido) => {

        // imprimimos en la consola con utilizando las variables
        console.log(`Hola ${primerNombre} ${apellido}, Bienvenido a tu programa`);
        rl.close();
    });
}); 

