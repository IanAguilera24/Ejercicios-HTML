function mostrar(valor){
    let numero = valor;
    if (numero == ''){
        document.getElementById("resultado").innerHTML = "";
    } else if (numero % 2 == 0){
        document.getElementById("resultado").innerHTML = numero + " es par";
    } else if(numero % 2 != 0){
        document.getElementById("resultado").innerHTML = numero + " es impar";
    }
}