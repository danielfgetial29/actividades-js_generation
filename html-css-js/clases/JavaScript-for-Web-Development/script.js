document.getElementById('titulo-h1').innerHTML = "Este es el nuevo titulo h1 modificado con DOM";

document.getElementById('titulo-h1').style.color = "green";

document.body.style.backgroundColor = "pink";


const boton = document.getElementById('mi-boton');
const titulo1 = document.getElementById('titulo-h1');

boton.addEventListener('click', () => {

    titulo1.textContent = "Este es el titulo modificado usando el evento del click";

});
