"use strict";

// Función para cargar el contenido de los ejercicios con el diseño de tarjetas
function loadExercise(exercise) {
  const mainContent = document.getElementById("mainContent");
  switch (exercise) {
    case 'ejer01':
      mainContent.innerHTML = `
      <div id="mainContent">
        <div class="container">
          <div class="card">
            <div class="cardTitle">
              <p align="center">Refactorización 01</p>
            </div>
            <div class="cardBody">
              <p align="center">Comprueba que la Función de Refactorización Funciona</p>
            </div>
            <div class="cardFooter">
              <a href="./DOM/ejer01/index.html">&gt;&gt; Función 01</a>
            </div>
          </div>
        </div>
      </div>`
      break;
    case 'ejer02':
      mainContent.innerHTML = `
      <div id="mainContent">
        <div class="container">
          <div class="card">
            <div class="cardTitle">
              <p align="center">Refactorización 02</p>
            </div>
            <div class="cardBody">
              <p align="center">Comprueba que la Función de Refactorización Funciona</p>
            </div>
            <div class="cardFooter">
              <a href="./DOM/ejer02/index.html">&gt;&gt; Función 02</a>
            </div>
          </div>
        </div>
      </div>`
      break;
    default:
      break;
  }
}
