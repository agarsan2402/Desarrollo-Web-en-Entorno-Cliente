var parametros = "width=400, height=300, left=200, top=150, resizable=no, menubar=no, toolbar=no, directories=no, location=no, scrollbars=no, status=no";
var nuevaVentana; // Variable global para la referencia de la ventana secundaria

// Función para abrir la ventana secundaria y moverla a las coordenadas proporcionadas


function abrirVentana() {
  if (nuevaVentana && !nuevaVentana.closed) {
      nuevaVentana.close(); // Cierra la ventana previa
  }
  nuevaVentana = open("texto_de_secundaria_2.htm", "ventana", parametros);
  nuevaVentana.onload = function () {
      cambiarColor();
      escribirTexto();
  };
  var tiempo = document.getElementById('tiempo').value;
  if (tiempo && !isNaN(tiempo)) {
      setTimeout(function () {
          if (!nuevaVentana.closed) {
              nuevaVentana.close();
          }
      }, tiempo);
  }
}
  function coordenadas() {
    var x = parseInt(document.getElementById('x').value) || 0;
    var y = parseInt(document.getElementById('y').value) || 0;
    if (nuevaVentana && !nuevaVentana.closed) {
        nuevaVentana.moveTo(x, y);
    }
    
  }

  function cambiarColor() {
    if (nuevaVentana && !nuevaVentana.closed) {
      var color = document.getElementById('color').value;
      nuevaVentana.document.body.style.background = color;
    } else {
      alert("La ventana secundaria no está abierta.");
    }
  }

  function focusVentana() {
    if (nuevaVentana && !nuevaVentana.closed) {
      nuevaVentana.focus();
    } else {
      alert("La ventana secundaria no está abierta.");
    }
  }

  function blurVentana() {
    if (nuevaVentana && !nuevaVentana.closed) {
      nuevaVentana.blur();
    } else {
      alert("La ventana secundaria no está abierta.");
    }
  }

  function escribirTexto() {
    fuente()
    if (nuevaVentana && !nuevaVentana.closed) {
      var texto = document.getElementById('texto').value || "Pagina secundaria";
      nuevaVentana.document.getElementById('contenido').innerHTML = texto;
    } else {
      alert("La ventana secundaria no está abierta.");
    }
  }

  function fuente() {
    var color = document.getElementById('cLetra').value;
    var tamanio = document.getElementById('tLetra').value;
    nuevaVentana.document.body.style.color = color;
    nuevaVentana.document.body.style.fontSize = tamanio;
  }

  function cerrarVentana() {
    if (nuevaVentana) {
      nuevaVentana.close();
    } else {
      alert("La ventana secundaria ya está cerrada.");
    }
  }
