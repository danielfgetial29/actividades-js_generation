// Importar la función spawn del módulo child_process para ejecutar toy.js
const { spawn } = require('child_process');

// Importar el módulo assert para verificar que el resultado sea el esperado
const assert = require('assert');

function probarToyJs() {
    // Definir las entradas esperadas (en español, como las escribiría el usuario)
    const entradas = [
        'Ana\n',
        'Desarrolladora\n',
        'divertido\n',
        'amable\n',
        'pizza\n',
        'ensalada\n',
        'motivada\n'
    ];

    // Definir la historia esperada (debe coincidir EXACTAMENTE con la que produce toy.js)
    const historiaEsperada = (
        "Ana ha comenzado hoy su primer curso de Generation. Se está formando como Desarrolladora. " +
        "Sus compañeros le parecieron muy divertido, pero su profesor era, cuando menos, amable. " +
        "De almuerzo come pizza y ensalada mientras repasa sus notas. Siente motivada " +
        "pero está decidido/a a terminar el curso."
    );

    // Ejecutar el script toy.js usando Node.js
    const proceso = spawn('node', ['toy.js'], {
        stdio: ['pipe', 'pipe', 'pipe']
    });

    // Enviar las entradas al proceso
    proceso.stdin.write(entradas.join(''));
    proceso.stdin.end();

    let salidaEstandar = '';
    let salidaError = '';

    proceso.stdout.on('data', (data) => {
        salidaEstandar += data.toString();
    });

    proceso.stderr.on('data', (data) => {
        salidaError += data.toString();
    });

    proceso.on('close', (codigo) => {
        // Depuración: Imprimir la salida completa para entender su estructura
        console.log("Salida completa:\n", salidaEstandar);

        // Extraer la parte de la historia de la salida
        const indiceInicioHistoria = salidaEstandar.indexOf("Ana ha comenzado hoy su primer curso de Generation.");
        const historiaSalida = salidaEstandar.substring(indiceInicioHistoria).trim();

        // Depuración: Imprimir la parte extraída de la historia
        console.log("Historia extraída:\n", historiaSalida);

        // Verificar si la salida coincide con la historia esperada
        assert.strictEqual(historiaSalida, historiaEsperada, `Esperado: ${historiaEsperada}, pero se obtuvo: ${historiaSalida}`);

        console.log("¡Prueba pasada!");
    });

    proceso.on('error', (error) => {
        console.error('Error al ejecutar el proceso:', error);
    });
}

// Ejecutar la prueba
probarToyJs();