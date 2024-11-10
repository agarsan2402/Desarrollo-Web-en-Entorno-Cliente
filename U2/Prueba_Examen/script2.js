var btn = document.getElementById('btn');
btn.addEventListener("click",menu,false);
function menu() {
    var opc = document.getElementById('opc').value;
    switch (opc) {
        case "1":
            perimetro();
            break;
        case "2":
            sumarPrimerosProductoUltimos();
            break;
        case "3":
            sumaProducto();
            break;
        case "4":
            calcularPrecioEntero();
            break;
        case "5":
            ingresarNotasUno();
            break;
        case "6":
            comparaClave();
            break;
        case "7":
            comparaNumeros();
            break;
        case "8":
            ingresarNotasDos();
            break;
        case "9":
            mostrarDigitos();
            break;
        default:
            break;
    }
}
function perimetro() {
    let lado = prompt("Dime el lado del cuadrado");
    document.getElementById('res').innerHTML = "El perimetro del cuadrado es: "+lado*4;

}

function sumarPrimerosProductoUltimos() {
    let a = parseInt(prompt("Dime un numero a"));
    let b = parseInt(prompt("Dime un numero b"));
    let c = parseInt(prompt("Dime un numero c"));
    let d = parseInt(prompt("Dime un numero d"));
    document.getElementById('res').innerHTML = "La suma de los dos primeros es: "+(a+b)+"<br>El producto de los dos ultimos es: "+(c*d);
}

function sumaProducto() {
    let a= parseInt(prompt("Dime un numero a"));
    let b= parseInt(prompt("Dime un numero b"));
    let c= parseInt(prompt("Dime un numero c"));
    let d= parseInt(prompt("Dime un numero d"));
    document.getElementById('res').innerHTML = "La suma: "+(a+b+c+d)+"<br>El producto: "+(a*b*c*d);
}

function calcularPrecioEntero() {
    let p = parseInt(prompt("Dime el precio"));
    let c = parseInt(prompt("Dime la cantidad"));
    document.getElementById('res').innerHTML = "Coste total: "+(p*c)+"€";
}

function ingresarNotasUno() {
    let nota1 = parseInt(prompt("Dime la primera nota"));
    let nota2 = parseInt(prompt("Dime la segunda nota"));
    let nota3 = parseInt(prompt("Dime la tercera nota"));
    let media = (nota1+nota2+nota3)/3;
    if(media>=7){
        document.getElementById('res').innerHTML = "Nota media: "+media+"------>Promocionado";
    }else{
        document.getElementById('res').innerHTML = "Nota media: "+media+"------>No promocionado";
    }
}

function comparaClave() {
    let clave1 = prompt("Dime la clave");
    let clave2 = prompt("Repite la clave");
    if(clave1===clave2){
        document.getElementById('res').innerHTML = "Las claves coinciden";
    }else{
        document.getElementById('res').innerHTML = "Las claves no coinciden";
    }
}

function comparaNumeros() {
    let a = parseInt(prompt("Dime un numero"));
    let b = parseInt(prompt("Dime otro numero"));
    if(a>b){
        document.getElementById('res').innerHTML = "La suma es: "+(a+b)+"<br>La diferencia es: "+(a-b);
    }else{
        if (a<b) {
            document.getElementById('res').innerHTML = "El producto es: "+(a*b)+"<br>La division es: "+(a/b);
        }else{
            document.getElementById('res').innerHTML = "Los numeros son iguales ";
        }
    }
}

function ingresarNotasDos() {
    let nota1 = parseInt(prompt("Dime la primera nota"));
    let nota2 = parseInt(prompt("Dime la segunda nota"));
    let nota3 = parseInt(prompt("Dime la tercera nota"));
    let media = (nota1+nota2+nota3)/3;
    if(media>=4){
        document.getElementById('res').innerHTML = "Nota media: "+media+"------>regular";
    }else{
        document.getElementById('res').innerHTML = "Nota media: "+media+"------>reprobado";
    }
}

function mostrarDigitos() {
    let num = parseInt(prompt("Dime un numero"));
    if (num>=1&&num<100) {
        if (num>9) {
            document.getElementById('res').innerHTML = "El numero introducido tiene dos digitos";
        } else {
            document.getElementById('res').innerHTML = "El numero introducido tiene un digito";
        }
    }else{
        document.getElementById('res').innerHTML = "Introduce un numero del 1 al 99";
    }
    document.getElementById('res').innerHTML = "El perimetro del cuadrado es: "+lado*4;
}

