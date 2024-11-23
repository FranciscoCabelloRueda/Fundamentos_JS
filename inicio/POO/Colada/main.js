"use strict";

import { Pila } from "./classes/Pila.js";
import { obtenerPrendaAleatoria } from "./modules/aleatorio.js";
import { mostrarMensaje } from "./modules/mensaje.js";

const cestaOutput = document.getElementById("cestaOutput");
const obtenerPrendaBtn = document.getElementById("obtenerPrenda");
const añadirPrendaBtn = document.getElementById("añadirPrenda");

const cestaColada = new Pila(10);

añadirPrendaBtn.addEventListener("click", function() {
    const prenda = obtenerPrendaAleatoria();
    const mensaje = cestaColada.introduzco(prenda);
    mostrarMensaje(mensaje);
    actualizarCesta();
});

obtenerPrendaBtn.addEventListener("click", function() {
    const mensaje = cestaColada.obtengo();
    mostrarMensaje(mensaje);
    actualizarCesta();
});

function actualizarCesta() {
    const pila = cestaColada.mostrarPila();
    cestaOutput.innerHTML = pila.map(prenda => `<div class="prenda">${prenda.emoji} ${prenda.nombre}</div>`).join("");
}

