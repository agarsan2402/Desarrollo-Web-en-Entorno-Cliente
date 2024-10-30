//Ejercicio 5
var btn = document.getElementById('calculo');
btn.addEventListener("click", calculo, false);
function calculo() 
{
    let a = parseInt(document.getElementById('n1').value);
    let b = parseInt(document.getElementById('n2').value);
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