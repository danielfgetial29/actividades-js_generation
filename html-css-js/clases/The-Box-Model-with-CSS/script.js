const focus = document.getElementById('focus');

const informacion = document.createElement('div');
informacion.id = 'div-info';
informacion.style.height = 'auto';
informacion.style.width = '600px';
informacion.style.backgroundColor = '#fcfcfc';
informacion.style.borderRadius = '20px';
informacion.style.position = 'fixed';
informacion.style.top = '50%';
informacion.style.left = '50%';
informacion.style.transform = 'translate(-50%,-50%)';
informacion.style.zIndex = '5';
informacion.style.backdropFilter = 'blur(10px)';
informacion.style.padding = '1rem';
informacion.style.color = '#050505';
informacion.style.fontSize = '25px';
informacion.style.fontFamily = 'sans-serif';
informacion.style.textAlign = 'justified';
informacion.style.cursor = 'pointer';

informacion.onclick = () => {
    informacion.remove()
    focus.style.display = 'none';
}

function clickDiv1(){
    focus.style.display = 'block';
    focus.style.backdropFilter = 'blur(7px)';
    document.body.appendChild(informacion);
    informacion.innerHTML = `
        <h2> Div 1: El valor de la propiedad 'position' de este Div es 'relative'</h2>
            <p><br> Recuerda que el valor relative hace que el elemento se posicione relativamente a su posición natural.<br><br>
            Podemos usar top, left, bottom, right para desplazarlo.<br><br>
            La posición original se conserva: otros elementos se posicionan sobre la posición original, no sobre el elemento desplazado.</p>
            <p><br>Recuerda entrar en las herramientas de desarrollador presionando F12 para inspeccionar la caja modelo.<br>
            <br>Haz click dentro de este contenedor para cerrar
            </p>
    `
}
function clickDiv2(){
    focus.style.display = 'block';
    focus.style.backdropFilter = 'blur(7px)';
    document.body.appendChild(informacion);
    informacion.innerHTML = `
        <h2> Div 2: El valor de la propiedad 'position' de este Div es 'sticky'</h2>
            <p><br> Se comporta como relative hasta que el usuario hace scroll lo suficiente para alcanzar el punto definido en top o botton y entonces se queda en ese punto.<br><br>
            Cuando se alcanza un punto definido (top, left, etc.), se comporta como fixed.<br><br>
            Cuando el scroll vuelve, se comporta como relative de nuevo.
            La posición original se conserva: otros elementos se posicionan sobre la posición original, no sobre el elemento desplazado.</p>
            <p><br>Recuerda entrar en las herramientas de desarrollador presionando F12 para inspeccionar la caja modelo.<br>
            <br>Haz click dentro de este contenedor para cerrar
            </p>
    `
}
function clickDiv3(){
    focus.style.display = 'block';
    focus.style.backdropFilter = 'blur(7px)';
    document.body.appendChild(informacion);
    informacion.innerHTML = `
        <h2> Div 3: El valor de la propiedad 'position' de este Div es 'relative'</h2>
            <p><br>El contenedor Div 3 es el contenedor padre del Div 4 y se convierte en referencia para el hijo. Es decir, este contenedor es el limite para el Div 4 <br><br>
            </p>
            <p><br>Recuerda entrar en las herramientas de desarrollador presionando F12 para inspeccionar la caja modelo.<br>
            <br>Haz click dentro de este contenedor para cerrar
            </p>
    `
}


function clickDiv4(e) {
    e.stopPropagation();
    focus.style.display = 'block';
    focus.style.backdropFilter = 'blur(7px)';
    document.body.appendChild(informacion);
    informacion.innerHTML = `
        <h2> Div 4: El valor de la propiedad 'position' de este Div es 'absolute'</h2>
            <p><br> Se salta el flujo del documento.<br><br>
            Se posiciona respecto al primer ancestro que tenga position diferente de static.
            Si no hay ningún ancestro posicionado, se posiciona respecto al body. En este caso su padre es el div 3 que usa position: relative<br><br>
            No reserva espacio para él: los demás elementos ocupan su lugar.
            </p>
            <p><br>Recuerda entrar en las herramientas de desarrollador presionando F12 para inspeccionar la caja modelo.<br>
            <br>Haz click dentro de este contenedor para cerrar
            </p>
    `
    
}

function mostrarFixedSi(){
    focus.style.display = 'block';
    focus.style.backdropFilter = 'blur(7px)';
    document.body.appendChild(informacion);
    informacion.innerHTML = `
        <h2> ¡Felicidades!<br> Este es el contenedor que usa fixed como valor de la propiedad position</h2>
            <p><br> Se salta el flujo del documento.<br><br>
            Se posiciona respecto a la ventana del navegador.<br><br>
            No se mueve cuando el usuario hace scroll.<br><br>
            No reserva espacio para él: los demás elementos ocupan su lugar.
            </p>
            <p><br>Recuerda entrar en las herramientas de desarrollador presionando F12 para inspeccionar la caja modelo.<br>
            <br>Haz click dentro de este contenedor para cerrar
            </p>
    `
}
function mostrarFixedNo(){
    focus.style.display = 'block';
    focus.style.backdropFilter = 'blur(7px)';
    document.body.appendChild(informacion);
    informacion.innerHTML = `
        <h2> Este es el contenedor que usa fixed como valor de la propiedad position</h2>
            <p><br> Se salta el flujo del documento.<br><br>
            Se posiciona respecto a la ventana del navegador.<br><br>
            No se mueve cuando el usuario hace scroll.<br><br>
            No reserva espacio para él: los demás elementos ocupan su lugar.
            </p>
            <p><br>Recuerda entrar en las herramientas de desarrollador presionando F12 para inspeccionar la caja modelo.<br>
            <br>Haz click dentro de este contenedor para cerrar
            </p>
    `
}