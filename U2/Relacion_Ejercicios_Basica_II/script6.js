//Ejercicio 6
var btn = document.getElementById('comprobar');
btn.addEventListener("click", comprobarClave, false);
function comprobarClave() 
{
    let clave1 = document.getElementById('c1').value;
    let clave2 = document.getElementById('c2').value;
    if(clave1==clave2){
        document.getElementById('res').innerHTML = "Las claves coinciden";
    }else{
        document.getElementById('res').innerHTML = "Las claves no coinciden";
    }
}