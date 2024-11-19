"use strict";

// Manejar el logout 
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function () {
  sessionStorage.removeItem("loggedIn"); // Eliminar estado de login
  window.location.href = "../index.html";
});
// Manejar la selección de los ejercicios del menú "DOM"
document.getElementById("ejer01").addEventListener("click", function () {
    loadExercise('ejer01');
});

document.getElementById("ejer02").addEventListener("click", function () {
    loadExercise('ejer02');
});

document.getElementById("MiniCalculadora").addEventListener("click", function () {
  loadExercise('MiniCalculadora');
});

document.getElementById("Conversor").addEventListener("click", function () {
  loadExercise('Conversor');
});

document.getElementById("Modificador").addEventListener("click", function () {
  loadExercise('Modificador');
});

document.getElementById("Matrices").addEventListener("click", function () {
  loadExercise('Matrices');
});

document.getElementById("Cookies").addEventListener("click", function () {
  loadExercise('Cookies');
});


document.getElementById("IndexDB").addEventListener("click", function () {
  loadExercise('IndexDB');
});


document.getElementById("LocalStorage").addEventListener("click", function () {
  loadExercise('LocalStorage');
});


