// TEMAS: APIs, JSON, HTTP, Promesas, fetch, async/await, curl, GET y POST
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

// 1. ¿QUÉ ES UNA API?

// API significa Application Programming Interface (Interfaz de Programación de Aplicaciones).
// Es un CONTRATO que permite que dos programas se comuniquen entre sí.
// Una API define:
//   - Qué solicitudes se pueden hacer
//   - Cómo hacerlas (URL, método HTTP, parámetros)
//   - Qué respuestas se recibirán

// ANALOGÍA: Una API es como un mesero en un restaurante.
//   - Tú (cliente) no entras a la cocina (servidor)
//   - Le pides al mesero (API) lo que quieres
//   - El mesero va a la cocina, pide tu plato y te lo trae
//   - Tú no necesitas saber cómo se cocinó

console.log("=== ¿QUÉ ES UNA API? ===");
console.log("Una API es un intermediario que permite que dos programas se comuniquen.");
console.log("");

//--------------------------------------------------------------------------------------------------

// 1.1 CONSUMIR vs CREAR UNA API

// Es MUY IMPORTANTE entender esta diferencia:

// CONSUMIR una API:
//   - Usas una API que YA EXISTE (creada por otros)
//   - Solo haces solicitudes (fetch, curl)
//   - Recibes datos y los usas en tu código
//   - NO te preocupas por el servidor ni la base de datos
//   - Ejemplo: pedir un personaje a la API de Rick and Morty

// CREAR una API:
//   - Construyes tu propio servidor
//   - Defines los endpoints (rutas)
//   - Escribes la lógica que responde a las solicitudes
//   - Administras la base de datos
//   - Ejemplo: crear tu propio backend con Spring Boot

// EN ESTA GUÍA VAMOS A CONSUMIR APIs, NO A CREARLAS.
// Cuando escribas fetch("https://rickandmortyapi.com/api/character/1"),
// no estás creando la API de Rick and Morty, ¡la estás usando!

console.log("=== CONSUMIR vs CREAR UNA API ===");
console.log("Consumir: usar una API existente (lo que haremos en esta guía)");
console.log("Crear: construir tu propio servidor (lo haremos más adelante)");
console.log("");

//--------------------------------------------------------------------------------------------------

// 2. ¿QUÉ ES REST?

// REST (Representational State Transfer) es un ESTILO ARQUITECTÓNICO para diseñar APIs.
// Una API REST:
//   - Usa URLs para identificar recursos (ej: /personajes, /usuarios)
//   - Usa métodos HTTP para indicar la acción (GET, POST, PUT, DELETE)
//   - Devuelve datos en formato JSON (generalmente)
//   - No guarda estado entre solicitudes (stateless)

// EJEMPLO DE URL REST:
// https://rickandmortyapi.com/api/character/1
//    └── dominio         └── recurso  └── ID

console.log("=== ¿QUÉ ES REST? ===");
console.log("REST es un estilo para diseñar APIs usando URLs y métodos HTTP.");
console.log("");

//--------------------------------------------------------------------------------------------------

// 3. ¿QUÉ ES JSON?

// JSON (JavaScript Object Notation) es un FORMATO DE TEXTO para representar datos.
// Es el formato estándar que usan las APIs para enviar y recibir información.
// Aunque su nombre dice "JavaScript", es un formato independiente del lenguaje.

// ESTRUCTURA:
// {
//     "clave": "valor",
//     "numero": 123,
//     "booleano": true,
//     "arreglo": [1, 2, 3],
//     "objeto": { "subclave": "subvalor" }
// }

console.log("=== ¿QUÉ ES JSON? ===");
console.log("JSON es un formato de texto para intercambiar datos entre programas.");
console.log("");

// Ejemplo de objeto JavaScript (no es JSON todavía)
const personaje = {
    id: 1,
    nombre: "Rick Sanchez",
    especie: "Humano",
    vivo: true,
    episodios: ["S01E01", "S01E02"]
};

// Convertir a JSON (texto)
const personajeJSON = JSON.stringify(personaje);
console.log("Objeto JavaScript:", personaje);
console.log("Convertido a JSON:", personajeJSON);

// Convertir de JSON (texto) a objeto
const personajeObjeto = JSON.parse(personajeJSON);
console.log("JSON parseado:", personajeObjeto);
console.log("");

//--------------------------------------------------------------------------------------------------

// 4. MÉTODOS HTTP

// Los métodos HTTP indican QUÉ ACCIÓN queremos realizar sobre un recurso.
// Los más comunes son:

// GET     → Obtener datos (leer)
// POST    → Enviar datos nuevos (crear)
// PUT     → Actualizar un recurso existente
// DELETE  → Eliminar un recurso

// En esta guía nos enfocaremos en GET y POST.

console.log("=== MÉTODOS HTTP ===");
console.log("GET     → Obtener datos");
console.log("POST    → Enviar datos nuevos");
console.log("PUT     → Actualizar datos existentes");
console.log("DELETE  → Eliminar datos");
console.log("");

//--------------------------------------------------------------------------------------------------

// 5. CÓDIGOS DE ESTADO HTTP

// Los códigos de estado indican si la solicitud fue exitosa o no.
// Los más comunes son:

// 200 → OK (todo salió bien)
// 201 → Created (se creó un recurso nuevo)
// 400 → Bad Request (la solicitud está mal)
// 401 → Unauthorized (no autorizado)
// 404 → Not Found (no se encontró el recurso)
// 500 → Internal Server Error (error del servidor)

console.log("=== CÓDIGOS DE ESTADO HTTP ===");
console.log("200 → OK");
console.log("201 → Created");
console.log("400 → Bad Request");
console.log("401 → Unauthorized");
console.log("404 → Not Found");
console.log("500 → Internal Server Error");
console.log("");

//--------------------------------------------------------------------------------------------------

// 6. ¿QUÉ ES UNA PROMESA?

// Una PROMESA es un OBJETO que representa un valor que estará disponible
// AHORA, DESPUÉS o NUNCA. Es la forma que tiene JavaScript de manejar
// operaciones asíncronas (que tardan tiempo).

// ¿POR QUÉ EXISTEN?
// Imagina que pides una pizza a domicilio:
//   - No la recibes inmediatamente
//   - Te dan un "recibo" (promesa) que representa la pizza futura
//   - Cuando llegue, podrás comerla (resolver)
//   - Si hay un problema, te avisan (rechazar)

// OPERACIONES ASÍNCRONAS COMUNES:
//   - Hacer una solicitud HTTP (fetch)
//   - Leer un archivo
//   - Consultar una base de datos
//   - Esperar un temporizador (setTimeout)

console.log("=== ¿QUÉ ES UNA PROMESA? ===");
console.log("Una promesa es un objeto que representa un valor futuro.");
console.log("");

//--------------------------------------------------------------------------------------------------

// 7. ESTADOS DE UNA PROMESA

// Una promesa tiene 3 estados posibles:

// 1. PENDING (pendiente)   → Todavía no se resuelve
// 2. FULFILLED (cumplida)  → Se resolvió con éxito (tiene un valor)
// 3. REJECTED (rechazada)  → Ocurrió un error (tiene un motivo)

// Una promesa SOLO puede cambiar de estado UNA VEZ:
//   - Pending → Fulfilled
//   - Pending → Rejected
// Una vez que cambia, NO puede cambiar de nuevo.

console.log("=== ESTADOS DE UNA PROMESA ===");
console.log("1. Pending   → Esperando");
console.log("2. Fulfilled → Éxito");
console.log("3. Rejected  → Error");
console.log("");

//--------------------------------------------------------------------------------------------------

// 8. CREAR UNA PROMESA MANUALMENTE

// Se usa el constructor `new Promise()`, que recibe una función con DOS parámetros:
//   - resolve: función que se llama cuando la operación tiene éxito
//   - reject: función que se llama cuando la operación falla

console.log("=== CREAR UNA PROMESA ===");

// Ejemplo 1: Promesa que se resuelve (éxito)
const promesaExitosa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("¡Todo salió bien!");
    }, 2000);
});

console.log("Promesa creada. Esperando...");

// Ejemplo 2: Promesa que se rechaza (error)
const promesaFallida = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Algo salió mal");
    }, 2000);
});

// Ejemplo 3: Promesa que simula una solicitud HTTP
function simularSolicitud(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve({ status: 200, data: "Datos obtenidos" });
            } else {
                reject({ status: 500, error: "Error del servidor" });
            }
        }, 1500);
    });
}

console.log("Promesa de solicitud creada.");
console.log("");

//--------------------------------------------------------------------------------------------------

// 9. CONSUMIR PROMESAS CON .then() y .catch()

// Para obtener el resultado de una promesa se usan:
//   - .then(valor => {}) → Se ejecuta cuando la promesa se RESUELVE
//   - .catch(error => {}) → Se ejecuta cuando la promesa se RECHAZA
//   - .finally(() => {}) → Se ejecuta SIEMPRE (éxito o error)

console.log("=== .then() y .catch() ===");

// Ejemplo 1: Consumir promesa exitosa
promesaExitosa
    .then(resultado => {
        console.log("Éxito:", resultado);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Promesa finalizada");
    });

// Ejemplo 2: Consumir promesa fallida
promesaFallida
    .then(resultado => {
        console.log("Esto no se ejecutará");
    })
    .catch(error => {
        console.log("Error capturado:", error);
    });

// Ejemplo 3: Encadenar .then()
simularSolicitud(true)
    .then(respuesta => {
        console.log("Respuesta recibida:", respuesta);
        return respuesta.data;
    })
    .then(datos => {
        console.log("Datos procesados:", datos);
    })
    .catch(error => {
        console.log("Error:", error);
    });
console.log("");

//--------------------------------------------------------------------------------------------------

// 10. CONSUMIR PROMESAS CON async/await

// `async/await` es una forma más moderna y legible de trabajar con promesas.
// Es equivalente a .then()/.catch(), pero escrito de forma más parecida al código síncrono.

// REGLAS:
//   - `async` se pone antes de la función
//   - `await` se pone antes de la promesa que queremos esperar
//   - `await` SOLO puede usarse dentro de una función `async`
//   - Para manejar errores se usa try/catch

console.log("=== async/await ===");

// Ejemplo 1: Función async básica
async function consumirPromesa() {
    try {
        const resultado = await promesaExitosa;
        console.log("Resultado con await:", resultado);
    } catch (error) {
        console.log("Error con await:", error);
    }
}

// consumirPromesa(); // Descomentar para ejecutar

// Ejemplo 2: Con la simulación de solicitud
async function consumirSolicitud() {
    try {
        const respuesta = await simularSolicitud(true);
        console.log("Respuesta:", respuesta);
        console.log("Datos:", respuesta.data);
    } catch (error) {
        console.log("Error:", error);
    }
}

// consumirSolicitud(); // Descomentar para ejecutar

// Ejemplo 3: Comparación directa
// .then()                                  |  async/await
// fetch(url).then(r => r.json())           |  const r = await fetch(url)
//   .then(d => console.log(d))             |  const d = await r.json()
//   .catch(e => console.log(e));           |  console.log(d)
//                                          |  (con try/catch alrededor)

console.log("");

//--------------------------------------------------------------------------------------------------

// 11. fetch DEVUELVE UNA PROMESA

// La función `fetch()` es la forma nativa de JavaScript para hacer solicitudes HTTP.
// **fetch() SIEMPRE devuelve una promesa.** Por eso se puede usar con `.then()` o con `await`.

console.log("=== fetch DEVUELVE UNA PROMESA ===");

// Así se ve una solicitud con .then()
console.log("Sintaxis con .then():");
console.log("fetch(url).then(res => res.json()).then(data => console.log(data));");
console.log("");

// Así se ve la misma solicitud con async/await
console.log("Sintaxis con async/await:");
console.log("const res = await fetch(url);");
console.log("const data = await res.json();");
console.log("console.log(data);");
console.log("");

//--------------------------------------------------------------------------------------------------

// 12. CONSUMIR UNA API CON .then()

// Vamos a consumir la API de Rick and Morty usando .then()

console.log("=== API RICK AND MORTY CON .then() ===");

// URL base: https://rickandmortyapi.com/api
// Endpoints:
//   /character  → Todos los personajes
//   /character/1 → Personaje con ID 1
//   /location   → Todas las ubicaciones
//   /episode    → Todos los episodios

const URL_RICK_MORTY = "https://rickandmortyapi.com/api/character/1";

// Solicitud con .then()
fetch(URL_RICK_MORTY)
    .then(respuesta => respuesta.json())   // Convertir la respuesta a JSON
    .then(personaje => {
        console.log("Nombre:", personaje.name);
        console.log("Especie:", personaje.species);
        console.log("Estado:", personaje.status);
        console.log("Imagen:", personaje.image);
    })
    .catch(error => {
        console.error("Error:", error);
    });
console.log("");

//--------------------------------------------------------------------------------------------------

// 13. CONSUMIR UNA API CON async/await

// La misma solicitud, pero con async/await

console.log("=== API RICK AND MORTY CON async/await ===");

async function obtenerPersonaje(id) {
    try {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const personaje = await respuesta.json();

        console.log(`Personaje #${id}:`);
        console.log("  Nombre:", personaje.name);
        console.log("  Especie:", personaje.species);
        console.log("  Estado:", personaje.status);

        return personaje;
    } catch (error) {
        console.error("Error al obtener el personaje:", error);
    }
}

// obtenerPersonaje(1);
// obtenerPersonaje(2);
console.log("");

//--------------------------------------------------------------------------------------------------

// 14. CONSUMIR LA API DE LOS SIMPSONS

// API de Los Simpsons: https://thesimpsonsapi.com/api
// Esta API está ACTIVA y es oficial.
// Endpoints:
//   /api/characters      → Lista de personajes (paginada, 20 por página)
//   /api/characters/1    → Personaje por ID (Homer Simpson)
//   /api/episodes        → Lista de episodios
//   /api/locations       → Lista de ubicaciones

// IMPORTANTE: La API devuelve un objeto con la propiedad `results`.
// Para la imagen, se concatena: https://thesimpsonsapi.com + portrait_path

console.log("=== API DE LOS SIMPSONS ===");

async function obtenerPersonajeSimpsons(id) {
    try {
        const respuesta = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`);

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const personaje = await respuesta.json();

        console.log(`Personaje #${id}:`);
        console.log("  Nombre:", personaje.name);
        console.log("  Edad:", personaje.age);
        console.log("  Ocupación:", personaje.occupation);
        console.log("  Estado:", personaje.status);
        console.log("  Frases:", personaje.phrases);
        console.log("  Imagen:", `https://thesimpsonsapi.com${personaje.portrait_path}`);

        return personaje;
    } catch (error) {
        console.error("Error al obtener el personaje:", error);
    }
}

// obtenerPersonajeSimpsons(1); // Homer Simpson
console.log("");

// Ejemplo: obtener varios personajes
async function obtenerVariosPersonajesSimpsons() {
    try {
        const respuesta = await fetch("https://thesimpsonsapi.com/api/characters");
        const datos = await respuesta.json();

        // La API devuelve { count, pages, results: [...] }
        const personajes = datos.results;

        console.log("Primeros 5 personajes de Springfield:");
        personajes.slice(0, 5).forEach((p, i) => {
            console.log(`  ${i + 1}. ${p.name} (${p.occupation})`);
        });

        return personajes;
    } catch (error) {
        console.error("Error:", error);
    }
}

// obtenerVariosPersonajesSimpsons();
console.log("");

//--------------------------------------------------------------------------------------------------

// 15. RECORRER ARREGLOS DE RESULTADOS

// Muchas APIs devuelven arreglos de resultados. Vamos a recorrerlos con forEach y map.

console.log("=== RECORRER ARREGLOS DE RESULTADOS ===");

async function obtenerVariosPersonajes() {
    try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");
        const datos = await respuesta.json();

        // La API devuelve { info: {...}, results: [...] }
        const personajes = datos.results;

        console.log(`Total de personajes: ${datos.info.count}`);
        console.log("");
        console.log("Primeros 5 personajes:");

        // forEach: recorrer y ejecutar algo por cada uno
        personajes.slice(0, 5).forEach((personaje, indice) => {
            console.log(`  ${indice + 1}. ${personaje.name} (${personaje.species})`);
        });

        // map: crear un nuevo arreglo transformado
        const nombres = personajes.map(p => p.name);
        console.log("");
        console.log("Arreglo de nombres:", nombres.slice(0, 5));

        return personajes;
    } catch (error) {
        console.error("Error:", error);
    }
}

// obtenerVariosPersonajes();
console.log("");

//--------------------------------------------------------------------------------------------------

// 16. FILTRAR RESULTADOS

// El método `filter()` permite quedarse solo con los elementos que cumplen una condición.

console.log("=== FILTRAR RESULTADOS ===");

async function filtrarPersonajes() {
    try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");
        const datos = await respuesta.json();

        // Filtrar solo los humanos
        const humanos = datos.results.filter(p => p.species === "Human");
        console.log(`Humanos encontrados: ${humanos.length}`);

        // Filtrar los que están vivos
        const vivos = datos.results.filter(p => p.status === "Alive");
        console.log(`Personajes vivos: ${vivos.length}`);

        // Filtrar por dos condiciones
        const humanosVivos = datos.results.filter(
            p => p.species === "Human" && p.status === "Alive"
        );
        console.log(`Humanos vivos: ${humanosVivos.length}`);

        return humanosVivos;
    } catch (error) {
        console.error("Error:", error);
    }
}

// filtrarPersonajes();
console.log("");

//--------------------------------------------------------------------------------------------------

// 17. MANEJO DE ERRORES

// En solicitudes HTTP pueden ocurrir varios tipos de errores:
//   - Error de red (no hay internet, servidor caído)
//   - Error HTTP (404, 500, etc.)
//   - Error al parsear JSON

// fetch NO lanza error automáticamente en códigos 4xx o 5xx.
// Hay que verificar `respuesta.ok` manualmente.

console.log("=== MANEJO DE ERRORES ===");

async function obtenerConManejoDeErrores(url) {
    try {
        const respuesta = await fetch(url);

        // Verificar si la respuesta fue exitosa
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status} - ${respuesta.statusText}`);
        }

        const datos = await respuesta.json();
        return datos;

    } catch (error) {
        // Captura errores de red, de HTTP o de JSON
        console.error("Error capturado:", error.message);
        return null;
    }
}

// Ejemplo 1: URL válida
// obtenerConManejoDeErrores("https://rickandmortyapi.com/api/character/1");

// Ejemplo 2: URL inválida (404)
// obtenerConManejoDeErrores("https://rickandmortyapi.com/api/character/9999");

// Ejemplo 3: URL mal escrita
// obtenerConManejoDeErrores("https://rickandmortyapi.com/api/noexiste");
console.log("");

//--------------------------------------------------------------------------------------------------

// 18. PROMISE.ALL() Y PROMISE.RACE()

// Promise.all()   → Espera a que TODAS las promesas se resuelvan
// Promise.race()  → Espera a que la PRIMERA promesa se resuelva

console.log("=== Promise.all() ===");

async function obtenerMultiplesPersonajes() {
    try {
        const promesas = [
            fetch("https://rickandmortyapi.com/api/character/1").then(r => r.json()),
            fetch("https://rickandmortyapi.com/api/character/2").then(r => r.json()),
            fetch("https://rickandmortyapi.com/api/character/3").then(r => r.json())
        ];

        const personajes = await Promise.all(promesas);

        console.log("Personajes obtenidos al mismo tiempo:");
        personajes.forEach(p => console.log(`  - ${p.name}`));

        return personajes;
    } catch (error) {
        console.error("Error:", error);
    }
}

// obtenerMultiplesPersonajes();
console.log("");

console.log("=== Promise.race() ===");

async function primerResultado() {
    try {
        const promesas = [
            fetch("https://rickandmortyapi.com/api/character/1").then(r => r.json()),
            fetch("https://rickandmortyapi.com/api/character/2").then(r => r.json())
        ];

        const primero = await Promise.race(promesas);
        console.log("Primer personaje en responder:", primero.name);

        return primero;
    } catch (error) {
        console.error("Error:", error);
    }
}

// primerResultado();
console.log("");

//--------------------------------------------------------------------------------------------------

// 19. POST (Explicación Conceptual)

// POST se usa para ENVIAR DATOS al servidor, generalmente para CREAR un recurso nuevo.
// A diferencia de GET (que solo lee), POST modifica el estado del servidor.

// SINTAXIS DE fetch CON POST:
// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ clave: 'valor' })
// });

// PARTES IMPORTANTES:
//   - method: 'POST'          → Indica que es una solicitud POST
//   - headers                 → Metadatos de la solicitud
//   - Content-Type            → Le dice al servidor qué tipo de datos enviamos
//   - body                    → Los datos que enviamos (deben ser texto)
//   - JSON.stringify()        → Convierte objeto a texto JSON

// EJEMPLO CONCEPTUAL (no ejecutable sin servidor):
// fetch('https://mi-servidor.com/usuarios', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         nombre: 'Ana',
//         correo: 'ana@example.com'
//     })
// })
// .then(res => res.json())
// .then(data => console.log('Creado:', data))
// .catch(err => console.error('Error:', err));

// RESPUESTA TÍPICA DE UN POST EXITOSO:
//   - Código 201 Created
//   - Cuerpo con el recurso creado (incluyendo su ID asignado)

// NOTA IMPORTANTE:
// Las APIs públicas como Rick and Morty y Los Simpsons SOLO permiten GET.
// No permiten POST porque no quieren que cualquiera agregue datos a sus servidores.
// Para probar POST, necesitarías una API que lo permita o crear tu propia API.
// En la próxima guía veremos POST en acción con Google Apps Script.

// DIFERENCIAS ENTRE GET Y POST:
//
// | Aspecto          | GET                        | POST                         |
// |------------------|----------------------------|------------------------------|
// | Propósito        | Obtener datos              | Enviar datos nuevos          |
// | Body             | No tiene                   | Sí tiene                     |
// | Parámetros       | En la URL (?clave=valor)   | En el body                   |
// | Código éxito     | 200 OK                     | 201 Created                  |
// | Idempotente      | Sí                         | No                           |
// | Caché            | Se puede cachear           | No se cachea                 |

console.log("=== POST (Conceptual) ===");
console.log("POST se usa para enviar datos al servidor y crear recursos.");
console.log("Se envía un body con los datos en formato JSON.");
console.log("La respuesta típica es 201 Created.");
console.log("");
console.log("En la próxima guía veremos POST en acción con Google Apps Script.");
console.log("");

//--------------------------------------------------------------------------------------------------

// 20. CURL (Solicitudes desde la terminal)

// curl es una herramienta de línea de comandos para hacer solicitudes HTTP.
// Es útil para probar APIs sin escribir código.

// SINTAXIS BÁSICA:
// curl <URL>

// EJEMPLOS CON GET:
// curl https://rickandmortyapi.com/api/character/1
// curl https://thesimpsonsapi.com/api/characters/1

// EJEMPLOS CON POST:
// curl -X POST https://mi-servidor.com/usuarios \
//      -H "Content-Type: application/json" \
//      -d '{"nombre":"Ana","correo":"ana@example.com"}'

// PARTES IMPORTANTES:
//   - -X POST                           → Especifica el método POST
//   - -H "Content-Type: application/json" → Especifica el tipo de contenido
//   - -d '{"clave":"valor"}'            → El body de la solicitud
//   - \                                 → Continuación de línea en bash

// VER RESPUESTA CON DETALLES:
// curl -i https://rickandmortyapi.com/api/character/1

// GUARDAR RESPUESTA EN ARCHIVO:
// curl https://rickandmortyapi.com/api/character/1 -o personaje.json

console.log("=== CURL ===");
console.log("curl es una herramienta de terminal para hacer solicitudes HTTP.");
console.log("");
console.log("Ejemplos:");
console.log("  curl https://rickandmortyapi.com/api/character/1");
console.log("  curl https://thesimpsonsapi.com/api/characters/1");
console.log("");

//--------------------------------------------------------------------------------------------------

// 21. EJEMPLO PRÁCTICO: Mini galería de personajes

// Vamos a combinar todo lo aprendido: fetch, async/await, filter, map

console.log("=== EJEMPLO PRÁCTICO ===");

async function mostrarGaleria() {
    try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");
        const datos = await respuesta.json();

        // 1. Filtrar solo humanos vivos
        const humanosVivos = datos.results.filter(
            p => p.species === "Human" && p.status === "Alive"
        );

        // 2. Tomar los primeros 5
        const seleccionados = humanosVivos.slice(0, 5);

        // 3. Crear un arreglo con información resumida
        const resumen = seleccionados.map(p => ({
            nombre: p.name,
            origen: p.origin.name,
            imagen: p.image
        }));

        // 4. Mostrar
        console.log("Galería de humanos vivos:");
        resumen.forEach((p, i) => {
            console.log(`  ${i + 1}. ${p.nombre}`);
            console.log(`     Origen: ${p.origen}`);
            console.log(`     Imagen: ${p.imagen}`);
        });

        return resumen;
    } catch (error) {
        console.error("Error:", error);
    }
}

// mostrarGaleria();
console.log("");

//--------------------------------------------------------------------------------------------------

// 22. EJERCICIOS PROPUESTOS

console.log("=== EJERCICIOS PROPUESTOS ===");
console.log("");
console.log("1. Obtén un personaje de Rick and Morty por su ID con .then().");
console.log("2. Obtén el mismo personaje con async/await.");
console.log("3. Obtén un personaje de Los Simpsons por su ID.");
console.log("4. Obtén todos los personajes de Rick and Morty y muestra solo los nombres.");
console.log("5. Filtra los personajes que sean de especie 'Alien'.");
console.log("6. Crea una función que reciba un ID y devuelva el nombre del personaje de Los Simpsons.");
console.log("7. Usa Promise.all() para obtener 3 personajes de Rick and Morty al mismo tiempo.");
console.log("8. Maneja el error que ocurre al pedir un personaje con ID 9999.");
console.log("9. Crea una función que reciba un nombre y devuelva si existe en la API de Rick and Morty.");
console.log("10. Usa curl para obtener un personaje y guardarlo en un archivo.");
console.log("11. Explica con tus palabras qué diferencia hay entre GET y POST.");
console.log("12. Escribe un ejemplo conceptual de POST para crear un nuevo personaje.");
console.log("");

//--------------------------------------------------------------------------------------------------

/*

PREGUNTAS SOBRE APIs:

1. ¿Qué es una API? → Un contrato que permite que dos programas se comuniquen
2. ¿Qué es REST? → Un estilo para diseñar APIs con URLs y métodos HTTP
3. ¿Qué es JSON? → Un formato de texto para intercambiar datos
4. ¿Qué método HTTP se usa para obtener datos? → GET
5. ¿Qué método HTTP se usa para enviar datos nuevos? → POST
6. ¿Qué significa el código 200? → OK (solicitud exitosa)
7. ¿Qué significa el código 404? → Not Found (recurso no encontrado)
8. ¿Qué significa el código 500? → Internal Server Error (error del servidor)

PREGUNTAS SOBRE PROMESAS:

9. ¿Qué es una promesa? → Un objeto que representa un valor futuro
10. ¿Cuáles son los 3 estados de una promesa? → Pending, Fulfilled, Rejected
11. ¿Qué hace resolve en una promesa? → Marca la promesa como cumplida
12. ¿Qué hace reject en una promesa? → Marca la promesa como rechazada
13. ¿Para qué sirve .then()? → Para ejecutar código cuando la promesa se resuelve
14. ¿Para qué sirve .catch()? → Para capturar errores cuando la promesa se rechaza
15. ¿Para qué sirve .finally()? → Para ejecutar código siempre, éxito o error
16. ¿Qué diferencia hay entre .then() y async/await?
    → Ambos manejan promesas, async/await es más legible
17. ¿Dónde se usa await? → Dentro de funciones async
18. ¿fetch devuelve una promesa? → Sí, siempre
19. ¿Qué hace Promise.all()? → Espera a que todas las promesas se resuelvan
20. ¿Qué hace Promise.race()? → Espera a la primera promesa que se resuelva

PREGUNTAS SOBRE FETCH:

21. ¿Qué hace fetch? → Hace solicitudes HTTP
22. ¿Qué devuelve fetch? → Una promesa
23. ¿Qué método convierte la respuesta a JSON? → .json()
24. ¿Cómo se manejan errores con fetch?
    → Con .catch() o try/catch + verificar respuesta.ok
25. ¿Qué significa respuesta.ok? → Si la respuesta fue exitosa (200-299)

PREGUNTAS SOBRE POST:

26. ¿Para qué sirve POST? → Para enviar datos y crear recursos
27. ¿Qué código de éxito devuelve POST? → 201 Created
28. ¿Dónde van los datos en POST? → En el body
29. ¿Qué Content-Type se usa generalmente? → application/json
30. ¿Qué función convierte el objeto a JSON? → JSON.stringify()
31. ¿Cuál es la diferencia entre GET y POST?
    → GET solo lee, POST envía/crea. GET no tiene body, POST sí.

PREGUNTAS SOBRE CURL:

32. ¿Qué es curl? → Una herramienta de terminal para hacer solicitudes HTTP
33. ¿Cómo se especifica POST en curl? → Con -X POST
34. ¿Cómo se envía un header en curl? → Con -H "Nombre: valor"
35. ¿Cómo se envía un body en curl? → Con -d '{"clave":"valor"}'

*/