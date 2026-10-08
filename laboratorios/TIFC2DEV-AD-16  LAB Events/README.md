# Laboratorio: Eventos y Manipulación del DOM

## Objetivo

Practicar el manejo de eventos y la manipulación del DOM con JavaScript.

## Instrucciones

1. Crea un archivo `script.js` en la misma carpeta que `index.html`.
2. Resuelve cada una de las tareas escribiendo el código JavaScript necesario.
3. Puedes hacerlo en un solo archivo `script.js` o modularlo como prefieras.
4. Abre `index.html` en el navegador para probar tu solución.
5. Abre la consola del navegador (F12) para ver los resultados.

---

## Tarea 1: Modificar el estilo del texto del párrafo

Al hacer clic en el botón `botonEstilo`, la fuente, el tamaño de fuente y el color del texto del párrafo `parrafo` deben cambiar.

**Pista:** Usa `element.style.propiedad = 'valor'` para cambiar los estilos.

---

## Tarea 2: Obtener valores del formulario

Escribe una función que, al enviar el formulario, obtenga los valores de los inputs `fname` y `lname` y los imprima en la consola.

**Pista:** Usa `preventDefault()` para evitar que el formulario se recargue. Usa `document.forms` o `document.getElementById('form1')` para acceder a los inputs.

---

## Tarea 3: Mostrar alerta con información de enlaces

Al hacer clic en el botón `botonEnlaces`, debe aparecer una alerta (`alert()`) con:
- El número total de enlaces en la página.
- El primer enlace de la página.
- El último enlace de la página.

**Pista:** Usa `document.querySelectorAll('a')` para obtener todos los enlaces. Usa `.length` para el número total, `[0]` para el primero y `[length - 1]` para el último.

---

## Tarea Extra: Manipulación avanzada del DOM

Resuelve los siguientes pasos en orden:

1. Selecciona la sección con `id="contenedor"`.
2. Selecciona todos los elementos de la lista con `class="segundo"`.
3. Selecciona el elemento `li` con `class="tercero"` que esté **dentro de la etiqueta `<ol>`**.
4. Dale el texto **"¡Hola!"** a la sección con `id="contenedor"`.
5. Añade la clase `principal` al div con `class="footer"`.
6. Elimina la clase `principal` del div con `class="footer"`.
7. Crea un nuevo elemento `li`.
8. Dale al `li` el texto **"cuatro"**.
9. Añade el `li` al elemento `ul`.

**Pistas:**

| # | Paso | Método |
|---|------|--------|
| 1 | Seleccionar `#contenedor` | `document.getElementById('contenedor')` |
| 2 | Seleccionar `.segundo` | `document.querySelectorAll('.segundo')` |
| 3 | Seleccionar `.tercero` dentro de `ol` | `document.querySelector('ol .tercero')` |
| 4 | Cambiar texto | `element.textContent = '¡Hola!'` |
| 5 | Añadir clase | `element.classList.add('principal')` |
| 6 | Eliminar clase | `element.classList.remove('principal')` |
| 7 | Crear elemento | `document.createElement('li')` |
| 8 | Dar texto | `element.textContent = 'cuatro'` |
| 9 | Añadir al `ul` | `ul.append(elemento)` |

---

## Puntuación

Al final de la sesión, realizarás una autoevaluación.

---

## Consejos

| # | Consejo |
|---|---------|
| 1 | Lee la documentación de MDN sobre eventos y manipulación del DOM. |
| 2 | Usa `console.log()` para verificar que los elementos se seleccionan correctamente. |
| 3 | Si algo no funciona, revisa la consola del navegador (F12) para ver errores. |
| 4 | No tengas miedo de experimentar. Cambia valores y observa qué pasa. |