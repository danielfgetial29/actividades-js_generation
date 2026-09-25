Instrucciones

Los constructores se utilizan para definir una plantilla para un nuevo tipo de objeto. El operador `new` crea una nueva instancia de ese objeto.

Hoy, explorarán las funciones constructoras y se enseñarán a sí mismos cómo crear sus propios objetos definidos por el usuario.

Para cada una de estas tareas, escriban su código directamente en el archivo de la tarea. ¡Los scripts de calificación evaluarán lo que hayan escrito!


TAREAS

1. Se les ha presentado un constructor para un objeto Mail.
    - Modifiquen el código para que el asunto sea la palabra `hola` y el mensaje sea la palabra `mundo`.

2. Se les ha presentado un constructor para un objeto Mail.
    - Modifiquen el código para que el usuario proporcione su propio asunto y mensaje como parámetros de ejecución, en ese orden.
    - Los parámetros de ejecución son los valores que se pasan a un programa cuando se ejecuta.
    - Por ejemplo, si el usuario ejecuta el programa con el comando `node index.js 2 hola mundo`, entonces "node" es el programa, "index.js" es el primer parámetro, "2" es el segundo parámetro, y "hola" y "mundo" son el tercer y cuarto parámetro respectivamente.
    - Pueden acceder a los parámetros de ejecución en su programa usando el array `process.argv`.
    - En el ejemplo, el proceso y el primer parámetro (índices 0 y 1 del array `process.argv`) son "node" e "index.js", así que pueden ignorarlos.
    - El segundo parámetro (índice 2) es utilizado por este programa para determinar el número de tarea a ejecutar, así que también pueden ignorarlo.
    - Pueden acceder al asunto y al mensaje usando `process.argv[3]` y `process.argv[4]` respectivamente.

3. Se les ha presentado un constructor para un objeto Mail.
    - Modifiquen el código para que el usuario proporcione su propio asunto y mensaje como parámetros de ejecución, en ese orden.
    - Luego, extiendan el constructor para incluir un método `imprimirCorreo()` que imprima lo siguiente en la Consola:
        - `<asunto>: <mensaje>`
        - Por ejemplo, si las dos entradas son `pizza` y `piña`, entonces la salida debería ser `pizza: piña`.

4. Para esta tarea, necesitarán escribir su propio constructor.
    - Creen un constructor llamado `Journey` que tome dos parámetros: `inicio` y `fin`.
    - Creen un par de constantes llamadas `desde` y `hasta`, y asígnenles los valores de los argumentos de la línea de comandos.


TAREAS EXTRA

¡Si han completado las tareas anteriores, intenten las siguientes tareas extra como desafío adicional!

5. Creen un constructor para un objeto `FriendsList` que almacene una lista de nombres en un array.
    - Su programa debe leer la cantidad de nombres y los nombres desde los argumentos de la línea de comandos.
    - Su programa debe luego imprimir el array directamente en la consola.
        - La salida debería verse así: `[ 'nombre1', 'nombre2' ]`

6. ¿Pueden crear un constructor para un objeto que describa una lista de compras? ¡Usen esta tarea para experimentar con constructores!
    - ¿Qué tan larga debería ser la lista?
        - No todos los usuarios querrán la misma cantidad de artículos.
    - ¿Cómo manejarían múltiplos del mismo artículo, como 2 botellas de leche o una docena de huevos?
    - ¿Cómo recolectarían estos datos del usuario?
    - ¿Cómo almacenarían estos datos en un objeto?
    - ¿Cómo se vería la función constructora para este objeto?

7. ¿Pueden crear un constructor para un objeto que pueda describir un auto? ¡Usen esta tarea para experimentar con constructores!
    - Piensen qué datos debería tener el objeto, cómo recolectarían esos datos del usuario y cómo los almacenarían.
        - ¿La marca, modelo y año?
        - ¿El color?
        - ¿El número de puertas?
        - ¿El kilometraje?
        - ¿Si es de motor de combustión o eléctrico?
        - ¿Algo más?