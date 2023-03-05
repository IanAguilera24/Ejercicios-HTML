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

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
})

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
})