import PromptSync from "prompt-sync";
//impor validator from 'validator';

const prompt = PromptSync();

// Varaible para lamacenar el correo introducido por el usuario

let inputEmail = "";

// Bucle que se repite hasta que el coreo sea valido
while (!validator.isEmail(inputEmail)) {
  inputEmail = prompt("Introduce tu correo electronico: ");
}

// si el correo es valido, se imprime un mensaje
console.log(`Correo electrnoico valido: ${inputEmail}`);
