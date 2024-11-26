var btn = document.getElementById('btn').addEventListener("click",romboSinRelleno,false);
var salir=document.getElementById('salir').addEventListener("click",salir,false);;
function romboSinRelleno() {
    document.getElementById('res').innerHTML="";
    var limite = document.getElementById('limite').value;
    for (let i = 0; i < limite; i++) {
        var asteriscos="";
        var espaciosHTML="";
        for (let j = 0; j < limite-i-1; j++) {
            espaciosHTML+= "&nbsp;&nbsp;";
        }
        for (let k = 1; k <= 2*i+1; k++) {
            if (k==1 || k==2*i+1) {
                asteriscos+="*";
            }else{
                asteriscos+="&nbsp;&nbsp;";
            }
        }
        document.getElementById('res').innerHTML+=espaciosHTML+asteriscos+"<br>";
    }
    for (let i = limite-2; i >= 0; i--) {
        var asteriscos="";
        var espaciosHTML="";
        for (let j = 0; j < limite-i-1; j++) {
            espaciosHTML+= "&nbsp;&nbsp;";
        }
        for (let k = 1; k <= 2*i+1; k++) {
            if (k==1 || k==2*i+1) {
                asteriscos+="*";
            }else{
                asteriscos+="&nbsp;&nbsp;";
            }
        }
        document.getElementById('res').innerHTML+=espaciosHTML+asteriscos+"<br>";
    }
}
function salir() {
    window.close();
}