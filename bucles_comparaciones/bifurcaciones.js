let comida = "arroz";

if (/*condicion*/ comida == "arroz") {
  // El codigo que se debe ejecutar
  console.log("El arroz es la mejor comida");
} else if (comida === "manzana") {
  console.log("La manzana es la mejor comida");
} else if (comida === "mango") {
  console.log("El mango es la mejor comida");
} else {
  console.log("No reconozco la comida");
}

let puntacion = 85;

//      condiccion        ? si es verdadero : si es falso
let resultado = puntacion >= 60 ? "aprobado" : "reprobado";
console.log(resultado);
