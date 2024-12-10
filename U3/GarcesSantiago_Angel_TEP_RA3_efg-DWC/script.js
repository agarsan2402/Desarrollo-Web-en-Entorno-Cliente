// Asocia un evento de clic al botón con id 'btn' para ejecutar la función comprobarDato
var btn = document.getElementById('btn').addEventListener("click", comprobarDato, false);
var ventana; // Variable para manejar la ventana emergente
// Variables globales para contar las ocurrencias de diferentes figuras
var pockerCont = 0;
var escaleraCompletaCont = 0;
var dobleParejaCont = 0;
var trioCont = 0;
var escaleraSimpleCont = 0;
var ninguna = 0;

// Función para calcular la cantidad de cada figura en 10,000 números
function cantidad() {
    for (let i = 0; i < 10000; i++) {
        // Convierte el número i en una matrícula de 4 dígitos (rellenando con ceros al inicio)
        const num = i.toString().padStart(4, '0').split('').map(Number); // Array de números
        // Verifica la figura de la matrícula y actualiza los contadores correspondientes
        if (pocker(num)) {
            pockerCont++;
        } else if (escaleraCompleta(num)) {
            escaleraCompletaCont++;
        } else if (doblePareja(num)) {
            dobleParejaCont++;
        } else if (trio(num)) {
            trioCont++;
        } else if (escaleraSimple(num)) {
            escaleraSimpleCont++;
        } else {
            ninguna++;
        }
    }
    // Muestra las cantidades calculadas en el elemento con id 'cantidad' en "inicio.htm"
    document.getElementById('cantidad').innerHTML = `
        <ul>
            <li>Póker: ${pockerCont}</li>
            <li>Escalera Completa: ${escaleraCompletaCont}</li>
            <li>Escalera Simple: ${escaleraSimpleCont}</li>
            <li>Trío: ${trioCont}</li>
            <li>Doble Pareja: ${dobleParejaCont}</li>
            <li>Ninguna: ${ninguna}</li>
        </ul>
    `;
}

// Función para comprobar la matrícula ingresada por el usuario
function comprobarDato() {
    var matricula = []; // Arreglo para almacenar la matrícula convertida en números
    var m = document.getElementById('matricula').value; // Obtiene el valor del input
    // Validación de que la matrícula sea numérica y tenga exactamente 4 dígitos
    if (isNaN(m) || m.length !== 4) {
        document.getElementById('error').innerHTML = "matrícula incorrecta"; // Muestra un mensaje de error
    } else {
        document.getElementById('error').innerHTML = ""; // Limpia el mensaje de error
        // Abre una ventana emergente para mostrar los resultados
        ventana = window.open("estadisticas.htm", "", "width=1200,height=700");
        ventana.onload = function () { // Espera a que la nueva ventana cargue
            matricula = m.split('').map(Number); // Convierte la matrícula en un array de numeros
            // Comrpobar la figura correspondiente a la matrícula
            if (pocker(matricula)) {
                ventana.document.getElementById('figura').innerHTML = "La figura es Póker";
            } else if (escaleraCompleta(matricula)) {
                ventana.document.getElementById('figura').innerHTML = "La figura es Escalera Completa";
            } else if (doblePareja(matricula)) {
                ventana.document.getElementById('figura').innerHTML = "La figura es Doble Pareja";
            } else if (trio(matricula)) {
                ventana.document.getElementById('figura').innerHTML = "La figura es Trío";
            } else if (escaleraSimple(matricula)) {
                ventana.document.getElementById('figura').innerHTML = "La figura es Escalera Simple";
            } else {
                ventana.document.getElementById('figura').innerHTML = "No hay ninguna figura";
            }
            mostrarEstadisticas(); // Muestra las estadísticas calculadas
        }
        setCookie(); // Registra la matrícula correcta en una cookie
        // Cierra la ventana automáticamente después de 10 segundos
        setTimeout(function () {
            ventana.close();
        }, 10000);
    }
}

// Muestra las estadísticas en la ventana emergente
function mostrarEstadisticas() {
    ventana.document.getElementById('porcentajes').innerHTML = `
        <ul>
            <li>Probabilidad de Póker: ${((pockerCont / 10000) * 100).toFixed(2)}%</li>
            <li>Probabilidad de Escalera Completa: ${((escaleraCompletaCont / 10000) * 100).toFixed(2)}%</li>
            <li>Probabilidad de Escalera Simple: ${((escaleraSimpleCont / 10000) * 100).toFixed(2)}%</li>
            <li>Probabilidad de Trío: ${((trioCont / 10000) * 100).toFixed(2)}%</li>
            <li>Probabilidad de Doble Pareja: ${((dobleParejaCont / 10000) * 100).toFixed(2)}%</li>
        </ul>
    `;
}

//Para las cookies me he respaldado en un ejemplo de w3school https://www.w3schools.com/js/js_cookies.asp
// Registra la cantidad de matrículas correctas utilizando cookies
function setCookie() {
    let cont = parseInt(getCookie('matriculasCorrectas')) || 0; // Obtiene el valor actual de la cookie o inicia en 0
    cont++; // Incrementa el contador
    // Guarda la cookie con el nuevo valor, con duración de 7 días
    document.cookie = `matriculasCorrectas=${cont}; path=/; expires=${new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toUTCString()}`;
    alert("Matriculas correctas: " + cont); // Muestra un mensaje con el valor actualizado
}

// Función para obtener el valor de una cookie por su nombre
function getCookie(nombreCookie) {
    let nueva = nombreCookie + "=";
    let decodedCookie = decodeURIComponent(document.cookie); // Decodifica las cookies
    let ca = decodedCookie.split(';'); // Divide las cookies en un arreglo
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim(); // Elimina espacios iniciales
        if (c.indexOf(nueva) == 0) {
            return c.substring(nueva.length, c.length); // Devuelve el valor de la cookie
        }
    }
    return ""; // Devuelve cadena vacía si no encuentra la cookie
}
//Funciones que comprueban cada figura
// Función para comprobar si hay Doble Pareja
function doblePareja(m) {
    m.sort(); // Ordena los números
    return (m[0] === m[1] && m[2] === m[3]); // Verifica si hay dos pares consecutivos
}

// Función para comprobar si hay un Trío
function trio(m) {
    m.sort(); // Ordena los números
    if (m[0] !== m[1]) m.reverse(); // Asegura que el trío esté al inicio
    let cont = 1; // Contador para contar repeticiones
    for (let i = 1; i < m.length; i++) {
        if (m[0] === m[i]) cont++;
    }
    return cont === 3; // Devuelve true si hay tres iguales
}

// Función para comprobar si hay Escalera Simple
function escaleraSimple(m) {
    m.sort((a, b) => a - b); // Ordena los números
    m = m.filter((item, index) => m.indexOf(item) === index); // Elimina duplicados
    let consecutivos = 0;
    for (let i = 0; i < m.length - 1; i++) {
        if (m[i + 1] === m[i] + 1) consecutivos++;
        else consecutivos = 0;
        if (consecutivos === 2) return true; // Exactamente 3 números consecutivos
    }
    return false;
}

// Función para comprobar si hay Escalera Completa
function escaleraCompleta(m) {
    m.sort(); // Ordena los números
    let cont = 0;
    for (let i = 0; i < m.length - 1; i++) {
        if (m[i] + 1 === m[i + 1]) cont++;
    }
    return cont === 3; // 4 números consecutivos
}

// Función para comprobar si hay Póker (4 iguales)
function pocker(m) {
    let cont = 0;
    for (let i = 0; i < m.length - 1; i++) {
        if (m[i] === m[i + 1]) cont++;
    }
    return cont === 3; // 3 repeticiones consecutivas
}
