"use strict"

// Credenciales almacenadas internamente
let usuario = "jota";
let contraseña = "dejame";

// Función para solicitar credenciales y manejarlas
function login() {

  while (true) {
     // Solicitar nombre de usuario y contraseña   
    let usuarioIntroducido = prompt("Por favor, ingrese su nombre de usuario:");
    let contraseñaIntroducida = prompt("Por favor, ingrese su contraseña:");

    // Comprobar si el usuario y la contraseña son correctas
    if (usuarioIntroducido == usuario && contraseñaIntroducida == contraseña) {
      alert("Bienvenido!");
      document.getElementById("mainContent").style.display = "block";
      break;
    } else {

      //Controlar que el usuario tenga mas de 3 caracteres
      if (usuarioIntroducido.length < 3) {
        alert("El nombre de usuario debe tener al menos 3 caracteres.");
      } else {
        alert("Nombre de usuario o contraseña incorrectos.");
      }
      
      //Preguntar si quieres vollver a intentarlo
      let reintentar = confirm("¿Desea intentarlo de nuevo?");

      if (!reintentar) {
        alert("Has cancelado el inicio de sesión.");
        break;
      }
    }
  }
}

window.onload = function () {
  login();
};
