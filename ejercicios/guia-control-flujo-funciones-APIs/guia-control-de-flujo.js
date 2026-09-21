// TEMAS: Comparaciones, If, While, For

// INSTRUCCIÓN: Ejecuta cada sección por separado en un archivo js nuevo

//Recuerde lo siguiente:

//() — Parentesis
//[] — Corchetes (Brackets o Square Brackets)
//{} — Llaves (Curly Braces o Braces)
// | — Barra vertical (Pipe o Vertical Bar)
// ' — Comilla simple (Single Quote)
// " — Comilla doble (Double Quote)
// ` — Comilla invertida (Backtick o Grave Accent)

//--------------------------------------------------------------------------------------------------

// 1. COMPARACIONES (El corazón de las decisiones)

// ¿QUÉ ES UNA COMPARACIÓN?
// Una comparación es una operación que compara dos valores y devuelve un resultado booleano:
// true (verdadero) o false (falso). Son la base de todas las decisiones en programación,
// porque permiten que el programa "pregunte" si algo se cumple o no antes de actuar.

// Una comparación siempre devuelve true (verdadero) o false (falso)
console.log("=== COMPARACIONES BÁSICAS ===");
console.log("5 > 3:", 5 > 3);           // true (5 es mayor que 3)
console.log("5 < 3:", 5 < 3);           // false (5 no es menor que 3)
console.log("5 >= 5:", 5 >= 5);         // true (5 es mayor o igual que 5)
console.log("5 <= 3:", 5 <= 3);         // false (5 no es menor o igual que 3)
console.log("5 === 5:", 5 === 5);       // true (valor y tipo son iguales)
console.log("5 === '5':", 5 === '5');   // false (número vs texto)
console.log("5 !== '5':", 5 !== '5');   // true (son diferentes en tipo)
console.log("");



// El operador módulo (%) devuelve el RESTO de una división
console.log("OPERADOR MÓDULO (%)");
console.log("10 % 3 =", 10 % 3);   // 1 (10 dividido 3 da 3, sobran 1)
console.log("15 % 5 =", 15 % 5);   // 0 (15 dividido 5 da 3 exacto, sobra 0)
console.log("7 % 4 =", 7 % 4);     // 3 (7 dividido 4 da 1, sobran 3)
console.log("");




// El módulo es útil para saber si un número es DIVISIBLE por otro
let numero = 9;
let esDivisiblePor3 = (numero % 3 === 0);
console.log(`¿${numero} es divisible por 3?`, esDivisiblePor3);  // true

numero = 10;
let esDivisiblePor5 = (numero % 5 === 0);
console.log(`¿${numero} es divisible por 5?`, esDivisiblePor5);  // true
console.log("");

//--------------------------------------------------------------------------------------------------

// 1.1 OPERADORES LÓGICOS (Combinar comparaciones)

// ¿QUÉ SON LOS OPERADORES LÓGICOS?
// Permiten combinar varias comparaciones en una sola expresión.
// Son esenciales cuando necesitas que se cumplan DOS o MÁS condiciones al mismo tiempo,
// o cuando basta con que se cumpla UNA de ellas.

console.log("=== OPERADORES LÓGICOS ===");

// && (AND / Y) → true solo si AMBAS condiciones son true
console.log("true && true:", true && true);     // true
console.log("true && false:", true && false);   // false
console.log("false && false:", false && false); // false

// || (OR / O) → true si AL MENOS UNA condición es true
console.log("true || true:", true || true);     // true
console.log("true || false:", true || false);   // true
console.log("false || false:", false || false); // false

// ! (NOT / NO) → invierte el valor booleano
console.log("!true:", !true);     // false
console.log("!false:", !false);   // true

// Ejemplo práctico: ¿Puede entrar a la montaña rusa?
let edadUsuario = 15;
let alturaUsuario = 160; // cm
let puedeSubir = (edadUsuario >= 12) && (alturaUsuario >= 140);
console.log(`¿Puede subir a la montaña rusa? ${puedeSubir}`); // true

// Ejemplo práctico: ¿Es fin de semana?
let dia = "sábado";
let esFinDeSemana = (dia === "sábado") || (dia === "domingo");
console.log(`¿${dia} es fin de semana? ${esFinDeSemana}`); // true

// Ejemplo práctico: ¿NO está lloviendo?
let estaLloviendo = false;
console.log(`¿Está seco? ${!estaLloviendo}`); // true
console.log("");

//--------------------------------------------------------------------------------------------------


// 2. IF / ELSE (Ramificación - Tomar decisiones)

// ¿QUÉ ES UN IF?
// Es una estructura de control que permite ejecutar un bloque de código SOLO si se cumple
// una condición. Si la condición es false, el bloque se salta y (opcionalmente) se ejecuta
// el bloque del else. Es la forma más básica de tomar decisiones en un programa.

// EJEMPLO FÁCIL - La discoteca
console.log(" IF - DECISIÓN SIMPLE ");
let edad = 18;

if (edad >= 18) {
    console.log("Puedes entrar a la discoteca");
} else {
    console.log("Lo siento, eres menor de edad");
}
console.log("");




// EJEMPLO MEDIO: Multiples condiciones con else if
console.log(" IF - MÚLTIPLES CONDICIONES");
let nota = 85;

if (nota >= 90) {
    console.log("Calificación: Excelente (A)");
} else if (nota >= 80) {
    console.log("Calificación: Muy bien (B)");
} else if (nota >= 70) {
    console.log("Calificación: Bien (C)");
} else if (nota >= 60) {
    console.log("Calificación: Suficiente (D)");
} else {
    console.log("Calificación: Necesitas mejorar (F)");
}
console.log("");




// EJEMPLO AVANZADO: Anidar if (if dentro de if)
console.log("IF ANIDADOS");

//Aprobación de préstamo bancario

let historialCrediticio = "bueno";   // "bueno", "regular", "malo"
let ingresosMensuales = 2500000;     // pesos
let montoSolicitado = 10000000;      // pesos

console.log(`Historial: ${historialCrediticio}, Ingresos: $${ingresosMensuales}, Préstamo: $${montoSolicitado}`);

// 1. if Tiene buen historial?
if (historialCrediticio === "bueno") {
    console.log("Historial crediticio aprobado");

    // 2. if - Sus ingresos son suficientes?

    let capacidadPago = ingresosMensuales * 0.3;  // Máximo 30% de ingresos para cuota
    let cuotaMensual = montoSolicitado * 0.05;  // Suponiendo 5% de cuota mensual

    console.log(`Capacidad de pago maxima: $${capacidadPago}`);
    console.log(`Cuota mensual estimada: $${cuotaMensual}`);

    if (cuotaMensual <= capacidadPago) {
        console.log("¡PRESTAMO APROBADO! Puedes pagar la cuota mensual.");

        // 3. if (anidado dentro del segundo): Monto alto?
        if (montoSolicitado >= 20000000) {
            console.log("Por ser un préstamo alto, te regalamos una tarjeta de crédito adicional.");
        } else {
            console.log("Se generará el contrato en 24 horas.");
        }

    } else {
        console.log("PRESTAMO RECHAZADO - La cuota excede tu capacidad de pago.");
    }

} else if (historialCrediticio === "regular") {
    console.log("Historial regular. Necesitas un codeudor para el préstamo.");
} else {
    console.log("PRÉSTAMO RECHAZADO: Historial crediticio malo.");
}

// Prueba cambiando: historialCrediticio = "bueno", ingresosMensuales = 1200000
// Prueba cambiando: historialCrediticio = "regular"
//Intenten cambiar los datos

//--------------------------------------------------------------------------------------------------

// 2.1 OPERADOR TERNARIO (If en una sola línea)

// ¿QUÉ ES EL OPERADOR TERNARIO?
// Es una forma abreviada de escribir un if/else simple en UNA sola línea.
// Sintaxis: condición ? valorSiTrue : valorSiFalse
// Es útil cuando quieres asignar un valor a una variable según una condición.
// NO se recomienda para lógica compleja (mejor usar if/else en esos casos).

console.log("=== OPERADOR TERNARIO ===");

// Ejemplo 1: Mensaje según la edad
let edadPersona = 20;
let mensaje = (edadPersona >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje);

// Ejemplo 2: Par o impar
let numeroEntero = 7;
let tipo = (numeroEntero % 2 === 0) ? "par" : "impar";
console.log(`${numeroEntero} es ${tipo}`);

// Ejemplo 3: Ternario anidado (no recomendado si se vuelve muy complejo)
let notaFinal = 85;
let calificacion = (notaFinal >= 90) ? "A" :
    (notaFinal >= 80) ? "B" :
        (notaFinal >= 70) ? "C" : "F";
console.log(`Calificación: ${calificacion}`);

// Ejemplo 4: Ternario en una expresión directamente
console.log("¿Puede votar?", edadPersona >= 18 ? "Sí" : "No");
console.log("");

//--------------------------------------------------------------------------------------------------

// 2.2 SWITCH (Múltiples casos exactos)

// ¿QUÉ ES UN SWITCH?
// Es una alternativa al if/else cuando necesitas comparar UNA variable contra MUCHOS
// valores exactos. Es más limpio y legible que muchos else if encadenados.
// IMPORTANTE: siempre incluir break para evitar que se ejecuten los siguientes casos.
// La cláusula default se ejecuta si ningún case coincide.

console.log("=== SWITCH ===");

// Ejemplo 1: Día de la semana
let diaSemana = "miércoles";

switch (diaSemana) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
        console.log("Es un día laboral");
        break;
    case "sábado":
    case "domingo":
        console.log("Es fin de semana");
        break;
    default:
        console.log("Día no válido");
}
console.log("");

// Ejemplo 2: Menú de opciones
let opcion = 2;
switch (opcion) {
    case 1:
        console.log("Seleccionaste: Crear nuevo envío");
        break;
    case 2:
        console.log("Seleccionaste: Ver envíos existentes");
        break;
    case 3:
        console.log("Seleccionaste: Salir");
        break;
    default:
        console.log("Opción no válida");
}

// Ejemplo 3: Switch con rangos (usando true en el switch)
let puntaje = 78;
switch (true) {
    case (puntaje >= 90):
        console.log("Excelente");
        break;
    case (puntaje >= 80):
        console.log("Muy bien");
        break;
    case (puntaje >= 70):
        console.log("Bien");
        break;
    default:
        console.log("Necesitas mejorar");
}
console.log("");

//--------------------------------------------------------------------------------------------------


// 3. WHILE (Bucle - Repetir mientras se cumpla una condicion)

// ¿QUÉ ES UN BUCLE?
// Un bucle es una estructura que repite un bloque de código varias veces.
// El while repite MIENTRAS una condición sea true. Se usa cuando NO sabemos
// cuántas veces se va a repetir (depende de que la condición se cumpla o no).
// PELIGRO: si la condición nunca se vuelve false, se crea un bucle infinito.

// Contador del 1 al 5
console.log(" WHILE - CONTADOR BASICO");
let contador = 1;

while (contador <= 5) {
    console.log(`Vuelta numero ${contador}`);
    contador = contador + 1;  // OJO, Si esta linea falta, es bucle infinito y para terminar el programa deben terminar la terminal
}
console.log("El bucle termino porque contador llego a 6");
console.log("");


// EJEMPLO MEDIO - Cuenta regresiva
console.log(" WHILE - CUENTA REGRESIVA ");
let cuenta = 10;

while (cuenta > 0) {
    console.log(`Lanzamiento en ${cuenta}...`);
    cuenta = cuenta - 1;
}
console.log("¡DESPEGUE!");
console.log("");


// EJEMPLO AVANZADO: Simular inicio de sesión (máximo 3 intentos)
console.log("WHILE - SIMULACION DE LOGIN");
let intentos = 0;
let contrasenaCorrecta = "secreto123";
let contrasenaIngresada = "secreto123";  // Cambiar para probar fallos

while (intentos < 3 && contrasenaIngresada !== contrasenaCorrecta) {
    intentos = intentos + 1;
    console.log(`Intento ${intentos}: contraseña incorrecta`);
    // En un programa real, aquí preguntaríamos al usuario
}
if (contrasenaIngresada === contrasenaCorrecta) {
    console.log(" Acceso concedido");
} else {
    console.log(" Demasiados intentos. Cuenta bloqueada");
}
console.log("");

//--------------------------------------------------------------------------------------------------

// 3.1 DO...WHILE (Ejecutar al menos una vez)

// ¿QUÉ ES UN DO...WHILE?
// Es una variante del while que ejecuta el bloque AL MENOS UNA VEZ, y luego
// verifica la condición. Es útil cuando necesitas que el código se ejecute
// primero, sin importar si la condición se cumple o no (por ejemplo, menús).

console.log("=== DO...WHILE ===");

// Ejemplo 1: Contador que se ejecuta al menos una vez
let i = 1;
do {
    console.log(`Vuelta ${i}`);
    i++;
} while (i <= 5);
console.log("");

// Ejemplo 2: Simular validación de entrada
let opcionMenu = 5; // Supongamos que el usuario ingresó 5
do {
    console.log(`Procesando opción ${opcionMenu}...`);
    opcionMenu--;
} while (opcionMenu > 0);
console.log("");

// Ejemplo 3: Aunque la condición sea false desde el inicio, se ejecuta una vez
let j = 100;
do {
    console.log(`Esto se ejecuta UNA vez aunque j=${j} sea mayor que 5`);
    j++;
} while (j <= 5);
console.log("");

//--------------------------------------------------------------------------------------------------


// 4. FOR (Bucle ideal para arreglos y conteo fijo)

// ¿QUÉ ES UN FOR?
// Es un bucle que se usa cuando SABEMOS cuántas veces queremos repetir algo.
// Tiene 3 partes en una sola línea: inicialización; condición; actualización.
// Es ideal para recorrer arreglos (arrays) porque conocemos su longitud.

// SINTAXIS: for (inicialización; condición; actualización)
// for (let i = 0; i < limite; i++)

// EJEMPLO FÁCIL: Contador del 1 al 5 (igual que el while)
console.log("FOR - CONTADOR BÁSICO");
for (let i = 1; i <= 5; i++) {
    console.log(`Vuelta número ${i}`);
}
console.log("");


// EJEMPLO MEDIO: Recorrer un arreglo de nombres
console.log("=== FOR - RECORRER ARREGLO ===");
let nombres = ["Ana", "Luis", "Carla", "Jorge", "Sofía"];

console.log("Lista de nombres:");
for (let i = 0; i < nombres.length; i++) {
    console.log(`  ${i + 1}. ${nombres[i]}`);
}
console.log(`Total de nombres: ${nombres.length}`);
console.log("");


// EJEMPLO AVANZADO: Recorrer arreglo con condición dentro
console.log("=== FOR - FILTRAR DATOS ===");
let edades = [15, 22, 18, 30, 12, 25, 17];

console.log("Personas mayores de edad (18+):");
for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
        console.log(`  Edad ${edades[i]} → es mayor de edad`);
    } else {
        console.log(`  Edad ${edades[i]} → es menor de edad`);
    }
}
console.log("");


// EJEMPLO ESPECIAL: for con paso diferente (i += 2 = salta de 2 en 2)
console.log("=== FOR - PASO PERSONALIZADO ===");
console.log("Números pares del 2 al 10:");
for (let i = 2; i <= 10; i += 2) {
    console.log(`  ${i}`);
}
console.log("");

//--------------------------------------------------------------------------------------------------

// 4.1 FOR...OF (Recorrer valores de un arreglo directamente)

// ¿QUÉ ES UN FOR...OF?
// Es una forma más moderna y limpia de recorrer arreglos. En lugar de usar índices,
// te da directamente el VALOR de cada elemento. Es ideal cuando NO necesitas el índice.

console.log("=== FOR...OF ===");

// Ejemplo 1: Recorrer nombres
let listaNombres = ["Ana", "Luis", "Carla", "Jorge", "Sofía"];
console.log("Lista de nombres:");
for (const nombre of listaNombres) {
    console.log(`  - ${nombre}`);
}
console.log("");

// Ejemplo 2: Recorrer números y sumarlos
let numerosLista = [10, 20, 30, 40, 50];
let suma = 0;
for (const num of numerosLista) {
    suma += num;
}
console.log(`Suma total: ${suma}`);
console.log("");

// Ejemplo 3: Filtrar mayores de edad
let listaEdades = [15, 22, 18, 30, 12, 25, 17];
console.log("Mayores de edad:");
for (const edad of listaEdades) {
    if (edad >= 18) {
        console.log(`  ${edad} → mayor de edad`);
    }
}
console.log("");

//--------------------------------------------------------------------------------------------------

// 4.2 FOR...IN (Recorrer índices o propiedades de un objeto)

// ¿QUÉ ES UN FOR...IN?
// Recorre las CLAVES (índices o propiedades) de un arreglo u objeto.
// Para arreglos, devuelve los índices (0, 1, 2...).
// Para objetos, devuelve los nombres de las propiedades.

console.log("=== FOR...IN ===");

// Ejemplo 1: Índices de un arreglo
let frutas = ["manzana", "banana", "naranja"];
console.log("Índices y valores:");
for (const indice in frutas) {
    console.log(`  Índice ${indice}: ${frutas[indice]}`);
}
console.log("");

// Ejemplo 2: Propiedades de un objeto
let persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Bogotá"
};
console.log("Propiedades de la persona:");
for (const propiedad in persona) {
    console.log(`  ${propiedad}: ${persona[propiedad]}`);
}
console.log("");

//--------------------------------------------------------------------------------------------------

// 4.3 FOR EACH (Método de arreglos, no es un bucle tradicional)

// ¿QUÉ ES EL FOR EACH?
// Es un MÉTODO de los arreglos (no una estructura de control como for o while).
// Recorre cada elemento y ejecuta una función (callback) por cada uno.
// Es muy usado en JavaScript moderno por su sintaxis limpia.

console.log("=== FOR EACH ===");

// Ejemplo 1: Imprimir cada nombre
let nombresForEach = ["Ana", "Luis", "Carla"];
nombresForEach.forEach(function (nombre) {
    console.log(`  Hola, ${nombre}`);
});
console.log("");

// Ejemplo 2: Con función flecha (más moderno)
let numerosForEach = [1, 2, 3, 4, 5];
numerosForEach.forEach(num => {
    console.log(`  Número: ${num}, cuadrado: ${num * num}`);
});
console.log("");

// Ejemplo 3: Con índice como segundo parámetro
let colores = ["rojo", "verde", "azul"];
colores.forEach((color, indice) => {
    console.log(`  ${indice + 1}. ${color}`);
});
console.log("");

//--------------------------------------------------------------------------------------------------

// 4.4 CONTROL DE BUCLES: break y continue

// ¿QUÉ SON BREAK Y CONTINUE?
// - break: sale COMPLETAMENTE del bucle (lo termina).
// - continue: salta a la SIGUIENTE iteración (ignora el resto del bloque).
// Son útiles para detener un bucle antes de tiempo o saltar casos específicos.

console.log("=== BREAK ===");

// Ejemplo: Detener el bucle al encontrar el número 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Encontré el 5, salgo del bucle");
        break;
    }
    console.log(`Número: ${i}`);
}
console.log("");

console.log("=== CONTINUE ===");

// Ejemplo: Saltar los números pares
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Salta a la siguiente iteración
    }
    console.log(`Número impar: ${i}`);
}
console.log("");

//--------------------------------------------------------------------------------------------------

// 4.5 BUCLES INFINITOS CON CONDICIÓN DE SALIDA

// ¿QUÉ ES UN BUCLE INFINITO CONTROLADO?
// Es un bucle que en teoría nunca terminaría (while(true)), pero que se detiene
// con un break cuando se cumple una condición. Es útil para menús o procesos
// que deben seguir hasta que el usuario decida salir.

console.log("=== BUCLE INFINITO CONTROLADO ===");

let opcionUsuario = 3; // Simulamos que el usuario elige salir
while (true) {
    console.log(`Procesando opción ${opcionUsuario}`);
    if (opcionUsuario === 3) {
        console.log("El usuario eligió salir. Terminando bucle.");
        break;
    }
    opcionUsuario++;
}
console.log("");

//--------------------------------------------------------------------------------------------------


// 5. COMBINANDO TODO: FizzBuzz (preparación)

console.log("=== PREPARACIÓN PARA FIZZBUZZ ===");
console.log("Reglas FizzBuzz:");
console.log("  - Si número es divisible por 15 → 'FizzBuzz'");
console.log("  - Si número es divisible por 3 → 'Fizz'");
console.log("  - Si número es divisible por 5 → 'Buzz'");
console.log("  - Si no → el número");
console.log("");

// Demostración de divisibilidad (lo que usaremos en FizzBuzz)
for (let num = 1; num <= 20; num++) {
    let divisiblePor3 = (num % 3 === 0);
    let divisiblePor5 = (num % 5 === 0);
    let divisiblePor15 = (num % 15 === 0);

    console.log(`Número ${num}: divisible por 3? ${divisiblePor3}, divisible por 5? ${divisiblePor5}, divisible por 15? ${divisiblePor15}`);
}
console.log("");


//--------------------------------------------------------------------------------------------------

// EJERCICIOS PROPUESTOS

console.log("=== EJERCICIOS PROPUESTOS ===");
console.log("");
console.log("1. Verifica si un número es positivo, negativo o cero.");
console.log("2. Verifica si una persona puede votar (edad >= 18).");
console.log("3. Muestra los números del 1 al 10 con un for.");
console.log("4. Muestra los números pares del 1 al 20.");
console.log("5. Determina si un número es par o impar con el operador ternario.");
console.log("6. Calcula el promedio de un arreglo de notas.");
console.log("7. Cuenta cuántos números mayores a 10 hay en un arreglo.");
console.log("8. Muestra la tabla de multiplicar de un número (del 1 al 10).");
console.log("9. Imprime los nombres de un arreglo en mayúsculas.");
console.log("10. Verifica si un número está entre 1 y 100 usando operadores lógicos.");
console.log("11. Dado un mes (1-12), muestra la estación del año con switch.");
console.log("12. Suma los números del 1 al 100 usando while.");
console.log("13. Encuentra el número mayor en un arreglo.");
console.log("14. Cuenta cuántos números pares e impares hay en un arreglo.");
console.log("15. Muestra los números del 1 al 50, saltando los múltiplos de 5 con continue.");
console.log("16. Muestra todos los divisores de un número.");
console.log("17. Simula un cajero automático con un menú de opciones (while + switch).");
console.log("18. Verifica si una palabra es palíndromo.");
console.log("19. Genera los primeros 10 números de Fibonacci.");
console.log("20. Recorre un objeto con for...in y muestra sus propiedades.");
console.log("21. Implementa FizzBuzz del 1 al 100 (Fizz, Buzz, FizzBuzz).");
console.log("22. Verifica si un número es primo.");
console.log("23. Encuentra el segundo número mayor en un arreglo.");
console.log("24. Calcula el factorial de un número usando while.");
console.log("25. Recorre un arreglo de productos y muestra solo los que tengan stock > 0.");
console.log("26. Crea un sistema de notas que muestre promedio, nota mayor, nota menor, aprobados y reprobados.");
console.log("27. Encuentra todos los números primos entre 1 y 100.");
console.log("28. Recorre un arreglo y suma los pares e impares por separado.");
console.log("29. Crea una pirámide de asteriscos con un for anidado.");
console.log("30. Simula un sistema de login con máximo 3 intentos.");
console.log("");


/*
PREGUNTAS SOBRE COMPARACIONES:
1. ¿Qué devuelve 10 > 5? → true
2. ¿Qué devuelve 10 % 3? → 1
3. ¿Cómo se pregunta si un número es divisible por 4? → numero % 4 === 0
4. ¿Cuál es la diferencia entre = y ===? → = asigna, === compara

PREGUNTAS SOBRE OPERADORES LÓGICOS:
5. ¿Qué devuelve true && false? → false
6. ¿Qué devuelve true || false? → true
7. ¿Para qué sirve el operador !? → Para invertir un valor booleano

PREGUNTAS SOBRE IF:
8. ¿Qué pasa si no pongo else? → El programa sigue sin hacer nada si la condición es false
9. ¿Para qué sirve else if? → Para evaluar múltiples condiciones en orden
10. ¿Qué es el operador ternario? → Una forma abreviada de if/else en una línea
11. ¿Cuándo usar switch en lugar de if/else? → Cuando comparas una variable contra muchos valores exactos

PREGUNTAS SOBRE WHILE:
12. ¿Qué es un bucle infinito y cómo se evita? → Cuando la condición nunca se vuelve false. Se evita actualizando la variable dentro del bucle
13. ¿Qué pasa si la condición empieza siendo false? → El bucle nunca se ejecuta
14. ¿Qué diferencia hay entre while y do...while? → do...while ejecuta el bloque AL MENOS UNA VEZ

PREGUNTAS SOBRE FOR:
15. ¿Cuáles son las 3 partes de un for? → inicialización; condición; actualización
16. ¿Por qué los arreglos empiezan en índice 0? → Convención en programación
17. ¿Cómo se recorre un arreglo al revés? → for (let i = nombres.length - 1; i >= 0; i--)
18. ¿Qué diferencia hay entre for...of y for...in? → for...of da valores, for...in da índices/claves
19. ¿Qué hace break y qué hace continue? → break sale del bucle, continue salta a la siguiente iteración

PREGUNTAS GENERALES:
20. ¿Cuándo usar while y cuándo for? → While cuando NO sabes cuántas vueltas. For cuando SABES cuántas (ej: recorrer arreglo)
21. ¿Qué control de flujo usarías para un menú que pide opción hasta que sea válida? → While
22. ¿Qué control de flujo usarías para mostrar los 10 primeros números? → For
*/