class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    respirar() {
        return `${this.nombre} está respirando.`;
    }
}

// Clase Perro
class Perro extends Animal {
    ladrar() {
        return `${this.nombre} dice: ¡Guau!`;
    }
}

// Clase Gato
class Gato extends Animal {
    maullar() {
        return `${this.nombre} dice: ¡Miau!`;
    }
}

export {Animal, Perro, Gato}