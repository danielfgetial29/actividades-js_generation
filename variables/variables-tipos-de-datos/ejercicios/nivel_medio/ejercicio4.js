//Practicar metodos strings

let texto = " JavaScript es Genial ";

// Metodos Strings
console.log(`Original: ${texto}`);

//Imprimir sin espacios al inicio y al final
console.log("Sin espacios: ", texto.trim());

//En mayuscula
console.log("Mayusculas: ", texto.toUpperCase());

//En miniscula
console.log("Minusculas: ", texto.toLowerCase());

//La longitud del texto original
console.log("Longitud: ", texto.length);

// Si el texto incluye la palabra "genial"
console.log("Incluye 'Genial' ? ", texto.includes("Genial"));
