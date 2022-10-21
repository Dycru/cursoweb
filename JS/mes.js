var mes= new Date().getMonth();

switch (mes) {

case 0:

mes = "Enero"; break;

case 1:

mes = "Febrero"; break;

case 2:

mes = "Marzo"; break;

case 3:

mes = "abril"; break;

case 4:

mes = "mayo"; break;

case 5:

mes = "junio"; break;

case 6:

mes = "julio"; break;

case 7:

mes = "julio"; break;

case 9:

mes = "octubre"; break;

}

document.getElementById("texto").innerHTML = "Este mes es " + mes;