btn = document.getElementById('btn').addEventListener("click",menu,false);
function menu() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight/2;
    const tamaño = `width=${ancho},height=${alto}`;
    var o = document.getElementById('opc').value;
    switch (o) {
        case "1":
            window.open("romboRelleno.htm","",tamaño);
            break;
        case "2":
            window.open("romboSinRelleno.htm","",tamaño);
            break;
        default:
            alert("Opcion incorrecta");
            break;
    }
}