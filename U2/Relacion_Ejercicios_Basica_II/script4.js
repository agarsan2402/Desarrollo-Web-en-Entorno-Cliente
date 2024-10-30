//Ejercicio 4
var btn = document.getElementById('calculo');
btn.addEventListener("click", calculoPrecio, false);
function calculoPrecio() 
{
    let p = parseInt(document.getElementById('precio').value);
    let c = parseInt(document.getElementById('cantidad').value);
    document.getElementById('res').innerHTML = "Coste total: "+(p*c)+"€";
}