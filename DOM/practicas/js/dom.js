const containerTarjetas = document.querySelector("container-tarjetas");

const containerResultadosBusqueda = document.getElementById(
  "container-tarjetas-busqueda-",
);

function crearHTMLTarjeta(personaje) {
  const frase =
    personaje.phrases.length !== 0 ? personaje.phrases[0] : "Sin Frase";

  // const simsponTarjeta = document.createElement("div");
  // simsponTarjeta.classList.add("simpson-tarjeta");

  // const imagenPersonaje = document.createElement("img");
  // const nombrePersonaje = document.createElement("p");
  // nombrePersonaje.textContent = "Homer";

  return `
        <div class="simspon-tarjeta">
            <img src="https://cdn.thesimpsonsapi.com/200${personaje.portrait_path}" alt="Imagen de personaje" ${personaje.name}/>
            <p class="nombre">${personaje.name}</p>
            <p class="ocupacion">${personaje.ocupation}</p>
            <p class="frase">${frase}</p>
          </div>
    `;
}

export function renderizarTodosLosPersonajes(listaPersonajes) {
  for (let personaje of listaPersonajes) {
    const tarjeta = document.createElement("div");

    tarjeta.innerHTML = crearHTMLTarjeta(personaje);

    // .append agrega textos o nuevas etiquetas dentro de una etiqueta ya existente
    // y las coloca jsuto antes de que cierre
    containerTarjetas.append(tarjeta);
  }
}

export function renderizarPersonajesEncontrados(listaPersonajes) {
  for (let personaje of listaPersonajes) {
    const tarjeta = document.createElement("div");

    tarjeta.innerHTML = crearHTMLTarjeta(personaje).replace(
      "simspon-tarjeta",
      "simspon-tarjeta-busqueda",
    );

    containerResultadosBusqueda.append(tarjeta);
  }
}

export function limpiarResultadosBusqueda() {
  const listarTarjetasdeBusqueda = document.querySelectorAll(
    ".simspon-tarjeta-busqueda",
  );
}
