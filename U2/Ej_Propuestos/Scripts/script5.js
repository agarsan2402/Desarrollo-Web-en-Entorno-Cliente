var boton = document.getElementById('calcular');
boton.addEventListener("click", calculo, false);

function calculo() 
{
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    a=parseInt(a);
    b=parseInt(b);
    document.getElementById('res').innerHTML ="Si "+a+" es menor que "+b+" se suma 1 a "+a+" en caso contrario se suma a "+b+"resultado: "+(a<b?a+1:b+1);
}