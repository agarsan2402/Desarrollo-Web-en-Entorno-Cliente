//Ejercicio 1
var btn1 = document.getElementById('perimetro');
btn1.addEventListener("click", calculoPerimetro, false);
function calculoPerimetro() 
{
    let lado = document.getElementById('l').value;
    document.getElementById('res').innerHTML = "El perimetro del cuadrado es: "+lado*4;
    
}

//Ejercicio 2
var btn2 = document.getElementById('calculo');
btn2.addEventListener("click", calcular, false);
function calcular() {
    let a= document.getElementById('a').value; 
}