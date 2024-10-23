var boton = document.getElementById('tipos');
boton.addEventListener("click", tipos, false);

function tipos() 
{
    var tipo1 = tipo1=parseInt(document.getElementById('e').value);
    tipo1=typeof(tipo1);
    var tipo2 = typeof(document.getElementById('c').value);
    document.getElementById('res').innerHTML = "Tipo 1: "+tipo1+"<br>Tipo 2: "+tipo2;   
}