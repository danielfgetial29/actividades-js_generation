// Maneras para consultar las apis

// Nos muestra las APIs que tiene esta API general para acceder a la informacion segun
// necesitemos
// fetch("https://thesimpsonsapi.com/api")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Respuesta: ", data);
//   });

/*Ya que con el primer codigo me di cuenta que la clave result contiene los datos de los personajes
entonces los llamo exclusivamente a ellos 
Aparte como ya se el array que trae los datos de los personasjes puedo acceder a sus claves, dependiendo
de que necesite o quiera llamar, esto lo hago con data.results[numero_de_indice].clave 
*/
// fetch("https://thesimpsonsapi.com/api/characters")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Respuesta: ", data.results[0].name);
//   });

/*  async/await 
    --Es la manera moderna de pedir informacion a una API, ya que le solicita informacion 
    a algo externo pero debo esperar por esas respuesta, esto evita que el codigo se bloquee en caso 
    de que demora la respuesta, esto lo hacemos con el await
 
*/
async function obtenerPersonajes() {
  const response = await fetch("https://thesimpsonsapi.com/api/characters");
  const data = await response.json();
  console.log(data.results[0].name);
  //   return data.results[0].name;
}
obtenerPersonajes();
