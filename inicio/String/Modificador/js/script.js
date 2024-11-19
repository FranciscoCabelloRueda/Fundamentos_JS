"use strict"

let texto = document.getElementById("texto");
let animacion;
let tiempo = 1000;
let resultado = "";
const mayusculas = document.querySelectorAll(".mayuscula");
const minusculas = document.querySelectorAll(".minuscula");
const animaciones = document.querySelectorAll(".animacion");

//Llama a la función de las mayasculas seleccionada
for (let mayuscula of mayusculas) {

    mayuscula.addEventListener("click", function () {
        resultado = operacionMayus(texto.value, mayuscula.value);
        texto.value = resultado;
    });
}

//Llama a la función de las minusculas seleccionada
for (let minuscula of minusculas) {
    minuscula.addEventListener("click", function () {
        resultado = operacionMinus(texto.value, minuscula.value);
        texto.value = resultado;
    });
}

//Determina que tipo de función de las mayusculas es
function operacionMayus(texto, mayuscula) {
    let resultado;
    switch (mayuscula) {
        case "A-Z":
            resultado = mayusculasTodas(texto);
            break;
        case "A_":
            resultado = mayusculasPrimeras(texto);
            break;
        case "_Z":
            resultado = mayusculasUltimas(texto);
            break;
        case "AEIOU":
            resultado = mayusculasVocales(texto);
            break;
        case "BCD":
            resultado = mayusculasConsonantes(texto);
            break;
    }
    
    return resultado;
}

//Determina que tipo de función de las minusculas es
function operacionMinus(texto, minuscula) {
    let resultado;
    switch (minuscula) {
        case "a-z":
            resultado = minusculasTodas(texto);
            break;
        case "a_":
            resultado = minusculasPrimeras(texto);
            break;
        case "_z":
            resultado = minusculasUltimas(texto);
            break;
        case "aeiou":
            resultado = minusculasVocales(texto);
            break;
        case "bcd":
            resultado = minusculasConsonantes(texto);
            break;
        
    }
    return resultado;
}

//Llama a la función de aleatorioAnimado
document.getElementById("aleatorio").addEventListener("click", function (){
    aleatorioAnimado(texto.value);
});

//Llama a la función de Parar
document.getElementById("parar").addEventListener("click", function (){
    parar();
});

//Llama a la función de Rapido
document.getElementById("rapido").addEventListener("click", function (){
    rapido();
}); 

//Llama a la función de Lento
document.getElementById("lento").addEventListener("click", function (){
    lento();
}); 

//Llama a la función para cargar la API
document.getElementById("cargar").addEventListener("click", async function (){
    solicitar();
}) ;




