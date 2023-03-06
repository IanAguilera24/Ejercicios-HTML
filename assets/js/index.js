//redireccionamiento del navbar
var element = document.getElementById("Info-section");
element.scrollIntoView();

//cambio de logos por desplazamiento del navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('down',window.scrollY > 0);

    var logoEscom = document.querySelector(".Escom");
    var logoIpn = document.querySelector(".Ipn");
    if (window.scrollY > 0){
        logoEscom.setAttribute('src', '../assets/img/EscudoESCOM2.png')
        logoIpn.setAttribute('src', '../assets/img/Logo_IPN2.png')
    } else {
        logoEscom.setAttribute('src', '../assets/img/EscudoESCOM1.png')
        logoIpn.setAttribute('src', '../assets/img/Logo_IPN1.png')
    }
});

//funcionamiento del menu responsivo
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
})

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
})

//Codigo para la galeria de ejercicios
let galery = document.getElementById("galery");
let seleccion = document.getElementById("seleccion");
let iSeleccionada = document.getElementById("i");
let description = document.getElementById("description");
let information = document.getElementById("information");
let lenguaje = document.getElementById("lenguaje");

function cargar(item){
    quitarBordes();
    galery.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    iSeleccionada.src = item.getElementsByTagName("i")[0].src;
    description.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    information.innerHTML = "Informacion del codigo ";

    lenguaje.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;
}

function cerrar(){
    galery.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}