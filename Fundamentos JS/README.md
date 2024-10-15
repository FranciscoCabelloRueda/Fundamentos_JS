# Fundamentos JS 

Este proyecto implementa un sistema de inicio de sesión utilizando un **formulario HTML** con validación en JavaScript. Además, gestiona el inicio de sesión del usuario mediante **cookies**, lo que permite mantener la sesión activa incluso si se recarga la página o se vuelve a visitar el sitio. Dentro de este podemos econtrar ejercicios de **DOM** y de **Number**

## Login Con Cookies

### 1. **Inicio de sesión con validación**
El formulario HTML solicita un nombre de usuario y una contraseña. Estos valores se comparan con credenciales almacenadas (en este caso, `Fran` y `123456` para simplificar el ejemplo). Si las credenciales son correctas, se crea una **cookie** para mantener la sesión.

### 2. **Manejo de Cookies**
El código gestiona cookies para almacenar el estado del inicio de sesión. Las funciones de creación, obtención y eliminación de cookies permiten gestionar la sesión del usuario de manera eficiente:

- **Creación de la cookie**:
  Una cookie se crea cuando el usuario inicia sesión exitosamente. En este caso, se guarda el nombre de usuario en la cookie, lo que indica que el usuario ha iniciado sesión.

  ```javascript
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";" + expires + ";" + "path=/;SameSite=Strict;Secure";
  ```
- **Obtención de la cookie**:
   La función getCookie se utiliza para obtener el valor de una cookie. Si la cookie está presente, devuelve su valor; si no, se devuelve una cadena vacía.

   ```javascript
   function getCookie(name) {
    name = name + "=";
    let decodedCookies = decodeURIComponent(document.cookie);
    let cookies = decodedCookies.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie[1];
      }
    }
    return "";
  }
  ```

### 3. **Redirección**
Si la cookie del usuario ya está presente al cargar la página, el código redirige automáticamente al usuario al contenido principal sin requerir que vuelva a ingresar las credenciales.

- **Verificación de cookie al cargar la página**: 
   En el evento window.onload, el código verifica si la cookie username existe. Si se encuentra, se redirige al usuario automáticamente al contenido principal:

```javascript
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function () {
  eraseCookie("username");
  window.location.href = "/index.html";
});
```

### 4. **Cierre de sesión**
Para permitir al usuario cerrar sesión, puedes añadir un botón o enlace en la página principal que elimine la cookie y redirija nuevamente al formulario de inicio de sesión.

- **Eliminar cookie**: Eliminar una cookie implica establecerla con una fecha de expiración en el pasado. La función eraseCookie permite borrar la cookie de sesión:

```javascript

function eraseCookie(name) {
    document.cookie = encodeURIComponent(name) + "=;" + "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=Strict;Secure";
  }
```

### 5. **Botón de cierre de sesión**
Se ha añadido un botón que elimina las cookies y vuelve al formulario de inicio de sesión

### 6. **Nombre de usuario en la bienvenida**
Ahora al iniciar sesión se muestra el nombre del usuario

## Sección Number

### 1. **MiniCalculadora**
Esta calculadora recoje dos valores introducidos por teclado y en función del calculo escogido realiza la operación y muestra el resultado, estas operaciones pueden ser sumas, restas, multiplicación, división, factorial del primer número, tomar la parte entera del resultado y tomar la parte decimal del resultado.

```javascript
  function sumar() {
    const { num1, num2 } = obtenerOperandos();
    actualizarResultado(num1 + num2);
}

function restar() {
    const { num1, num2 } = obtenerOperandos();
    actualizarResultado(num1 - num2);
}

function multiplicar() {
    const { num1, num2 } = obtenerOperandos();
    actualizarResultado(num1 * num2);
}

function dividir() {
    const { num1, num2 } = obtenerOperandos();
    if (num2 === 0) {
        alert("No se puede dividir por 0");
    } else {
        actualizarResultado(num1 / num2);
    }
}

function entero() {
    actualizarResultado(Math.floor(resultado));
}

function decimal() {
    actualizarResultado((resultado % 1).toFixed(4));
}

function factorial() {
    const { num1 } = obtenerOperandos();
    if (num1 < 0) {
        alert("El factorial no está definido para números negativos");
        return;
    }
    let fact = 1;
    for (let i = 1; i <= num1; i++) {
        fact *= i;
    }
    actualizarResultado(fact);
}
```

### 2. **Conversor**
Este conversor recoje un número decimal introducido por teclado y devuelve el resultado en binario, en octal y en hexadecimal

```javascript
function convert() {
  let number = document.getElementById('number').value;

  if (number === '') {
    alert('Por favor, ingrese un número válido.');
    return;
  }

  let decimalNumber = parseInt(number);

  let binary = decimalNumber.toString(2);
  let octal = decimalNumber.toString(8);
  let hex = decimalNumber.toString(16).toUpperCase();

  document.getElementById('binaryResult').textContent = binary;
  document.getElementById('octalResult').textContent = octal;
  document.getElementById('hexResult').textContent = hex;
}
```