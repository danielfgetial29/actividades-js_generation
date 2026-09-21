// test.js - Pruebas del Laboratorio de Bucles

const { spawnSync } = require('child_process');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

// Verificar que index.js exista antes de ejecutar las pruebas
const indexPath = path.join(__dirname, 'index.js');
if (!fs.existsSync(indexPath)) {
    console.error('Error: No se encontró index.js en el directorio actual.');
    process.exit(1);
}

// Función auxiliar para preparar y verificar la salida
function prepararYVerificar(entradaArray, salidaArray) {
    // Preparar la salida esperada
    const salidaEsperada = salidaArray.join('\n');

    // Ejecutar index.js con el argumento de entrada
    const resultado = spawnSync('node', ['index.js', ...entradaArray], {
        encoding: 'utf8',
        cwd: __dirname
    });

    // Verificar si hubo un error al ejecutar el proceso
    if (resultado.error) {
        throw new Error(`Error al ejecutar index.js: ${resultado.error.message}`);
    }

    // Verificar si el proceso terminó con un código de error
    if (resultado.status !== 0) {
        throw new Error(`index.js terminó con código ${resultado.status}. Stderr: ${resultado.stderr}`);
    }

    // Obtener la salida real
    let salidaReal = (resultado.stdout || '').trim();
    // Windows genera CR, eliminarlo si está presente
    salidaReal = salidaReal.replace(/\r\n/g, '\n');

    // Verificar que la salida esperada esté contenida en la salida real
    assert.ok(
        salidaReal.includes(salidaEsperada),
        `Se esperaba encontrar la salida esperada en la salida real.\n\nEsperado (primeras 10 líneas):\n${salidaArray.slice(0, 10).join('\n')}\n...\n\nReal (primeras 10 líneas):\n${salidaReal.split('\n').slice(0, 10).join('\n')}\n...`
    );
}

// PRUEBA 1: Números del 1 al 105
function probarTareaUno() {
    const entradaArray = ['1'];
    const salidaArray = [];
    for (let i = 1; i <= 105; i++) {
        salidaArray.push(String(i));
    }
    prepararYVerificar(entradaArray, salidaArray);
}

// PRUEBA 2: Fizz para múltiplos de 3

function probarTareaDos() {
    const entradaArray = ['2'];
    const salidaArray = [];
    for (let i = 1; i <= 105; i++) {
        if (i % 3 === 0) {
            salidaArray.push('Fizz');
        } else {
            salidaArray.push(String(i));
        }
    }
    prepararYVerificar(entradaArray, salidaArray);
}

// PRUEBA 3: Fizz, Buzz y FizzBuzz

function probarTareaTres() {
    const entradaArray = ['3'];
    const salidaArray = [];
    for (let i = 1; i <= 105; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            salidaArray.push('FizzBuzz');
        } else if (i % 3 === 0) {
            salidaArray.push('Fizz');
        } else if (i % 5 === 0) {
            salidaArray.push('Buzz');
        } else {
            salidaArray.push(String(i));
        }
    }
    prepararYVerificar(entradaArray, salidaArray);
}

// PRUEBA 4: Fizz, Buzz, Woof y combinaciones

function probarTareaCuatro() {
    const entradaArray = ['4'];
    const salidaArray = [];
    for (let i = 1; i <= 105; i++) {
        let salida = '';
        if (i % 3 === 0) salida += 'Fizz';
        if (i % 5 === 0) salida += 'Buzz';
        if (i % 7 === 0) salida += 'Woof';
        if (salida === '') salida = String(i);
        salidaArray.push(salida);
    }
    prepararYVerificar(entradaArray, salidaArray);
}

// EJECUTAR TODAS LAS PRUEBAS

function ejecutarPruebas() {
    const pruebas = [
        { nombre: 'Tarea 1: Números del 1 al 105', func: probarTareaUno },
        { nombre: 'Tarea 2: Fizz para múltiplos de 3', func: probarTareaDos },
        { nombre: 'Tarea 3: Fizz, Buzz y FizzBuzz', func: probarTareaTres },
        { nombre: 'Tarea 4: Fizz, Buzz, Woof y combinaciones', func: probarTareaCuatro }
    ];

    let aprobadas = 0;
    const total = pruebas.length;

    console.log('Ejecutando pruebas del Laboratorio de Bucles...');
    console.log('='.repeat(50));

    for (const prueba of pruebas) {
        try {
            prueba.func();
            console.log(`[OK] ${prueba.nombre}`);
            aprobadas++;
        } catch (error) {
            console.log(`[FALLO] ${prueba.nombre}`);
            console.log(`  ${error.message}`);
        }
    }

    console.log('='.repeat(50));
    console.log(`Puntaje: ${aprobadas}/${total}`);

    if (aprobadas === total) {
        console.log('¡Todas las pruebas pasaron!');
    } else {
        console.log('Algunas pruebas fallaron. Revisa tus tareas.');
        process.exit(1);
    }
}

// Ejecutar todas las pruebas
ejecutarPruebas();