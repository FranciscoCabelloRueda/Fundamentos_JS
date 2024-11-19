"use strict"
// Funcion que se puede reutilizar para varios casos
function mostrar() {
    resultado.innerHTML = `Estoy mostrando el resultado del ${resultado.getAttribute('name')}`;
}

// Manejar el logout 
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function () {
  sessionStorage.removeItem("loggedIn"); // Eliminar estado de login
  window.location.href = "../../../index.html";
});
