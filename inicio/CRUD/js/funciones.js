"use strict"

// Manejar el logout 
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function () {
  sessionStorage.removeItem("loggedIn"); // Eliminar estado de login
  window.location.href = "../../../index.html";
});

