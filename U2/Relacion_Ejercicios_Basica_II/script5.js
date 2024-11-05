//Ejercicio 5
var btn = document.getElementById('media');
btn.addEventListener("click", calculoNota, false);
function calculoNota() 
{
    let nota1 = parseInt(document.getElementById('n1').value);
    let nota2 = parseInt(document.getElementById('n2').value);
    let nota3 = parseInt(document.getElementById('n3').value);
    let media = (nota1+nota2+nota3)/3;
    if(media>=7){
        document.getElementById('res').innerHTML = "Nota media: "+media+"------>Promocionado";
    }else{
        document.getElementById('res').innerHTML = "Nota media: "+media+"------>No promocionado";
    }
}