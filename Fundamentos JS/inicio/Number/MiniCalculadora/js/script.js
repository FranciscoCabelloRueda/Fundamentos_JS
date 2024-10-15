"use strict"

let resultado = 0;

//Obtiene los operandos
function obtenerOperandos() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}

//Actualiza el resultado
function actualizarResultado(valor) {
    document.getElementById('resultado').innerText = valor;
    resultado = valor;
}

//Realiza una suma
function sumar() {
    const { num1, num2 } = obtenerOperandos();
    actualizarResultado(num1 + num2);
}

//Realiza una resta
function restar() {
    const { num1, num2 } = obtenerOperandos();
    actualizarResultado(num1 - num2);
}

//Realiza una multiplicación
function multiplicar() {
    const { num1, num2 } = obtenerOperandos();
    actualizarResultado(num1 * num2);
}

//Realiza una división
function dividir() {
    const { num1, num2 } = obtenerOperandos();
    if (num2 === 0) {
        alert("No se puede dividir por 0");
    } else {
        actualizarResultado(num1 / num2);
    }
}

//Convierte el resultado en un número entero
function entero() {
    actualizarResultado(Math.floor(resultado));
}

//Muestra solo la parte decimal del resultado
function decimal() {
    actualizarResultado((resultado % 1).toFixed(4));
}

//Realiza una factorial del primer número
function factorial() {
    const { num1 } = obtenerOperandos();
    if (num1 < 0) {
        alert("El factorial no está definido para números negativos");
        return;
    }
    let fact = 1;
    for (let i = 1; i <= num1; i++) {
        fact *= i;
    }
    actualizarResultado(fact);
}