const listaPeliculas = [];

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

// agregamos las instancias a el array que teniamos en el principio del codigo
listaPeliculas.push(pelicula1, pelicula2, pelicula3);
console.log(listaPeliculas);

console.log(pelicula1.nombrePelicula);

// para ver todas las peliculas
// console.log("Toda la lista de peliculas");
// for (let pelicula of listaPeliculas) pelicula.mostrarInfo();

// console.log(listaPeliculas[0].slice(0, 2));

// creamos una instancia nueva apartir de una ya existente
const pelicula4 = Object.create(pelicula1);
pelicula4.mostrarInfo();

pelicula4.nombrePelicula = "Titanic";
pelicula4.duracionPelicula = 250;
pelicula4.vistaPelicula = true;

//agregamos la nueva pelicula
listaPeliculas.push(pelicula4);

// mostramos nuevamente todos los datos en
// listaPeliculas con su index
for (let pelicula of listaPeliculas) {
  console.log(listaPeliculas.indexOf(pelicula));
  pelicula.mostrarInfo();
}
