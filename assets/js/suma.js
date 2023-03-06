function suma(){
    var var1 = parseInt(document.getElementById("valor1").value), var2 = parseInt(document.getElementById("valor2").value);
    var result = var1 + var2;
    document.getElementById("resultado").innerHTML = result;
}