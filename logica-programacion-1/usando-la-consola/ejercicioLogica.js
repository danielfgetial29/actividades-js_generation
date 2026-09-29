/**
 * Crear un programa en Javascript que realice lo siguiente:
    Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
    Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
    Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
    Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
 */
import PromptSync from "prompt-sync";

const prompt = PromptSync();

console.log("=== Solicitar Numeros ===\n");

const num1 = Number(prompt("Ingresa el primer numero: "));
const num2 = Number(prompt("Ingresa el segundo numero: "));
const num3 = Number(prompt("Ingresa el tercer numero: "));

const numerosIngresados = [num1, num2, num3];

if (num1 === num2 && num2 === num3) {
  console.log(`\nLos numeros son iguales: ${numerosIngresados}`);
} else {
  console.log(`\nLos numeros ingresados fueron: ${numerosIngresados}\n`);

  const menorMayor = numerosIngresados.toSorted((a, b) => a - b);
  const mayorMenor = menorMayor.toReversed();

  console.log(`Numeros de mayor a menor: ${mayorMenor}\n`);
  console.log(`Numeros de menor a mayor: ${menorMayor}`);
}
