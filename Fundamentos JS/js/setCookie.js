"use strict";

// Función para crear una cookie
function setCookie(name, value, days) {
    if (navigator.cookieEnabled == true) { // comprueba que el navegador sea compatible
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Tiempo de expiración en días
    let expires = "expires=" + date.toUTCString();
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";" + expires + ";" + "path=/;SameSite=Strict;Secure";
    } else {
      alert("El uso de cookies está desactivado");
    }
  }