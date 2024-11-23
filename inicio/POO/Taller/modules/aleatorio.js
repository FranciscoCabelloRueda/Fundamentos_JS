"use strict";

const coches = [
    { nombre: "Skoda", emoji: "🚗" },
    { nombre: "Mercedes", emoji: "🚙" },
    { nombre: "Peugeut", emoji: "🚕" },
    { nombre: "BMW", emoji: "🚓" },
    { nombre: "Volkswagen", emoji: "🚘" }
];

function obtenerCocheAleatorio() {
    return coches[Math.floor(Math.random() * coches.length)];
}

export { obtenerCocheAleatorio };