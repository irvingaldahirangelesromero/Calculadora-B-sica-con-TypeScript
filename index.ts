// Seleccionar los elementos del DOM
const valor1 = document.getElementById("val1") as HTMLInputElement;
const valor2 = document.getElementById("val2") as HTMLInputElement;
const res = document.getElementById("res") as HTMLElement;

const suma = document.getElementById("btnSuma") as HTMLButtonElement;
const resta = document.getElementById("btnResta") as HTMLButtonElement;
const division = document.getElementById("btnDivision") as HTMLButtonElement;
const multiplicacion = document.getElementById("btnMultiplicacion") as HTMLButtonElement;

// Funciones matemáticas
function sumar(x: number, y: number): number {
    return x + y;
}

function restar(x: number, y: number): number {
    return x - y;
}

function dividir(x: number, y: number): string {
    if (y === 0) {
        return "Error: División por cero";
    }
    return (x / y).toString();
}

function multiplicar(x: number, y: number): number {
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
