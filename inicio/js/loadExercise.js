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
    case 'MiniCalculadora':
      mainContent.innerHTML = `
      <div id="mainContent">
        <div class="container">
          <div class="card">
            <div class="cardTitle">
              <p align="center">MiniCalculadora</p>
            </div>
            <div class="cardBody">
              <p align="center">Calculadora simple para calculos básicos</p>
            </div>
            <div class="cardFooter">
              <a href="./Number/MiniCalculadora/index.html">&gt;&gt; MiniCalculadora</a>
            </div>
          </div>
        </div>
      </div>`
      break;
    case 'Conversor':
      mainContent.innerHTML = `
      <div id="mainContent">
        <div class="container">
          <div class="card">
            <div class="cardTitle">
              <p align="center">Conversor</p>
            </div>
            <div class="cardBody">
              <p align="center">Pasa de Decimal a Binario, Octal y Hexadecimal</p>
            </div>
            <div class="cardFooter">
              <a href="./Number/Conversor/index.html">&gt;&gt; Conversor</a>
            </div>
          </div>
        </div>
      </div>`
      break;
    case 'Modificador':
      mainContent.innerHTML = `
      <div id="mainContent">
        <div class="container">
          <div class="card">
            <div class="cardTitle">
              <p align="center">Modificador</p>
            </div>
            <div class="cardBody">
              <p align="center">Modifica un texto introducido por teclado o cargado desde una API Web</p>
            </div>
            <div class="cardFooter">
              <a href="./String/Modificador/index.html">&gt;&gt; Modificador</a>
            </div>
          </div>
        </div>
      </div>`
      break;
    case 'Matrices':
      mainContent.innerHTML = `
      <div id="mainContent">
        <div class="container">
          <div class="card">
            <div class="cardTitle">
              <p align="center">Matrices</p>
            </div>
            <div class="cardBody">
              <p align="center">Realiza operaciones con Matrices</p>
            </div>
            <div class="cardFooter">
              <a href="./Array/Matrices/index.html">&gt;&gt; Matrices</a>
            </div>
          </div>
        </div>
      </div>`
      break;
    case 'Cookies':
      mainContent.innerHTML = `
      <div id="mainContent">
        <div class="container">
          <div class="card">
            <div class="cardTitle">
              <p align="center">Cookies</p>
            </div>
            <div class="cardBody">
              <p align="center">Almacena pares de datos con Cookies</p>
            </div>
            <div class="cardFooter">
              <a href="./CRUD/Cookies/index.html">&gt;&gt; Cookies</a>
            </div>
          </div>
        </div>
      </div>`
      break;
    case 'IndexDB':
      mainContent.innerHTML = `
      <div id="mainContent">
        <div class="container">
          <div class="card">
            <div class="cardTitle">
              <p align="center">IndexDB</p>
            </div>
            <div class="cardBody">
              <p align="center">Almacena pares de datos con IndexDB</p>
            </div>
            <div class="cardFooter">
              <a href="./CRUD/IndexDB/index.html">&gt;&gt; IndexDB</a>
            </div>
          </div>
        </div>
      </div>`
      break;
    case 'LocalStorage':
      mainContent.innerHTML = `
        <div id="mainContent">
          <div class="container">
            <div class="card">
              <div class="cardTitle">
                <p align="center">LocalStorage</p>
              </div>
              <div class="cardBody">
                <p align="center">Almacena pares de datos con LocalStorage</p>
              </div>
              <div class="cardFooter">
                <a href="./CRUD/LocalStorage/index.html">&gt;&gt; LocalStorage</a>
              </div>
            </div>
          </div>
        </div>`
        break;
    case 'Colada':
      mainContent.innerHTML = `
        <div id="mainContent">
          <div class="container">
            <div class="card">
              <div class="cardTitle">
                <p align="center">Colada</p>
              </div>
              <div class="cardBody">
                <p align="center">Gestion de la colada con una Pila</p>
              </div>
              <div class="cardFooter">
                <a href="./POO/Colada/index.html">&gt;&gt; Colada</a>
              </div>
            </div>
          </div>
        </div>`
        break;
    case 'Taller':
      mainContent.innerHTML = `
        <div id="mainContent">
          <div class="container">
            <div class="card">
              <div class="cardTitle">
                <p align="center">Taller</p>
              </div>
              <div class="cardBody">
                <p align="center">Gestion de la lista de reparaciones en el Taller con una Cola</p>
              </div>
              <div class="cardFooter">
                <a href="./POO/Taller/index.html">&gt;&gt; Taller</a>
              </div>
            </div>
          </div>
        </div>`
        break;
    case 'Tareas':
      mainContent.innerHTML = `
        <div id="mainContent">
          <div class="container">
            <div class="card">
              <div class="cardTitle">
                <p align="center">Tareas</p>
              </div>
              <div class="cardBody">
                <p align="center">Gestión de Tareas con una Lista</p>
              </div>
              <div class="cardFooter">
                <a href="./POO/Tareas/index.html">&gt;&gt; Tareas</a>
              </div>
            </div>
          </div>
        </div>`
        break;
    default:
        break;    
  }
}