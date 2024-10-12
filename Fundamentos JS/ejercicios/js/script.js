"use strict";

// Manejar el logout
logoutButton.addEventListener("click", function (event) {
    window.location.href = "../index.html"; 
});

// Manejar la selección de los ejercicios del menú "DOM"
document.getElementById("ejer01").addEventListener("click", function () {
    loadExercise('ejer01');
});

document.getElementById("ejer02").addEventListener("click", function () {
    loadExercise('ejer02');
});
