// Consulta la Tarea 4 en tus Instrucciones para completar esta tarea

for (let i = 0; i < 106; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i && i % 7 === 0) {
    console.log("FizzBuzzWoof");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 7 === 0) {
    console.log("Woof");
  } else {
    console.log(i);
  }
}
