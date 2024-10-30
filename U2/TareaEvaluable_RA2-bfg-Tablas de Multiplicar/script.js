// Función para generar la tabla de multiplicar
function generarTablaMultiplicacion(numero, elementoId) {
    let cad = ""; // Variable para almacenar la cadena de texto con los resultados de la tabla
    for (let i = 1; i <= 10; i++) {
        // Agrega cada línea de la tabla al texto acumulado en 'cad'
        cad += numero + " * " + i + " = " + (numero * i) + "<br>";
    }
    // Muestra el resultado en el elemento HTML especificado por 'elementoId'
    document.getElementById(elementoId).innerHTML = cad;
}

// Función para generar la tabla de suma
function generarTablaSuma(numero, elementoId) {
    let cad = ""; // Inicializa la cadena de texto para los resultados
    let i = 1;
    do {
        // Construye cada línea de la tabla de suma
        cad += numero + " + " + i + " = " + (numero + i) + "<br>";
        i++;
    } while (i <= 10); // Continúa hasta que 'i' alcance el valor 10
    // Muestra el resultado en el elemento HTML especificado
    document.getElementById(elementoId).innerHTML = cad;
}

// Función para generar la tabla de división
function generarTablaDivision(numero, elementoId) {
    let cad = ""; // Inicializa la cadena de texto para los resultados de la división
    let j = 1;
    while (j <= 10) {
        // Calcula el resultado de la división, limitando a un decimal
        cad += numero + " / " + j + " = " + (numero / j).toFixed(1) + "<br>";
        j++;
    }
    // Muestra el resultado en el elemento HTML especificado
    document.getElementById(elementoId).innerHTML = cad;
}

// Función para realizar operaciones con desplazamiento de bits
function operacionDesplazamientoBit(op1, op2, operacion, elementoId) {
    let cad = ""; // Almacena el resultado de la operación en texto
    let cont = 0; // Contador para determinar el número de desplazamientos
    let acu = op2;

    // Cuenta cuántos desplazamientos son necesarios dividiendo por 2 hasta llegar a 1
    while (acu > 1) {
        acu /= 2;
        cont++;
    }

    // Realiza la operación deseada: división o multiplicación mediante desplazamientos de bits
    if (operacion === "dividir") {
        cad = op1 + " / " + op2 + " = " + (op1 >> cont) + "<br>"; // Desplazamiento a la derecha para división
    } else if (operacion === "multiplicar") {
        cad = op1 + " * " + op2 + " = " + (op1 << cont) + "<br>"; // Desplazamiento a la izquierda para multiplicación
    }
    // Agrega el resultado al contenido actual del elemento HTML especificado
    document.getElementById(elementoId).innerHTML += cad;
}

// Llamada a funciones para mostrar resultados en la página

// Genera y muestra la tabla de multiplicar del 7 en el elemento con id 't7'
generarTablaMultiplicacion(7, 't7');

// Genera y muestra la tabla de sumar del 8 en el elemento con id 't8'
generarTablaSuma(8, 't8');

// Genera y muestra la tabla de dividir del 9 en el elemento con id 't9'
generarTablaDivision(9, 't9');

// Realiza y muestra las operaciones con desplazamientos de bits en el elemento con id 'd'
operacionDesplazamientoBit(125, 8, "dividir", 'd');
operacionDesplazamientoBit(40, 4, "multiplicar", 'd');
operacionDesplazamientoBit(25, 2, "dividir", 'd');
operacionDesplazamientoBit(10, 16, "multiplicar", 'd');
