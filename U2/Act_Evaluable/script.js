var cad="";
for (let i = 1; i <= 10; i++) {
    cad+="7 * "+i+" = "+7*i+"<br>";
}
document.getElementById('t7').innerHTML = cad;

cad="";
var i=1;
do {
    cad+="8 + "+i+" = "+(8+i)+"<br>";
    i++;
} while (i<=10);
document.getElementById('t8').innerHTML = cad;

cad="";
var i=1;
do {
    cad+="8 + "+i+" = "+(8+i)+"<br>";
    i++;
} while (i<=10);
document.getElementById('t8').innerHTML = cad;

cad="";
var j=1;
while (j<=10){
    cad+="9 / "+j+" = "+(9/j).toFixed(1)+"<br>";
    j++;
} 
document.getElementById('t9').innerHTML = cad;