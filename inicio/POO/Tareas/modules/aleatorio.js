"use strict";

const tareas = [
    "Limpiarte los dientes",
    "Hacer la cama",
    "Limpiar el baño",
    "Ir a la ducha",
    "Hacer la cena",
    "Hacer ejercicio",
    "Leer un libro",
    "Ordenar la habitación",
    "Hacer los deberes",
    "Salir ha correr"
];

function obtenerTareaAleatoria() {
    return tareas[Math.floor(Math.random() * tareas.length)];
}

function obtenerPrioridadAleatoria() {
    return Math.floor(Math.random() * 10);
}

export { obtenerTareaAleatoria, obtenerPrioridadAleatoria };