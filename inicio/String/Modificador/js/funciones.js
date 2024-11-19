"use strict"

//Función para poner todas las letras mayusculas
function mayusculasTodas(texto) {
  return texto.toUpperCase();
}

//Función para poner la primera letra mayuscula
function mayusculasPrimeras(texto) {
  let primera = /\b[a-z]/g;

  return texto.replace(primera, (match) => match.toUpperCase());
}

//Función para poner la ultima letra mayuscula
function mayusculasUltimas(texto) {
  let ultima = /[a-z]\b/g;

  return texto.replace(ultima, (match) => match.toUpperCase());
}

//Función para poner todas las vocales mayusculas
function mayusculasVocales(texto) {
  let todas = /[aeiou]/g;

  return texto.replace(todas, (match) => match.toUpperCase());
}

//Función para poner todas las consonantes mayusculas
function mayusculasConsonantes(texto) {
  let todas = /[^aeiou\s]/g;

  return texto.replace(todas, (match) => match.toUpperCase());
}

//Función para poner todas las letras minusculas
function minusculasTodas(texto) {
  return texto.toLowerCase();
}

//Función para poner la primera letra minuscula
function minusculasPrimeras(texto) {
  let primera = /\b[A-Z]/g;

  return texto.replace(primera, (match) => match.toLowerCase());
}

//Función para poner la ultima letra minuscula
function minusculasUltimas(texto) {
  let ultima = /[A-Z]\b/g;

  return texto.replace(ultima, (match) => match.toLowerCase());
}

//Función para poner todas las vocales minusculas
function minusculasVocales(texto) {
  let todas = /[AEIOU]/g;

  return texto.replace(todas, (match) => match.toLowerCase());
}

//Función para poner todas las consonantes minusculas
function minusculasConsonantes(texto) {
  let todas = /[^AEIOU\s]/g;

  return texto.replace(todas, (match) => match.toLowerCase());
}

//Funcion para mostrar el contenido de la API
async function solicitar() {
  texto.value = "";
  let json = await cargar('https://api.chucknorris.io/jokes/random');
  texto.value = json.value;
}

//Funcion para cargar el contenido de la API
async function cargar(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

//Función para modificar las letras del texto de forma aleatoria
function aleatorio(texto) {
  let caracteres = [];

  for (let letra of texto) {
    let random = Math.random();

    if (random < 0.5) {
      caracteres.push(letra.toUpperCase());
    } else {
      caracteres.push(letra.toLowerCase());
    }
  }

  return caracteres.join("");
};

//Función para animar el texto 
function aleatorioAnimado(texto) {

  if (animacion) {
    clearInterval(animacion);
  }
  animacion = setInterval(() => {
    let intervalo = aleatorio(texto);
    document.getElementById("texto").value = intervalo;
  }, tiempo);
  return texto;
}

//Función para parar la animación
function parar() {
  clearInterval(animacion);
}

//Función para acelerar la animación
function rapido() {
  tiempo -= 200;
  aleatorioAnimado(texto.value);
}

//Función para frenar la animación
function lento() {
  tiempo += 200;
  aleatorioAnimado(texto.value);
};