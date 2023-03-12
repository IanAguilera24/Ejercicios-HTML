function calcularMedia() {
    var numeros = document.getElementById("numeros").value.split(",");
    var sumatoria = 0;
    for (var i = 0; i < numeros.length; i++) {
      sumatoria += parseFloat(numeros[i]);
    }
    var media = sumatoria / numeros.length;
    document.getElementById("resultado").innerHTML = media;
  }