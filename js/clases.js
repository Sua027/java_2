var titulo= document.getElementById('saludo');
 
function cambiarColor (){
    titulo.classsLIst.remove("saludo");
    titulo.classList.add("nuevaClase");  
}
var caja_html = document.getElementById('caja')

function funcionCaja (){
    caja_html.classList.remove("estilo_1");
    caja_html.classList.add("estilo_2");
}

var btn_html  = document.getElementById('boton');


btn_html.addEventListener('click', cambiarColor);
btn_html.addEventListener('click', funcionCaja);