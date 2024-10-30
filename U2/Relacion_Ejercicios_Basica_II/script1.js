//Ejercicio 1
var btn = document.getElementById('calculo');
btn.addEventListener("click", calculo, false);
function calculo() 
{
    let lado = document.getElementById('lado').value;
    document.getElementById('res').innerHTML = "El perimetro del cuadrado es: "+lado*4;
    
}