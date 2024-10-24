var caja = document.getElementById("caja");
var limite = 4;
// Parte superior del rombo (pirámide)
for (var i = 0; i < limite; i++) {
    var asterisco = "";
    var espacioHTML = "";
    // Agregar los espacios decrecientes
    for (var k = 0; k < limite - i - 1; k++) {
        espacioHTML += "&nbsp;&nbsp;";
    }
    // Agregar asteriscos crecientes
    for (var j = 0; j <= 2 * i + 1; j++) {
        if (j == 0 || j == 2 * i) {
            asterisco += "*";
        } else {
            asterisco += "&nbsp;&nbsp;"; // Espacios internos
        }
    }
    // Agregar a caja con un salto de línea
    caja.innerHTML += espacioHTML + asterisco + "<br>";
}
// Parte inferior del rombo (pirámide invertida)
for (var i = limite - 2; i >= 0; i--) {
    var asterisco = "";
    var espacioHTML = "";
    // Agregar los espacios crecientes
    for (var k = 0; k < limite - i - 1; k++) {
        espacioHTML += "&nbsp;&nbsp;";
    }
    // Agregar asteriscos decrecientes
    for (var j = 0; j <= 2 * i + 1; j++) {
        if (j == 0 || j == 2 * i) {
            asterisco += "*";
        } else {
            asterisco += "&nbsp;&nbsp;"; // Espacios internos
        }
    }
    // Agregar a caja con un salto de línea
    caja.innerHTML += espacioHTML + asterisco + "<br>";
}