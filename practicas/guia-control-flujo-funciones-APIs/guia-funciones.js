// TEMAS: Funciones (Declaración, Expresión, Arrow, Parámetros, Return, Callbacks, Scope)
// INSTRUCCIÓN: Ejecuta cada sección por separado

//Recuerde lo siguiente:

//() — Parentesis
//[] — Corchetes (Brackets o Square Brackets)
//{} — Llaves (Curly Braces o Braces)
// | — Barra vertical (Pipe o Vertical Bar)
// ' — Comilla simple (Single Quote)
// " — Comilla doble (Double Quote)
// ` — Comilla invertida (Backtick o Grave Accent)

//--------------------------------------------------------------------------------------------------

// 1. ¿QUÉ ES UNA FUNCIÓN?

// Una función es un BLOQUE DE CÓDIGO REUTILIZABLE que realiza una tarea específica.
// En lugar de escribir el mismo código una y otra vez, lo encapsulas en una función
// y la llamas cuando la necesitas.

// VENTAJAS:
// - Reutilización: escribes una vez, usas muchas veces
// - Organización: el código queda más limpio y legible
// - Mantenimiento: si hay un error, lo corriges en un solo lugar
// - Abstracción: ocultas la complejidad detrás de un nombre descriptivo

// ESTRUCTURA BÁSICA:
// function nombreFuncion(parametros) {
//     // código a ejecutar
//     return resultado;
// }

console.log("=== ¿QUÉ ES UNA FUNCIÓN? ===");

// Sin función (código repetido)
let precio1 = 100;
let iva1 = precio1 * 0.19;
console.log(`Precio: $${precio1}, IVA: $${iva1}, Total: $${precio1 + iva1}`);

let precio2 = 250;
let iva2 = precio2 * 0.19;
console.log(`Precio: $${precio2}, IVA: $${iva2}, Total: $${precio2 + iva2}`);

// Con función (código reutilizable)
function calcularTotal(precio) {
    let iva = precio * 0.19;
    return precio + iva;
}

console.log(`Total con función: $${calcularTotal(100)}`);
console.log(`Total con función: $${calcularTotal(250)}`);
console.log("");

//--------------------------------------------------------------------------------------------------

// 2. DECLARACIÓN DE FUNCIÓN (Function Declaration)

// ¿QUÉ ES?
// Es la forma más tradicional de crear una función usando la palabra clave `function`
// seguida de un nombre. Se puede llamar ANTES de declararla (hoisting).

console.log("=== DECLARACIÓN DE FUNCIÓN ===");

// Ejemplo 1: Función simple sin parámetros
function saludar() {
    console.log("¡Hola, mundo!");
}
saludar(); // Llamada a la función

// Ejemplo 2: Función con parámetros
function saludarPersona(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
saludarPersona("Ana");
saludarPersona("Luis");

// Ejemplo 3: Función con múltiples parámetros
function sumar(a, b) {
    return a + b;
}
console.log("Suma 5 + 3 =", sumar(5, 3));
console.log("Suma 10 + 20 =", sumar(10, 20));

// Ejemplo 4: Hoisting (llamar antes de declarar)
console.log("Antes de declarar:", multiplicar(4, 5)); // Funciona gracias al hoisting

function multiplicar(a, b) {
    return a * b;
}
console.log("");

//--------------------------------------------------------------------------------------------------

// 3. EXPRESIÓN DE FUNCIÓN (Function Expression)

// ¿QUÉ ES?
// Es una función que se ASIGNA a una variable. NO tiene hoisting, por lo que
// debes declararla ANTES de usarla.

console.log("=== EXPRESIÓN DE FUNCIÓN ===");

// Ejemplo 1: Función anónima asignada a variable
const restar = function (a, b) {
    return a - b;
};
console.log("Resta 10 - 3 =", restar(10, 3));

// Ejemplo 2: Función con nombre (útil para debugging)
const dividir = function division(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
};
console.log("División 10 / 2 =", dividir(10, 2));
console.log("División 10 / 0 =", dividir(10, 0));

// Ejemplo 3: Diferencia con Function Declaration
// console.log(restarAntes(5, 3)); // ❌ ERROR: no existe antes de declarar

const restarAntes = function (a, b) {
    return a - b;
};
console.log("Resta después:", restarAntes(5, 3));
console.log("");

//--------------------------------------------------------------------------------------------------

// 4. FUNCIÓN FLECHA (Arrow Function)

// ¿QUÉ ES?
// Es una forma más moderna y corta de escribir funciones (ES6+).
// No tiene su propio `this`, por lo que es ideal para callbacks.

// SINTAXIS:
// const nombre = (parametros) => { return resultado; }
// const nombre = (parametros) => resultado;  // Retorno implícito

console.log("=== FUNCIÓN FLECHA ===");

// Ejemplo 1: Con cuerpo y return explícito
const sumarFlecha = (a, b) => {
    return a + b;
};
console.log("Suma flecha:", sumarFlecha(5, 3));

// Ejemplo 2: Retorno implícito (sin llaves)
const multiplicarFlecha = (a, b) => a * b;
console.log("Multiplicación flecha:", multiplicarFlecha(4, 5));

// Ejemplo 3: Un solo parámetro (sin paréntesis)
const cuadrado = x => x * x;
console.log("Cuadrado de 5:", cuadrado(5));

// Ejemplo 4: Sin parámetros
const obtenerFecha = () => new Date().toLocaleDateString();
console.log("Fecha actual:", obtenerFecha());

// Ejemplo 5: Retorno de objeto (necesita paréntesis)
const crearPersona = (nombre, edad) => ({ nombre, edad });
console.log("Persona:", crearPersona("Ana", 25));
console.log("");

//--------------------------------------------------------------------------------------------------

// 5. PARÁMETROS Y ARGUMENTOS

// ¿QUÉ SON?
// - Parámetros: variables declaradas en la definición de la función
// - Argumentos: valores reales que se pasan al llamar la función

console.log("=== PARÁMETROS Y ARGUMENTOS ===");

// Ejemplo 1: Parámetros por defecto
function saludarConEdad(nombre = "Invitado", edad = 0) {
    console.log(`Hola ${nombre}, tienes ${edad} años`);
}
saludarConEdad();                    // Usa valores por defecto
saludarConEdad("Ana");               // Solo nombre
saludarConEdad("Luis", 30);          // Ambos

// Ejemplo 2: Parámetro rest (...)
function sumarTodos(...numeros) {
    let total = 0;
    for (const num of numeros) {
        total += num;
    }
    return total;
}
console.log("Suma de 1,2,3:", sumarTodos(1, 2, 3));
console.log("Suma de 1,2,3,4,5:", sumarTodos(1, 2, 3, 4, 5));

// Ejemplo 3: Spread operator (...) para pasar arreglos
const numerosArray = [10, 20, 30];
console.log("Suma con spread:", sumarTodos(...numerosArray));

// Ejemplo 4: Objeto como parámetro (desestructuración)
function mostrarInfo({ nombre, edad, ciudad }) {
    console.log(`${nombre}, ${edad} años, vive en ${ciudad}`);
}
mostrarInfo({ nombre: "Ana", edad: 25, ciudad: "Bogotá" });
console.log("");

//--------------------------------------------------------------------------------------------------

// 6. RETURN (Devolver valores)

// ¿QUÉ ES?
// La palabra clave `return` termina la ejecución de la función y devuelve un valor.
// Si no se usa return, la función devuelve `undefined` por defecto.

console.log("=== RETURN ===");

// Ejemplo 1: Retorno de valor
function obtenerDoble(numero) {
    return numero * 2;
}
console.log("Doble de 5:", obtenerDoble(5));

// Ejemplo 2: Sin return (devuelve undefined)
function sinReturn() {
    console.log("Esta función no devuelve nada");
}
console.log("Resultado:", sinReturn());

// Ejemplo 3: Return termina la ejecución
function verificarEdad(edad) {
    if (edad < 0) {
        return "Edad no válida";
    }
    if (edad < 18) {
        return "Menor de edad";
    }
    return "Mayor de edad";
}
console.log(verificarEdad(-5));
console.log(verificarEdad(15));
console.log(verificarEdad(25));

// Ejemplo 4: Retorno de múltiples valores (usando objeto o array)
function dividirConResto(a, b) {
    const cociente = Math.floor(a / b);
    const resto = a % b;
    return { cociente, resto };
}
const resultado = dividirConResto(10, 3);
console.log(`Cociente: ${resultado.cociente}, Resto: ${resultado.resto}`);
console.log("");

//--------------------------------------------------------------------------------------------------

// 7. FUNCIONES COMO ARGUMENTOS (Callbacks)

// ¿QUÉ ES UN CALLBACK?
// Es una función que se pasa como argumento a otra función, para que sea ejecutada
// después (o en algún momento específico). Es la base de la programación asíncrona.

console.log("=== CALLBACKS ===");

// Ejemplo 1: Callback simple
function ejecutarCallback(callback) {
    console.log("Antes del callback");
    callback();
    console.log("Después del callback");
}

ejecutarCallback(function () {
    console.log("¡Soy el callback!");
});

// Ejemplo 2: Callback con parámetros
function procesarNumero(numero, operacion) {
    return operacion(numero);
}

const doble = x => x * 2;
const mitad = x => x / 2;

console.log("Doble de 10:", procesarNumero(10, doble));
console.log("Mitad de 10:", procesarNumero(10, mitad));

// Ejemplo 3: Callback en métodos de array
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(n => n * 2);
console.log("Original:", numeros);
console.log("Duplicados:", duplicados);

const pares = numeros.filter(n => n % 2 === 0);
console.log("Pares:", pares);

const sumaTotal = numeros.reduce((acc, n) => acc + n, 0);
console.log("Suma total:", sumaTotal);
console.log("");

//--------------------------------------------------------------------------------------------------

// 8. FUNCIÓN QUE DEVUELVE FUNCIÓN (Closures)

// ¿QUÉ ES UN CLOSURE?
// Es una función que "recuerda" el entorno donde fue creada, incluso después de
// que la función exterior haya terminado. Permite crear funciones con estado privado.

console.log("=== CLOSURES ===");

// Ejemplo 1: Contador con estado privado
function crearContador() {
    let contador = 0;
    return function () {
        contador++;
        return contador;
    };
}

const miContador = crearContador();
console.log(miContador()); // 1
console.log(miContador()); // 2
console.log(miContador()); // 3

// Ejemplo 2: Multiplicador personalizado
function crearMultiplicador(factor) {
    return function (numero) {
        return numero * factor;
    };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log("Duplicar 5:", duplicar(5));
console.log("Triplicar 5:", triplicar(5));

// Ejemplo 3: Saludador personalizado
function crearSaludo(saludo) {
    return function (nombre) {
        return `${saludo}, ${nombre}!`;
    };
}

const saludoFormal = crearSaludo("Buenos días");
const saludoInformal = crearSaludo("Qué más");

console.log(saludoFormal("Señor García"));
console.log(saludoInformal("Ana"));
console.log("");

//--------------------------------------------------------------------------------------------------

// 9. FUNCIONES ASÍNCRONAS (async/await)

// ¿QUÉ ES UNA FUNCIÓN ASÍNCRONA?
// Es una función que puede "pausar" su ejecución con `await` hasta que una
// operación asíncrona (como una petición HTTP) termine. Siempre devuelve una Promesa.

console.log("=== FUNCIONES ASÍNCRONAS ===");

// Ejemplo 1: Función async básica
async function obtenerMensaje() {
    return "Hola desde async";
}

obtenerMensaje().then(mensaje => console.log(mensaje));

// Ejemplo 2: Simular una operación asíncrona con setTimeout
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function procesoConEspera() {
    console.log("Inicio");
    await esperar(1000);
    console.log("Después de 1 segundo");
    await esperar(1000);
    console.log("Después de 2 segundos");
}

// procesoConEspera(); // Descomentar para ejecutar

// Ejemplo 3: Manejo de errores con try/catch
async function dividirSeguro(a, b) {
    try {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

// dividirSeguro(10, 2).then(r => console.log("Resultado:", r));
// dividirSeguro(10, 0).then(r => console.log("Resultado:", r));
console.log("");

//--------------------------------------------------------------------------------------------------

// 10. SCOPE (Ámbito de las variables)

// ¿QUÉ ES EL SCOPE?
// Es el "alcance" que tiene una variable. Determina desde dónde se puede acceder a ella.
// - Scope global: accesible desde cualquier parte del código
// - Scope local: accesible solo dentro de la función donde se declara
// - Scope de bloque: accesible solo dentro de {} (con let y const)

console.log("=== SCOPE ===");

// Ejemplo 1: Variable global
let variableGlobal = "Soy global";

function mostrarGlobal() {
    console.log(variableGlobal); // ✅ Accesible
}
mostrarGlobal();

// Ejemplo 2: Variable local
function mostrarLocal() {
    let variableLocal = "Soy local";
    console.log(variableLocal); // ✅ Accesible dentro
}
mostrarLocal();
// console.log(variableLocal); // ❌ ERROR: no existe fuera

// Ejemplo 3: Scope de bloque
if (true) {
    let variableBloque = "Soy de bloque";
    const constanteBloque = "También de bloque";
    console.log(variableBloque);    // ✅ Accesible
    console.log(constanteBloque);   // ✅ Accesible
}
// console.log(variableBloque);    // ❌ ERROR: no existe fuera del bloque

// Ejemplo 4: var vs let (var NO respeta scope de bloque)
if (true) {
    var variableVar = "Soy var";
    let variableLet = "Soy let";
}
console.log(variableVar);   // ✅ Funciona (var no respeta bloque)
// console.log(variableLet); // ❌ ERROR (let sí respeta bloque)

// Ejemplo 5: Función dentro de función
function exterior() {
    let mensajeExterior = "Exterior";

    function interior() {
        let mensajeInterior = "Interior";
        console.log(mensajeExterior); // ✅ Accesible (closure)
        console.log(mensajeInterior); // ✅ Accesible
    }

    interior();
    // console.log(mensajeInterior); // ❌ ERROR
}
exterior();
console.log("");

//--------------------------------------------------------------------------------------------------

// 11. FUNCIONES PURAS vs IMPURAS

// ¿QUÉ ES UNA FUNCIÓN PURA?
// - Pura: siempre devuelve el mismo resultado para los mismos argumentos,
//   y NO modifica nada fuera de ella (sin efectos secundarios).
// - Impura: puede modificar variables externas o depender de ellas.

console.log("=== FUNCIONES PURAS vs IMPURAS ===");

// Función pura
function sumarPuro(a, b) {
    return a + b; // No modifica nada externo
}
console.log("Pura:", sumarPuro(2, 3)); // Siempre 5
console.log("Pura:", sumarPuro(2, 3)); // Siempre 5

// Función impura (modifica variable externa)
let contadorGlobal = 0;
function incrementarImpura() {
    contadorGlobal++; // Modifica algo externo
    return contadorGlobal;
}
console.log("Impura:", incrementarImpura()); // 1
console.log("Impura:", incrementarImpura()); // 2 (depende del estado)

// Función impura (depende de algo externo)
function obtenerHoraImpura() {
    return new Date().toLocaleTimeString(); // Depende de la hora actual
}
console.log("Impura:", obtenerHoraImpura()); // Cambia cada vez
console.log("");

//--------------------------------------------------------------------------------------------------

// 12. RECURSIVIDAD

// ¿QUÉ ES LA RECURSIVIDAD?
// Es cuando una función se llama a sí misma para resolver un problema.
// Siempre debe haber un CASO BASE que detenga la recursión, sino se crea
// un bucle infinito (stack overflow).

console.log("=== RECURSIVIDAD ===");

// Ejemplo 1: Factorial
function factorial(n) {
    if (n <= 1) return 1; // Caso base
    return n * factorial(n - 1); // Llamada recursiva
}
console.log("Factorial de 5:", factorial(5)); // 120

// Ejemplo 2: Fibonacci
function fibonacci(n) {
    if (n <= 1) return n; // Caso base
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci de 7:", fibonacci(7)); // 13

// Ejemplo 3: Cuenta regresiva
function cuentaRegresiva(n) {
    if (n < 0) return; // Caso base
    console.log(n);
    cuentaRegresiva(n - 1);
}
cuentaRegresiva(5);
console.log("");

//--------------------------------------------------------------------------------------------------

// 13. DIFERENCIAS CLAVE ENTRE TIPOS DE FUNCIONES

console.log("=== RESUMEN DE TIPOS DE FUNCIONES ===");
console.log("");
console.log("1. Declaración:      function suma(a, b) { return a + b; }");
console.log("   - Tiene hoisting (se puede llamar antes)");
console.log("");
console.log("2. Expresión:        const suma = function(a, b) { return a + b; };");
console.log("   - NO tiene hoisting");
console.log("");
console.log("3. Arrow function:   const suma = (a, b) => a + b;");
console.log("   - Más corta, no tiene su propio this");
console.log("   - Ideal para callbacks");
console.log("");
console.log("4. Función async:    async function suma(a, b) { return a + b; }");
console.log("   - Devuelve una Promesa");
console.log("   - Permite usar await dentro");
console.log("");

//--------------------------------------------------------------------------------------------------

// 14. EJEMPLO PRÁCTICO: Sistema de Envíos (LogiTrack)

console.log("=== EJEMPLO PRÁCTICO: LOGITRACK ===");

// Datos de envíos
const envios = [
    { id: 1, origen: "Bogotá", destino: "Medellín", peso: 5, estado: "pendiente" },
    { id: 2, origen: "Cali", destino: "Barranquilla", peso: 12, estado: "en camino" },
    { id: 3, origen: "Medellín", destino: "Cartagena", peso: 8, estado: "entregado" }
];

// Función pura: calcular costo según peso
function calcularCosto(peso) {
    const tarifaBase = 10000;
    const costoPorKg = 2000;
    return tarifaBase + (peso * costoPorKg);
}

// Función que usa callback: filtrar por estado
function filtrarPorEstado(lista, estado) {
    return lista.filter(envio => envio.estado === estado);
}

// Función que devuelve función: crear reporte
function crearReporte(titulo) {
    return function (envios) {
        console.log(`--- ${titulo} ---`);
        envios.forEach(envio => {
            const costo = calcularCosto(envio.peso);
            console.log(`Envío #${envio.id}: ${envio.origen} → ${envio.destino}`);
            console.log(`  Peso: ${envio.peso}kg, Costo: $${costo}, Estado: ${envio.estado}`);
        });
    };
}

// Usar las funciones
const reporteGeneral = crearReporte("Reporte General de Envíos");
reporteGeneral(envios);

console.log("");
const pendientes = filtrarPorEstado(envios, "pendiente");
const reportePendientes = crearReporte("Envíos Pendientes");
reportePendientes(pendientes);

console.log("");
const entregados = filtrarPorEstado(envios, "entregado");
console.log(`Total de envíos entregados: ${entregados.length}`);
console.log(`Costo total de entregados: $${entregados.reduce((sum, e) => sum + calcularCosto(e.peso), 0)}`);
console.log("");

//--------------------------------------------------------------------------------------------------

// 15. EJERCICIOS PROPUESTOS

console.log("=== EJERCICIOS PROPUESTOS ===");
console.log("");
console.log("1. Crea una función que reciba un nombre y devuelva un saludo personalizado.");
console.log("2. Crea una función flecha que calcule el área de un rectángulo (base * altura).");
console.log("3. Crea una función que reciba un arreglo de números y devuelva solo los pares.");
console.log("4. Crea una función que use un callback para ejecutar una operación matemática.");
console.log("5. Crea una función con closure que simule un cajero automático (saldo privado).");
console.log("6. Crea una función recursiva que cuente cuántos dígitos tiene un número.");
console.log("7. Crea una función async que simule la carga de datos de un envío.");
console.log("8. Crea una función pura que determine si un número es primo.");
console.log("9. Crea una función que reciba un objeto envío y devuelva un string formateado.");
console.log("10. Crea una función que use spread para sumar cualquier cantidad de números.");
console.log("");

//--------------------------------------------------------------------------------------------------

/*

PREGUNTAS SOBRE FUNCIONES BÁSICAS:

1. ¿Qué es una función? → Un bloque de código reutilizable que realiza una tarea
2. ¿Cuál es la diferencia entre parámetro y argumento?
   → Parámetro: variable en la definición. Argumento: valor al llamar
3. ¿Qué pasa si no uso return? → La función devuelve undefined
4. ¿Qué es el hoisting? → Poder llamar a una función antes de declararla

PREGUNTAS SOBRE TIPOS DE FUNCIONES:

5. ¿Diferencia entre declaración y expresión de función?
   → Declaración tiene hoisting, expresión no
6. ¿Qué es una arrow function? → Forma corta de escribir funciones (=>)
7. ¿Qué diferencia hay entre función normal y arrow function?
   → Arrow no tiene su propio this
8. ¿Cuándo usar una función async? → Cuando necesitas usar await dentro

PREGUNTAS SOBRE PARÁMETROS:

9. ¿Qué es un parámetro por defecto? → Valor que se usa si no se pasa argumento
10. ¿Para qué sirve el operador rest (...)? → Para recibir múltiples argumentos como arreglo
11. ¿Para qué sirve el spread (...)? → Para expandir un arreglo en argumentos

PREGUNTAS SOBRE CALLBACKS Y CLOSURES:

12. ¿Qué es un callback? → Una función que se pasa como argumento a otra función
13. ¿Qué es un closure? → Una función que recuerda el entorno donde fue creada
14. ¿Para qué sirven los closures? → Para crear estado privado y funciones personalizadas

PREGUNTAS SOBRE SCOPE:

15. ¿Qué es el scope? → El alcance o ámbito de una variable
16. ¿Diferencia entre var, let y const en scope?
   → var no respeta bloque, let y const sí
17. ¿Qué es una variable global? → Accesible desde cualquier parte del código
18. ¿Qué es una variable local? → Accesible solo dentro de la función

PREGUNTAS SOBRE CONCEPTOS AVANZADOS:

19. ¿Qué es una función pura? → Siempre devuelve lo mismo y no modifica nada externo
20. ¿Qué es una función impura? → Modifica algo externo o depende de algo externo
21. ¿Qué es recursividad? → Cuando una función se llama a sí misma
22. ¿Qué es el caso base en recursividad? → La condición que detiene la recursión
23. ¿Qué pasa si no hay caso base? → Stack overflow (desbordamiento de pila)

PREGUNTAS GENERALES:

24. ¿Cuándo usar función declarada vs expresión?
   → Declaración si necesitas hoisting, expresión si quieres asignarla a variable
25. ¿Cuándo usar arrow function? → Para callbacks cortos y funciones simples
26. ¿Cuándo usar función async? → Para operaciones que tardan (HTTP, archivos, etc.)
27. ¿Por qué son importantes las funciones? → Reutilización, organización y mantenibilidad
28. ¿Qué es un efecto secundario? → Modificar algo fuera de la función

*/