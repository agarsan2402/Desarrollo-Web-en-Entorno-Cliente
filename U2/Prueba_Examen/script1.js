var btn = document.getElementById('btn');
btn.addEventListener("click",menu,false);
function menu() {
    var opc = document.getElementById('opc').value;
    switch (opc) {
        case "1":
            restar();
            break;
        case "2":
            dividir();
            break;
        case "3":
            nombreEdad();
            break;
        case "4":
            dobleTripleCuadruple();
            break;
        case "5":
            longitudAreaCircunferencia();
            break;
        case "6":
            contadores();
            break;
        case "7":
            baseCincoDieciseis();
            break;
        case "8":
            baseOchoDiezDos();
            break;
        case "9":
            mostrarEnBase();
            break;
        case "10":
            menor57();
            break;
        case "11":
            pedirNum();
            break;
        case "12":
            pedirNumSumar();
            break;
        case "13":
            pedirNumProducto();
            break;
        case "14":
            multiplos23();
            break; 
        default:
            break;
    }
}
function restar() {
    let a = prompt("Dime un numero a"); 
    let b = prompt("Dime un numero b"); 
    let res = a - b;
    document.getElementById('res').innerHTML = "El resultado es: "+res;
}

function dividir() {
    let a = prompt("Dime un numero a"); 
    let b = prompt("Dime un numero b"); 
    let res = a / b;
    if (b == 0) {
        document.getElementById('res').innerHTML = "Error division por cero";
    } else {
        document.getElementById('res').innerHTML = "El resultado es: "+res;
    }
}

function nombreEdad() {
    let nom = prompt("Dime tu nombre"); 
    let edad = prompt("Dime tu edad"); 
    let res = edad*365;
    document.getElementById('res').innerHTML = "Nombre: "+nom+"<br>Dias vividos: "+res;
}

function dobleTripleCuadruple() {
    let n = prompt("Dime un numero"); 
    document.getElementById('res').innerHTML = "Doble: "+n*2+"<br>Triple: "+n*3+"<br>Cuadruple: "+n*4;
}

function longitudAreaCircunferencia() {
    const PI = 3.141592;
    let d = prompt("Dime el diametro");
    let l = d*PI, r=d/2; 
    let a = PI*Math.pow(r, 2);
    document.getElementById('res').innerHTML = "Longitud: "+l+"<br>Area: "+a;
}

function contadores() {
    let n = parseInt(prompt("Dime un numero"));
    let cont1 = n+5, cont2 = cont1+21, cont3 = cont2-4; 
    document.getElementById('res').innerHTML = "Nº introducido: "+n+"<br>Contadores: "+cont1+"\t\t"+cont2+"\t\t"+cont3;
}

function baseCincoDieciseis() {
    let n=prompt("Dime un numero entero");
    n = parseInt(n); // Convertir la cadena de texto a un número entero
    if (!isNaN(n)) { // Comprobar si el valor introducido es un número válido
        let resto=0, cociente=n, res=""; 
        const BASE=16;//cambiar la base
        while (cociente>=BASE) {
            resto=cociente%BASE;
            resto=parseInt(resto);
            res=resto.toString()+res;
            cociente/=BASE;
            cociente=parseInt(cociente);    
        }
        res=cociente.toString()+res;
        document.getElementById('res').innerHTML = "Matematicamente<br>Base 16: "+res;
    } else {
        document.getElementById('res').innerHTML = "Introduce un numero valido";
    }
    if (!isNaN(n)) { // Comprobar si el valor introducido es un número válido
        let hep = n.toString(5);// Convertir el número a base 5
        let hex = n.toString(16); // Convertir el número a base 16
        document.getElementById('res').innerHTML = "Mediante metodos<br>Base 16: "+hex+"<br>Base 5: "+hep;
    } else {
        document.getElementById('res').innerHTML = "Introduce un numero valido";
    }
}

function baseOchoDiezDos() {
    let base = 8;
    let octal = prompt("Dime un número en octal");
    let decimal = 0;
    let resto=0, cociente, binario=""; 
    // Recorremos la cadena de derecha a izquierda
     for (let index = 0; index < octal.length; index++) {
        // Convertimos el carácter en número y calculamos el valor decimal
        decimal += parseInt(octal.charAt(octal.length - 1 - index)) * Math.pow(base, index);
    }
    cociente=decimal;
    while (cociente>=2) {
        resto=cociente%2;
        resto=parseInt(resto);
        binario=resto.toString()+binario;
        cociente/=2;
        cociente=parseInt(cociente);    
    }
    binario=cociente.toString()+binario;
    document.getElementById('res').innerHTML = "Base 10: "+decimal+"<br>Base 2: "+binario;
}

function mostrarEnBase() {
    let num=prompt("Dime un numero entero");
    num = parseInt(num); // Convertir la cadena de texto a un número entero
    if (!isNaN(num)) { // Comprobar si el valor introducido es un número válido
        let resto=0, cociente=num, res=""; 
        const BASE=parseInt(prompt("Dime la base"));//cambiar la base
        while (cociente>=BASE) {
            resto=cociente%BASE;
            resto=parseInt(resto);
            res=resto.toString()+res;
            cociente/=BASE;
            cociente=parseInt(cociente);    
        }
        res=cociente.toString()+res;
        document.getElementById('res').innerHTML = "En base "+BASE+": "+res;
    } else {
        window.alert("Por favor, introduce un número válido.");
    }
}

function menor57() {
    do {
        let num1=prompt("dime un numero positivo que sea menor de 57"), num2=prompt("dime otro numero positivo que sea menor de 57");
        let respuesta;
        let continuar;
        if (num1<0||num2<0||num1>57||num2>57) {
            window.alert("has introducido algun numero negativo o mayor que 57");
        }else{
            document.getElementById('res').innerHTML="el producto de "+num1+" y "+num2+" es "+num1*num2;
        }
        respuesta=prompt("¿quieres volver a empezar?s/n");
        switch (respuesta) {
            case "s":
                continuar=true;
                break;
            case "n":
                continuar=false;
                break;
            default:
                break;
        }
    } while (continuar!=false);
}

function pedirNum() {
    let cont=0, num=prompt("dime un numero, introduce el 9999 para detener el programa");
    while (num!=9999) {
        cont++;
        num=prompt("dime un numero, introduce el 9999 para detener el programa");
    }
    document.getElementById('res').innerHTML="Has introducido "+cont+" numeros";
}

function pedirNumSumar() {
    let acu=0, cont=0, num=prompt("dime un numero, introduce el 9999 para deterne el programa");
    while (num!=9999) {
        acu+=parseInt(num);
        cont++;
        num=prompt("dime un numero, introduce el 9999 para deterne el programa"); 
    }
    document.getElementById('res').innerHTML="Has introducido "+cont+" numeros y la suma de todos da "+acu;
}

function pedirNumProducto() {
    let acu=1, cont=0, num=prompt("dime un numero, introduce el 9999 para deterne el programa");
    while (num!=9999) {
        acu*=parseInt(num);
        cont++;
        num=prompt("dime un numero, introduce el 9999 para deterne el programa"); 
    }
    document.getElementById('res').innerHTML="Has introducido "+cont+" numeros y el producto de todos da "+acu;
}

function multiplos23() {
    const MUL=23;
    let cont=1, suma=0, acu="";
    while (MUL*cont<1000) {
        acu+=" "+MUL*cont.toString()+" ";
        suma+=MUL*cont;
        cont++;
    }
    document.getElementById('res').innerHTML="Los multiplos de 23 menores de 1000: "+acu+"<br>La suma de todos: "+suma;
}