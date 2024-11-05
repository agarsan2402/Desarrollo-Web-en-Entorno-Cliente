//Ejercicio 3
var btn = document.getElementById('calculo');
btn.addEventListener("click", calculo, false);
function calculo() {
    let a= parseInt(document.getElementById('a').value);
    let b= parseInt(document.getElementById('b').value);
    let c= parseInt(document.getElementById('c').value);
    let d= parseInt(document.getElementById('d').value);
    document.getElementById('res').innerHTML = "La suma: "+(a+b+c+d)+"<br>El producto: "+(a*b*c*d);
} 