// Definimos una variable global
var nombre = "Juan";
var cad;
alert("Antes de sobrescribir: " + nombre); // "Juan"

// Sobrescribimos la variable global
nombre = "Pedro";

alert("Después de sobrescribir: " + nombre); // "Pedro"

// Definimos una función global
function saludar() {
    return("Hola, soy Juan");
}
cad=saludar(); // "Hola, soy Juan"
alert(cad);

// Sobrescribimos la función global con una nueva implementación
function saludar() {
    return("Hola, soy Pedro");
}
cad=saludar(); // "Hola, soy Pedro"
alert(cad);
