//Ejercicio 9
var btn = document.getElementById('n_digitos');
btn.addEventListener("click", digitos, false);
function digitos() 
{
    let num = parseInt(document.getElementById('n').value);
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