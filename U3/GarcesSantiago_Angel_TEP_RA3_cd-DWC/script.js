// Array de frases organizadas en 4 categorías (columnas)
var frases = [
    [
        // Frases iniciales (columna 0)
        "Queridos compañeros ", "Por otra parte, y dados los condicionamientos actuales ", "Asimismo, ",
        "Sin embargo, no hemos olvidar que ", "De igual manera, ", "La práctica de la vida cotidiana prueba que, ",
        "No es indispensable argumentar el peso y la sifnificación de estos problemas ya que, ",
        "Las experiencias ricas y diversas muestran que, ", "El afán de organización, pero sobre todo ",
        "Los superiores principios ideológicos, condicionan que ", "Incluso, bien pudiéramos atrevernos a sugerir que ",
        "Es obvio señalar que, ","Pero pecaríamos de insinceros si soslayásemos que, ",
        "Y además quedaríamos inmersos en la más abyecta de las estulticias si no fueramos conscientes de que, "
    ],
    [
        // Frases intermedias (columna 1)
        "la realización de las premisas del programa ", "la complejidad de los estudios de los dirigentes ",
        "el aumento constante, en cantidad y en extensión, de nuestra actividad ", "la estructura actual de la organización ",
        "el nuevo modelo de actividad de la organización, ", "el desarrollo continuo de distintas formas de actividad ",
        "nuestra actividad de información y propaganda ", "el reforzamiento y desarrollo de las estructuras ",
        "la consulta con los numerosos militantes ", "el inicio de la acción general de formación de las actitudes ",
        "un relanzamiento específico de todos los sectores implicados ", "la superación de experiencias periclitadas ",
        "una aplicación indiscriminada de los factores confluyentes ", "la condición sine qua non rectora del proceso "
    ],
    [
        // Más frases intermedias (columna 2)
        "nos obliga a un exhaustivo análisis ", "cumple un rol esencial en la formación ",
        "exige la precisión y la determinación ", "ayuda a la preparación y la realización ",
        "garantiza la participación de un grupo importante en la formación ", "cumple deberes importantes en la determinación ",
        "facilita la creación ", "obstaculiza la apreciación de la importancia ", "ofrece un ensayo interesante de verificación ",
        "implica el proceso de reestructuración y modernización ", "habrá de significar un auténtico y eficaz punto de partida ",
        "permite en todo caso explicitar las razones fundamentales ", "asegura, en todo caso, un proceso muy sensible de inversión ",
        "radica en una elaboración cuidadosa y sistemática de las estrategias adecuadas "
    ],
    [
        // Frases finales (columna 3)
        "de las condiciones financieras y administrativas existentes.", "de las directivas de desarrollo para el futuro.",
        "del sistema de participación general.", "de las actitudes de los miembros hacia sus deberes ineludibles.",
        "de las nuevas proposiciones.", "de las direcciones educativas en el sentido del progreso.",
        "del sistema de formación de cuadros que corresponda a las necesidades.", "de las condiciones de las actividades apropiadas.",
        "del modelo de desarrollo.", "de las formas de acción.", "de las básicas premisas adoptadas.",
        "de toda una casuística de amplio espectro.", "de los elementos generados.",
        "para configurar un interface amigable y coadyuvante a la reingeniería del sistema."
    ]
];

// Referencia al elemento HTML donde se mostrarán las frases generadas
var txt = document.getElementById('texto');

// Añade un evento al botón para que ejecute la función 'hablar' al hacer clic
var btn = document.getElementById('boton').addEventListener("click", hablar, false);

// Historial de frases generadas para evitar repeticiones
var historial = [];

// Función que genera y muestra una nueva frase
function hablar() {
    let aux = ""; // Variable para construir la frase completa

    // Generar una frase seleccionando una frase aleatoria de cada columna
    for (let index = 0; index < 4; index++) {
        let fila = aleatorio(index); // Selecciona un índice aleatorio en la columna actual

        // Añade la frase correspondiente con un color específico según la columna
        switch (index) {
            case 0:
                aux += "<span style=\"color: red;\">" + frases[index][fila] + "</span>";
                break;
            case 1:
                aux += "<span style=\"color: yellow;\">" + frases[index][fila] + "</span>";
                break;
            case 2:
                aux += "<span style=\"color: green;\">" + frases[index][fila] + "</span>";
                break;
            case 3:
                aux += "<span style=\"color: blue;\">" + frases[index][fila] + "</span>";
                break;
            default:
                break;
        }
    }

    // Verifica si la frase ya existe en el historial
    if (!historial.includes(aux)) {
        historial.push(aux); // Añade la frase al historial
        setCookie(); // Actualiza la cookie de pulsaciones
        texto.innerHTML += aux; // Muestra la frase en el elemento HTML
    } else {
        hablar(); // Genera otra frase si ya existía
    }
}

// Función para obtener un índice aleatorio dentro de los límites de una columna
function aleatorio(index) {
    return Math.round(Math.random() * (frases[index].length - 1));
}

// Función para guardar en una cookie cuántas veces se ha presionado el botón
function setCookie() {
    let cont = parseInt(getCookie('pulsaciones')) || 0; // Obtiene el valor actual de la cookie o inicia en 0
    cont++; // Incrementa el contador
    // Guarda la cookie con el nuevo valor y una duración de 7 días
    document.cookie = `pulsaciones=${cont}; path=/; expires=${new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toUTCString()}`;
    // Actualiza el elemento HTML para mostrar el valor de las pulsaciones
    document.getElementById('cookie').innerHTML = "Pulsaciones: " + cont;
}

// Función para obtener el valor de una cookie según su nombre
function getCookie(nombreCookie) {
    let nueva = nombreCookie + "="; // Formato esperado del nombre de la cookie
    let decodedCookie = decodeURIComponent(document.cookie); // Decodifica las cookies almacenadas
    let ca = decodedCookie.split(';'); // Divide todas las cookies en un arreglo
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim(); // Elimina espacios en blanco en cada cookie
        if (c.indexOf(nueva) == 0) {
            return c.substring(nueva.length, c.length); // Devuelve el valor de la cookie
        }
    }
    return ""; // Devuelve cadena vacía si la cookie no existe
}
