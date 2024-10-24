// Asigna el evento click al botón
var boton = document.getElementById('mesAño');
boton.addEventListener("click", extraerMesAño, false);

// Función para extraer el mes y el año
function extraerMesAño() {
    // Convierte el valor del input a una fecha
    var f = new Date(document.getElementById("fecha").value);

    // Extrae el mes y el año
    var mes = f.getMonth() + 1; // Sumar 1 porque getMonth() devuelve de 0 a 11
    var año = f.getFullYear();

    // Muestra el resultado
    document.getElementById('res').innerHTML = "Mes: " + mes + ", Año: " + año;
}