const calculator = require("./calculator");

// Pruebas para la funcion add()
test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("adds -4 + 8 to equal 4", () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

// Pruebas para la funcion substract()
test("subtract 5 - 4 to equal 1", () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test("subtract -5 - -10 to equal 5", () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// Prueba para la funcion divide()
test("divide 10 / 2 sera igual a 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("dividir 99 / 3 sera igual a 33", () => {
  expect(calculator.divide(99, 3)).toBe(33);
});

// Pruebas para la funcion multiply()
test("Multiplicar 50 x 3", () => {
  expect(calculator.multiply(50, 3)).toBe(150);
});

test("Multiplicar 2 x 4", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});
