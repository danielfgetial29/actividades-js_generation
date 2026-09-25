export class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    respirar(){
        return `${this.nombre} esta respirando`;
    }

    hacerSonido(){
        return `${this.nombre} esta haciendo un sonido`;
    }
}


