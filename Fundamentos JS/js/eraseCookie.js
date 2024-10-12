"use strict";

// Función para borrar una cookie
function eraseCookie(name) {
    document.cookie = encodeURIComponent(name) + "=;" + "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=Strict;Secure";
  }