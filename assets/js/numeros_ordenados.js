function ordenar() {
    var numeros = document.getElementById("numeros").value.split(",");
    numeros.sort(function(a, b){return a-b});
    var resultado = "";
    for (var i = 0; i < numeros.length; i++) {
      resultado += numeros[i] + " ";
    }
    document.getElementById("resultado").innerHTML = resultado;
  }
  