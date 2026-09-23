// funcion flecha (arrow function)

// ejemplo de funcion normal
function sumar(a, b) {
  return a + b;
}

//funcion flecha
const sumar1 = (a, b) => {
  return a + b;
};

const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 4));

// recorrer un arreglo con arrow function
const precios = [100, 250, 500, 750, 1000];

let preciosConDescuento = precios.map((precio) => precio * 0.9);
console.log(preciosConDescuento);
