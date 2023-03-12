function multiplicar(){
    var var1 = parseInt(document.getElementById("valor1").value), var2 = parseInt(document.getElementById("valor2").value);
    var result = 0;
    for (var i = 0; i < var2; i++){
        result += var1;
    }
    document.getElementById("resultado").innerHTML = result;
}