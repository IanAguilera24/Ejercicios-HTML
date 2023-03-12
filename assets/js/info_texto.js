function procesar() {
    var textos = document.getElementById("textos").value.split(",");
    var longitud = "";
    var mayusculas = "";
    var minusculas = "";
    for (var i = 0; i < textos.length; i++) {
      longitud += textos[i].length + " ";
      mayusculas += textos[i].toUpperCase() + ",";
      minusculas += textos[i].toLowerCase() + ",";
    }
    document.getElementById("resultado").innerHTML = "Longitud: " + longitud + "<br>Mayúsculas: " + mayusculas + "<br>Minúsculas: " + minusculas;
  }
  