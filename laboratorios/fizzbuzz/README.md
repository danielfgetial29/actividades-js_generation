Evaluación FizzBuzz - Instrucciones para Estudiantes

---

OBJETIVO

Escribe un programa en JavaScript en Fizzbuzz.js que imprima los números del 1 al 1000 siguiendo estas reglas:

- Si el número es divisible por 3, imprime "Fizz".
- Si es divisible por 5, imprime "Buzz".
- Si es divisible por 3 y por 5, imprime "Fizzbuzz" (con "b" minúscula).
- Si no, imprime el número.

---

HERRAMIENTAS NECESARIAS

- Visual Studio Code (o cualquier editor de código)
- Node.js (v12 o superior)

---

ESTRUCTURA DE CARPETAS

Asegúrate de que tu carpeta contenga:

.
├── Fizzbuzz.js Tu implementación en JavaScript
├── test.js Suite de pruebas
└── README.md Instrucciones del proyecto

---

PASOS PARA COMPLETAR LA EVALUACIÓN

1. Implementar Fizzbuzz.js

- Abre Fizzbuzz.js en tu editor.
- Reemplaza la lógica existente con tu implementación de FizzBuzz.
- Asegúrate de que para los números divisibles por 3 y por 5 imprimas "Fizzbuzz" (con "b" minúscula) para que coincida con las pruebas.

Ejemplo inicial:

for (let i = 1; i <= 1000; i++) {
// Tu lógica de FizzBuzz aquí
console.log(i);
}

---

2. Verificar Localmente (Opcional)

Puedes ejecutar tu solución directamente:

node Fizzbuzz.js

Esto muestra toda la salida del 1 al 1000 en la terminal.

---

3. Ejecutar las Pruebas Automatizadas

node test.js

---

NOTAS

- No modifiques test.js. Está configurado para validar tu salida.
- Las pruebas verifican:
  - Las primeras 10 salidas
  - Las primeras 100 salidas
  - Las 1000 salidas completas (del 1 al 1000)
- Asegúrate de mantener la ortografía y el uso de mayúsculas/minúsculas consistente: "Fizz", "Buzz", "Fizzbuzz".

---
