//En este archivo puedes ir ejecutando los fragmentos de codigos que quieras ver o practicar por ejemplo: 

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

obtenerPersonajeSimpsons(1);

//Una vez termines de probarlo, cambiarlo y romper el codigo, simplemente lo eliminas y continuas con el siguiente...

