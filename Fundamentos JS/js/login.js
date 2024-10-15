"use strict";

// Usuario y Contraseña
const storedUsername = "Fran";
const storedPassword = "123456";

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

// Obtener Referencias a los campos de entrada y al botón de Submit
const usernameInput = document.getElementById("username");
usernameInput.addEventListener('focus', function() {
  if(this.value == 'Fran') {
    this.value = '';
  }
});

usernameInput.addEventListener('blur', function() {
  if(this.value == '') {
    this.value = 'Fran';
  }
});
const passwordInput = document.getElementById("password");
passwordInput.addEventListener('focus', function() {
  if(this.value == '123456') {
    this.value = '';
  }
});

passwordInput.addEventListener('blur', function() {
  if(this.value == '') {
    this.value = '123456';
  }
});
const submitButton = loginForm.querySelector('button[type="submit"]');

// Verificar si ya existe una cookie al cargar la página
window.onload = function () {
  let usernameCookie = getCookie("username");
  if (usernameCookie !== "") {
    window.location.href = "./inicio/index.html";
  }
};

// Manejar el envío del formulario de login
submitButton.addEventListener("click", function (event) {

  // Obtener valores ingresados por el usuario
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;

  // Validar que el nombre de usuario tiene más de 3 caracteres
  const usernameRegex = /^.{3,}$/;
  if (!usernameRegex.test(usernameValue)) {
    alert("El nombre de usuario debe tener al menos 3 caracteres.");
    return;
  }

  // Validar que el usuario y la contraseña son correctas
  if (usernameValue === storedUsername && passwordValue === storedPassword) {
    // Crear una cookie con el nombre de usuario, expirando en 7 días
    setCookie("username", usernameValue, 7);

    loginMessage.style.color = "green";
    loginMessage.innerText = `¡Bienvenido, ${usernameValue}!`;

    // Desactivar campos y botón
    usernameInput.disabled = true;
    passwordInput.disabled = true;
    submitButton.disabled = true;

   // Esperar 2 segundos antes de mostrar el contenido principal
   setTimeout(function () {
    window.location.href = "./inicio/index.html"; 
  }, 2000); // 2000 milisegundos = 2 segundos
  
  } else {
  // Credenciales incorrectas
  alert("Nombre de usuario o contraseña incorrectos.");
  return;
  }
});