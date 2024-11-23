"use strict";

const prendas = [
    { nombre: "Zapato", emoji: "👞" },
    { nombre: "Sombrero", emoji: "🎩" },
    { nombre: "Calcetín", emoji: "🧦" },
    { nombre: "Pantalón", emoji: "👖" },
    { nombre: "Camisa", emoji: "👕" }
];

function obtenerPrendaAleatoria() {
    return prendas[Math.floor(Math.random() * prendas.length)];
}

export { obtenerPrendaAleatoria };