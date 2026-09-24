const ListaPeliculas = [];

function Pelicula(nombre, vista, duracion) {
  this.nombrePelicula = String(nombre); // convierte todo lo que ingrese en String
  this.vistaPelicula = Boolean(vista); // define el dato ingresado como un booleano (si es vacio o null = false)
  this.duracionPelicula = Number(duracion); // define lo que entre o pasemos como Number

  this.mostrarInfo = function () {
    console.log(`
        Titulo de la pelicula: ${this.nombrePelicula}
        Ya fue vista ${this.vistaPelicula}
        Duracion del la pelicula: ${this.duracionPelicula} minutos
        `);
  };
}

// instancia de Pelicula
const pelicula1 = new Pelicula("spiderman", true, 150);
pelicula1.mostrarInfo(); // realizar funcion de mostrar informacion de la pelicula1

// mas instancias
const pelicula2 = new Pelicula("La odiesea", true, 100);
const pelicula3 = new Pelicula("La monja", false, 90);

ListaPeliculas.push(pelicula1, pelicula2, pelicula3);
console.log(ListaPeliculas);
