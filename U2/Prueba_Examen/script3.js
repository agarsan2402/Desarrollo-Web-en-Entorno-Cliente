var btn = document.getElementById('btn');
btn.addEventListener("click",menu,false);
function menu() {
    var opc = document.getElementById('opc').value;
    switch (opc) {
        case "1":
            romboRelleno();
            break;
        case "2":
            areaLongituCirculo();
            break;
        case "3":
            ternario();
            break;
        case "4":
            ejemploTypeOf();
            break;
        case "5":
            sobreescribir();
            break;
        case "6":
            eventos();
            break;
        case "7":
            averiguaResultado();
            break;
        case "8":
            extraerMesAnio();
            break;
        case "9":
            mostrarArray();
            break;
        case "10":
            romboContorno();
            break;
        default:
            break;
    }
}
function romboRelleno() {
    var caja = document.getElementById("res");
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
        for (var j = 1; j <= 2 * i + 1; j++) {
            asterisco += "*";
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
        for (var j = 1; j <= 2 * i + 1; j++) {
            asterisco += "*";
        }
        // Agregar a caja con un salto de línea
        caja.innerHTML += espacioHTML + asterisco + "<br>";
    }

}

function areaLongituCirculo() {
    let radio = 5;
    document.getElementById('res').innerHTML ="Area: "+Math.PI * Math.pow(radio, 2) + "<br> Longitud: "+ 2 * Math.PI * radio;
}

function ternario() {
    let a = parseInt(prompt("Dime a"));
    let b = parseInt(prompt("Dime b"));
    a=parseInt(a);
    b=parseInt(b);
    document.getElementById('res').innerHTML ="Si "+a+" es menor que "+b+" se suma 1 a "+a+" en caso contrario se suma a "+b+"<br>resultado: "+(a<b?a+1:b+1);
}

function ejemploTypeOf() {
    let tipo1 = parseInt(prompt("Dime un numero"));
    tipo1=typeof(tipo1);
    let tipo2 = typeof(prompt("Dime una cadena"));
    document.getElementById('res').innerHTML = "Tipo 1: "+tipo1+"<br>Tipo 2: "+tipo2;   
}

function sobreescribir() {
    // Definimos una variable global
    let nombre = "Juan";
    let cad;
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
}

function averiguaResultado() {
    let a=Number("99");
    let b=Number("2");
    document.getElementById('res').innerHTML = "Cadena 1: "+a+"<br>Cadena 2: "+b;   
}

function extraerMesAnio() {
    // Convierte el valor del input a una fecha
    let f = new Date(prompt("Dime la fecha en formato mm/dd/yy"));

    // Extrae el mes y el año
    let mes = f.getMonth() + 1; // Sumar 1 porque getMonth() devuelve de 0 a 11
    let año = f.getFullYear();

    // Muestra el resultado
    document.getElementById('res').innerHTML = "Mes: " + mes + ", Año: " + año;
}

function mostrarArray() {
    // Crear el array milista
    let milista = ['panadero', 456, [0, 1, 2]];
    // Mostrar el array completo
    document.getElementById('res').innerHTML = "Contenido del array completo: " + JSON.stringify(milista)+"<br>"+"Valor de milista[2][2]: " + milista[2][2];
}

function romboContorno() {
    var caja = document.getElementById("res");
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
}