"use strict"

//Función para convertir el número decimal
function convert() {
  let number = document.getElementById('number').value;

  // Verificar si el número es válido
  if (number === '') {
    alert('Por favor, ingrese un número válido.');
    return;
  }

  // Convertir el input a un número entero
  let decimalNumber = parseInt(number);

  // Conversiones
  let binary = decimalNumber.toString(2);
  let octal = decimalNumber.toString(8);
  let hex = decimalNumber.toString(16).toUpperCase();

  // Mostrar los resultados
  document.getElementById('binaryResult').textContent = binary;
  document.getElementById('octalResult').textContent = octal;
  document.getElementById('hexResult').textContent = hex;
}

