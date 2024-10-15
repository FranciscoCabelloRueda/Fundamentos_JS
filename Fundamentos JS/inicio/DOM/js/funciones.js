"use strict"
// Funcion que se puede reutilizar para varios casos
function mostrar() {
    resultado.innerHTML = `Estoy mostrando el resultado del ${resultado.getAttribute('name')}`;
}

// Manejar el logout y eliminar cookies
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function () {
  eraseCookie("username");
  window.location.href = "../../../index.html";
});

