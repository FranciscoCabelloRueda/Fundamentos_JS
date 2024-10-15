"use strict"

// Manejar el logout y eliminar cookies
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function () {
  eraseCookie("username");
  window.location.href = "../../../index.html";
});

