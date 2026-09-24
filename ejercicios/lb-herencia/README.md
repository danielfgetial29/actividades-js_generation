
Instrucciones

Las clases son una sintaxis alternativa para definir una plantilla para construir objetos. Al igual que las funciones constructoras, se pueden utilizar para construir objetos con su propio conjunto de propiedades y métodos. Al igual que los prototipos, también permiten que los objetos los hereden. Los métodos constructores de clase se utilizan para crear una instancia de una clase. Los métodos compartidos son heredados por cada instancia.

Hoy, definirán clases, inicializarán objetos con propiedades y actuarán sobre esas propiedades con métodos.

Para cada una de estas tareas, construirán e iterarán sobre su solución de la tarea anterior.


TAREAS

1. Estás trabajando en código que se utilizará en un videojuego. Se te ha pedido que crees una clase de objeto. Estas se utilizarán para definir jugadores en ese juego. Cada jugador puede elegir su propio nombre, y estos objetos se utilizarán para almacenarlos.
    - Modifica la clase Jugador para que acepte un "nombre" de Jugador en un argumento.
        - La clave de esta propiedad en el objeto resultante DEBE ser "nombre". Recuerda, ¡los computadores son muy literales!


2. Ahora se te ha pedido que mejores tu código, para que los objetos jugador puedan definir tanto un nombre como un número de nivel.
    - Modifica la clase Jugador para que acepte una cadena de "nombre" de Jugador y un número de "nivel" en dos argumentos separados.
        - La clave de esta propiedad en el objeto resultante DEBE ser "nivel". Recuerda, ¡los computadores son muy literales!


3. Ahora se te ha pedido que incluyas un método que muestre una cadena en la consola anunciando una subida de nivel.
    - Modifica la clase Jugador para que acepte una cadena de nombre de jugador y un número de nivel en dos argumentos separados.
    - Luego, define un método de objeto compartido `informacion()` que imprima la siguiente cadena, reemplazando los dos marcadores de posición:
        - `<nombre> ha alcanzado el Nivel <nivel>!`
            - Un jugador llamado Tara en el nivel 6 debería resultar en "Tara ha alcanzado el Nivel 6!" impreso en la consola.


4. Ahora se te ha pedido que incluyas un método para subir de nivel a un jugador, incrementando su número de nivel en uno.
    - Modifica la clase Jugador para que acepte una cadena de nombre de jugador y un número de nivel en dos argumentos separados.
    - Luego, define un método de objeto compartido `informacion()` que muestre la siguiente cadena:
        - `<nombre> ha alcanzado el Nivel <nivel>!`
    - Finalmente, define un segundo método de objeto compartido llamado `subirNivel()` que incrementará el nivel del Jugador.


TAREAS EXTRA

Si has completado las tareas anteriores, ¡intenta las siguientes tareas extra para experimentar más!

5. Experimenta permitiendo que el jugador suba de nivel basándose en puntos de experiencia ganados.
    - Un punto de experiencia es un número. Una subida de nivel debe ocurrir cuando un jugador gana suficientes puntos de experiencia.
    - Intenta agregar un método que permita a un jugador ganar una cantidad dada de puntos de experiencia.
    - ¿Cuántos puntos de experiencia deberían resultar en una subida de nivel? ¿Cómo puedes hacer seguimiento de este número?


6. Experimenta permitiendo que los objetos jugador construidos se agreguen a un arreglo de miembros del equipo.
    - ¿Cómo debería identificarse un arreglo de miembros del equipo en tu código?
    - Intenta agregar métodos para agregar o eliminar objetos jugador de un equipo dado.


7. Experimenta permitiendo que el jugador tenga un inventario de objetos.
    - Intenta agregar métodos para agregar o eliminar objetos de un inventario.
    - ¿Cómo puedes hacer seguimiento de la cantidad de cada objeto? ¿Qué estructura de datos necesitarías para esto?

# Instructions
Classes are an alternative syntax for defining a **template** for constructing objects. Like constructor functions, they can be used to construct objects with their **own** set of properties and methods. Like prototypes, they also allow for objects to **inherit** them. Class **constructor methods** are used to create an instance of a class. **Shared methods** are inherited by each instance.

**Today, you will be defining classes, initialising objects with properties, and acting on those properties with methods!**

For each of these tasks, you will be building and iterating on your solution for the previous task.


## Tasks

1. You are working on code that will be used in a video game. You have been asked to create an object class. These will be used to define players in that game. Each player can choose their own name, and these objects will be used to store them.
    * Modify the Player class so that it will accept a Player "**name**" in an argument.
        * The key of this property in the resulting object **must** be "`name`" - remember, **computers are very literal**!


2. You have now been asked to improve your code, so that the player objects can define both a name and a level number.
    * Modify the Player class so that it will accept a Player "name" string and a "**level**" number in two separate arguments.
        * The key of this property in the resulting object **must** be "`level`" - remember, **computers are very literal**!


3. You have now been asked to include a method that will output a string to the console announcing a level up.
    * Modify the Player class so that it will accept a player name string and a level number in two separate arguments.
    * Then, define a shared object method `info()` that will print the following string, replacing the two placeholders:
        * `<name> has reached Level <level>!`
            * A player named **Tara** at level **6** should result in "`Tara has reached Level 6!`" printed to the console.


4. You have now been asked to include a method for levelling a player up, increasing their level number by one.
    * Modify the Player class so that it will accept a Player name string and a level number in two separate arguments.
    * Then, define a shared object method `info()` that will output the following string:
        * `<name> has reached Level <level>`!
    * Finally, define a second shared object method named `levelUp()` that will **increment** the level of the Player.

## Extra Tasks

If you have completed the above tasks, try the following extra tasks to **experiment** further!

5. Experiment with allowing the player to level up based on gained experience points.
    * An experience point is a **number**. A level up should occur when a player gains enough experience points.
    * Try adding a method to allow a player to gain a given number of experience points.
    * How many experience points should result in a level up? How can you keep track of this number?


6. Experiment with allowing constructed player objects to be added to an **array** of party members.
    * How should an array of party members be identified in your code?
    * Try adding methods to add or remove player objects from a given party.


7. Experiment with allowing the player to have an inventory of items.
    * Try adding methods to add or remove items from an inventory.
    * How can you keep track of the quantity of each item? What **data structure** would you need for this?