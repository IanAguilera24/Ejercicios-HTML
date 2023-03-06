var numeros = [];

function narray() {
    var numero = document.getElementById("valores").value;
    numero = Number(numero); //convierte el valor introducido a un numero
    if (!isNaN(numero)) {
        numeros.push(numero);   
        var arreglo = document.getElementById("arreglo");
        arreglo.innerHTML = "El arreglo actual es: " + numeros.join(", ");
    } else {
        alert("Ingresa un numero valido");
    }
    document.getElementById("valores").value = "";

    var maximo = Math.max.apply(null, numeros); //numero mas grande de un arreglo
    var posicion = numeros.indexOf(maximo);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "El numero mas grande es: " + maximo + "<br>Y su posicion es: " + posicion;
}