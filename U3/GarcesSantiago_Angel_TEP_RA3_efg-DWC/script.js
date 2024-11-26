var btn1 = document.getElementById('btn1').addEventListener("click",comprobarDato,false)
var btn2 = document.getElementById('btn2').addEventListener("click",abrirVentana,false)
let matriculaCorrectaCount = 0;
var matricula=[];
function comprobarDato() {
    var m = document.getElementById('matricula').value;
    if (isNaN(m) || m.length !== 4) {
        document.getElementById('res').innerHTML = "Matrícula incorrecta";
    }else{
        document.cookie="n_matriculas="+matriculaCorrectaCount++;
        matricula = m.split('').map(Number);; // Convertir a números
        if (pocker(matricula)) {
            document.getElementById('res').innerHTML = "La figura es Póker";
        } else if (escaleraCompleta(matricula)) {
            document.getElementById('res').innerHTML = "La figura es Escalera Completa";
        } else if (doblePareja(matricula)) {
            document.getElementById('res').innerHTML = "La figura es Doble Pareja";
        } else if (trio(matricula)) {
            document.getElementById('res').innerHTML = "La figura es Trío";
        } else if (escaleraSimple(matricula)) {
            document.getElementById('res').innerHTML = "La figura es Escalera Simple";
        } else {
            document.getElementById('res').innerHTML = "No hay ninguna figura";
        } 
    }
    console.log(document.cookie)   
}
function abrirVentana() {;
    var ventana = window.open("porcentaje.htm", "_blank", "width=1200,height=600");
    setTimeout(function() {
        ventana.close();
    }, 10000);
}
function doblePareja(m) {
    m.sort();
    if (m[0]===m[1]&&m[2]===m[3]) {
        return true;
    } else {
        return false;
    }
}

function trio(m) {
    var cont=0;
    m.sort();
    if (m[0]!=m[1]) {
        m.reverse();
    }
    for (let index = 1; index < m.length; index++) {
        if (m[0]==m[index]) {
            cont++;
        }
    }
    if (cont==2) {
        return true;
    }else{
        return false;
    }
}

function escaleraSimple(m) {
    m.sort((a, b) => a - b); // Ordenar números en orden ascendente
    m = m.filter((item, index) => m.indexOf(item) === index); // Eliminar duplicados
    let consecutivos = 0;
    for (let i = 0; i < m.length - 1; i++) {
        if (m[i + 1] === m[i] + 1) {
            consecutivos++;
            if (consecutivos === 2) { // Exactamente 2 pasos consecutivos (3 números)
                return true;
            }
        } else {
            consecutivos = 0; // Reinicia si la secuencia se interrumpe
        }
    }
    return false;
}

function escaleraCompleta(m) {
    var cont=0;
    m.sort();
    for (let index = 0; index < m.length; index++) {
        if (m[index]==m[index+1]-1) {
            cont++;
        }
    }
    if (cont==3) {
        return true;
    }else{
        return false;
    }
}

function pocker(m) {
    var cont=0;
    for (let index = 0; index < m.length; index++) {
        if (m[index]==m[index+1]) {
            cont++;
        }
    }
    if (cont==3) {
        return true;
    }else{
        return false;
    }
}
function calcularPorcentaje() {
    let pockerCount = 0;
    let escaleraCompletaCount = 0;
    let dobleParejaCount = 0;
    let trioCount = 0;
    let escaleraSimpleCount = 0;
    let ninguna = 0;
    for (let i = 0; i < 10000; i++) {
        const num = i.toString().padStart(4, '0').split('').map(Number); // Convertir cada carácter a número
        if (pocker(num)) {
            pockerCount++;
        } else if (escaleraCompleta(num)) {
            escaleraCompletaCount++;
        } else if (doblePareja(num)) {
            dobleParejaCount++;
        } else if (trio(num)) {
            trioCount++;
        } else if (escaleraSimple(num)) {
            escaleraSimpleCount++;
        }else{
            ninguna++;
        }
    }
    const total = 10000;
    document.getElementById('pocker').innerHTML = "Probabilidad de Póker: "+((pockerCount / total) * 100).toFixed(2)+"%";
    document.getElementById('doblesParejas').innerHTML = "Probabilidad de Doble Pareja: "+((dobleParejaCount / total) * 100).toFixed(2)+"%";
    document.getElementById('trios').innerHTML = "Probabilidad de Trío: "+((trioCount / total) * 100).toFixed(2)+"%";
    document.getElementById('escaleraSimple').innerHTML = "Probabilidad de Escalera Simple: "+((escaleraSimpleCount / total) * 100).toFixed(2)+"%";
    document.getElementById('escaleraCompleta').innerHTML = "Probabilidad de Escalera Completa: "+((escaleraCompletaCount / total) * 100).toFixed(2)+"%";
    document.getElementById('ninguna').innerHTML = "Probabilidad de ninguna figura: "+((ninguna / total) * 100).toFixed(2)+"%";
}


