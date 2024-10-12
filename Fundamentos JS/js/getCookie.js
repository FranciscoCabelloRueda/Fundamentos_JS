"use strict";

// Función para obtener el valor de una cookie
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