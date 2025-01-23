"use strict";
// Seleccionar los elementos del DOM
const valor1 = document.getElementById("val1");
const valor2 = document.getElementById("val2");
const res = document.getElementById("res");
const suma = document.getElementById("btnSuma");
const resta = document.getElementById("btnResta");
const division = document.getElementById("btnDivision");
const multiplicacion = document.getElementById("btnMultiplicacion");
// Funciones matemáticas
function sumar(x, y) {
    return x + y;
}
function restar(x, y) {
    return x - y;
}
function dividir(x, y) {
    if (y === 0) {
        return "Error: División por cero";
    }
    return (x / y).toString();
}
function multiplicar(x, y) {
    return x * y;
}
// Agregar eventos a los botones y reflejar el resultado en el HTML
suma.addEventListener("click", () => {
    const resultado = sumar(parseFloat(valor1.value), parseFloat(valor2.value));
    res.textContent = `Resultado: ${resultado}`;
});
resta.addEventListener("click", () => {
    const resultado = restar(parseFloat(valor1.value), parseFloat(valor2.value));
    res.textContent = `Resultado: ${resultado}`;
});
division.addEventListener("click", () => {
    const resultado = dividir(parseFloat(valor1.value), parseFloat(valor2.value));
    res.textContent = `Resultado: ${resultado}`;
});
multiplicacion.addEventListener("click", () => {
    const resultado = multiplicar(parseFloat(valor1.value), parseFloat(valor2.value));
    res.textContent = `Resultado: ${resultado}`;
});
