//Encontrar elemento HTML

const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");


//Cambair valores HTML
titulo.innerHTML = "Titulo cambiado PAPUUU!!";

document.getElementById("demo").innerHTML = 'El texto en el parrafo (index 0) is: ' + parrafo[0].innerHTML;

links[0].href = "https://www.crunchyroll.com/es/";
links[0].target = "_blank"

//Cambiar Estilos

titulo.style.color = "red"; 

//Eventos

function cambiarTexto(obj) {
  obj.innerHTML = "Texto clickeado";
}

function mOver(obj) {
  obj.innerHTML = "Mouse over now";
}

function mOut(obj) {
  obj.innerHTML = "Mosue out";
}

function mDown(obj) {
  obj.style.backgoundColor = "#1ec5e5";
  obj.innerHTML = "sueltame";
}

function mUp(obj) {
  obj.style.backgoundColor = "#D94A38";
  obj.innerHTML = "gracias";
}

//addEventListener

const boton = document.getElementById("boton");
boton.addEventListener("click", alerta);

function alerta() {
  alert("Alerta esta mae va explotar!! Alerta!!!");
}