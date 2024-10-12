Proyecto 3: Uso de `window.onload`
==================================

En esta versión, el proceso de autenticación se inicia cuando la ventana (`window`) ha terminado de cargarse completamente, incluyendo todos los recursos como imágenes y estilos.

Instrucciones
-------------

### Carga del Script

En el archivo `index.html`, incluye el script `login.js` **sin** el atributo `defer`:

html

Copy code

`<script src="./js/login.js"></script>`

### Funcionamiento

-   El evento `window.onload` asegura que el código dentro de su función se ejecute solo después de que toda la página esté completamente cargada.
-   El resto del proceso de autenticación es similar a las versiones anteriores.

Explicación del Código
----------------------

### Uso de `window.onload`

Este evento se dispara después de que todos los elementos de la página han sido cargados. Es útil cuando el script depende de recursos que necesitan estar completamente cargados.

### Encapsulación

Todo el código está dentro de la función anónima asignada a `window.onload`, evitando contaminar el espacio global.

Consideraciones
---------------

### Tiempo de Carga

El uso de `window.onload` puede retrasar la ejecución del script hasta que todos los recursos hayan sido cargados, lo que podría afectar la rapidez con la que el usuario puede interactuar con la página.

### Necesidad de `window.onload`

Si no tienes dependencias de recursos que requieran estar completamente cargados, podrías omitir `window.onload` y usar `DOMContentLoaded` o el atributo `defer`.

Resumen de las Diferencias entre las Versiones
==============================================

Proyecto 1: Solo `defer`
------------------------

-   El script se carga y ejecuta después de que el DOM está listo.
-   El código se ejecuta directamente sin funciones o eventos adicionales.
-   Es el método más simple y eficiente si solo necesitas que el DOM esté cargado.

Proyecto 2: Función `login()`
-----------------------------

-   El código de autenticación está encapsulado en una función.
-   Mejora la organización y legibilidad del código.
-   La función se llama inmediatamente después de ser definida.

Proyecto 3: Uso de `window.onload`
----------------------------------

-   El script espera hasta que todos los recursos de la página estén cargados.
-   Puede ser útil si el código depende de recursos externos.
-   Podría retrasar la interacción inicial con el usuario.