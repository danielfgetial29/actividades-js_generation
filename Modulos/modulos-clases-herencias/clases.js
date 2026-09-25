console.log(Date());
const fechaActual = new Date();

console.log(fechaActual);

console.log(fechaActual.toDateString());

const fechaEspecifica = new Date(2010,0,2);
console.log(fechaEspecifica.toDateString());

console.log(fechaEspecifica.getFullYear());


class Telefono{

    constructor(marca,anio){
        this.marca = marca;
        this.anio= anio;
        this.activo = true;
    }

    antiguedad(){
        const fechaActual = new Date();
        const anioActual = fechaActual.getFullYear();
        return anioActual - this.anio;
    }

    desactivar(){
        this.activo = false;
    }
    
}

const telefono1 = new Telefono("Samsung", 2008);

telefono1.desactivar(); 
console.log(telefono1);
console.log("el telefono tiene ", telefono1.antiguedad(), "anios de antiguedad");


