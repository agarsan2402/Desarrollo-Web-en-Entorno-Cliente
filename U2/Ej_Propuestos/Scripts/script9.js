 // Crear el array milista
 var milista = ['panadero', 456, [0, 1, 2]];

 // Mostrar el array completo
 document.getElementById('arrayCompleto').innerHTML = "Contenido del array: " + JSON.stringify(milista);

 // Mostrar el valor de milista[2][2]
 document.getElementById('posicionEspecifica').innerHTML = "Valor de milista[2][2]: " + milista[2][2];