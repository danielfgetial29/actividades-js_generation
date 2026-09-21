Actividad: Interaccion Cliente-Servidor con Google Apps Script y Google Sheets
Descripcion

En esta actividad, crearás un sistema simple que permite que Node.js interactúe con una Hoja de cálculo de Google utilizando solicitudes POST y GET. Aplicarás conceptos fundamentales de programación junto con solicitudes HTTP, formateo y funciones asincrónicas. ¡Comencemos!

Paso 1: Configurar la Hoja de Cálculo de Google
Sigue los siguientes pasos para configurar tu Hoja de cálculo de Google con el script:

Crea una nueva Hoja de cálculo de Google.

En las celdas A1, B1 y C1, agrega respectivamente el siguiente texto: Marca de tiempo, Nombre y Correo electrónico.

Ve a Extensiones > Apps Script.

Pega el código que se compartió contigo en Code.gs.

Haz clic en Implementar > Administrar implementaciones.

Selecciona Nueva implementación > Aplicación web.

Configura lo siguiente:

Descripción: Sheet API

Ejecutar como: Yo

Acceso: Cualquiera

Haz clic en Implementar, autoriza el acceso y copia la URL de la aplicación web. Deberás pegarla en tu código para la siguiente actividad.

Paso 2: Escribir el Código JavaScript
Ahora es momento de escribir un programa que permita enviar y recibir mensajes.

Abre VS Code.

Abre una terminal e instala el paquete node-fetch con el siguiente comando:

text
npm install node-fetch@2
Nota: Si usas Node.js 18 o superior, fetch ya viene incluido de forma nativa y este paso es opcional.

En la plantilla app.js que se compartió contigo, debes completar el código para enviar un mensaje y varios mensajes a la hoja, y obtener un mensaje y todos los mensajes desde la hoja. (Puedes usar recursos en línea para ayudarte a completar el código).

Ten en cuenta que hay 6 comentarios que indican las partes del código que faltan. Solo debes modificar esas líneas; deja el resto del código tal como está.

Una vez que termines, es momento de probar tu código para asegurarte de que funciona correctamente. Sigue las instrucciones de la siguiente sección y observa si tu Hoja de cálculo se actualiza con valores en las tres columnas (Marca de tiempo, Nombre y Correo electrónico).

Paso 3: Evaluación y Reflexión del Proyecto
Sigue las instrucciones en Canvas para entregar tu código para la evaluación del instructor.

Antes de entregar, revisa los resultados de tu laboratorio utilizando el archivo test.js.

Pasos:
Descarga el archivo que se compartió contigo y cópialo en la carpeta de tu proyecto.

Abre VS Code.

Haz clic en Archivo y luego en Abrir carpeta para abrir la carpeta de tu laboratorio.

Haz clic en Terminal y luego en Abrir terminal para abrir la terminal integrada.

Asegúrate de tener instaladas las dependencias con:

text
npm install
Prueba tu laboratorio con el comando:

text
node test.js
Espera a que el script de corrección termine de ejecutarse.

Revisa la salida de la terminal para ver tus resultados.

Paso 4: Reflexión
Después de eso, reflexiona sobre las funcionalidades de la aplicación y tu experiencia general con este proyecto. En particular, considera lo siguiente:

¿Qué casos de uso del mundo real podrían beneficiarse de registrar datos en una hoja de cálculo compartida?

¿Cómo podrías extender este proyecto para incluir campos más complejos, como puntajes o retroalimentación?

¿Cuáles son las limitaciones de usar Google Sheets de esta manera (por ejemplo, escalabilidad, seguridad y manejo de errores)?

Archivos del Proyecto
Archivo Descripcion
Code.gs Código del servidor (Google Apps Script) que maneja las solicitudes POST y GET
app.js Código del cliente (Node.js) que envía y recibe datos
test.js Archivo de pruebas para verificar el funcionamiento del código
package.json Archivo de configuración de Node.js (se genera con npm)
Requisitos Previos
Cuenta de Google

VS Code instalado

Node.js 18 o superior (para fetch nativo)

Conexión a internet

Navegador web

Comandos Utiles
Instalar dependencias
bash
npm install
Ejecutar el cliente
bash

# Enviar un mensaje

node app.js enviarMensaje "Nombre" "correo@example.com"

# Enviar multiples mensajes

node app.js enviarMultiplesMensajes "[{\"nombre\":\"Nombre1\",\"correo\":\"correo1@example.com\"},{\"nombre\":\"Nombre2\",\"correo\":\"correo2@example.com\"}]"

# Obtener todos los mensajes

node app.js obtenerTodosLosMensajes

# Obtener el ultimo mensaje

node app.js obtenerUltimoMensaje
Ejecutar las pruebas
bash
node test.js
