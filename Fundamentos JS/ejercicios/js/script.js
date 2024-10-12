"use strict";

// Manejar el logout y eliminar cookies
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function () {
  eraseCookie("username");
  window.location.href = "../index.html";
});

// Manejar la selección de los ejercicios del menú "DOM"
document.getElementById("ejer01").addEventListener("click", function () {
    loadExercise('ejer01');
});

document.getElementById("ejer02").addEventListener("click", function () {
    loadExercise('ejer02');
});
