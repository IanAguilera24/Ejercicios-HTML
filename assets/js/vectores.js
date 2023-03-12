function sumarVectores() {
    var vectorA = document.getElementById("vectorA").value.split(",");
    var vectorB = document.getElementById("vectorB").value.split(",");
    var vectorC = [];
    for (var i = 0; i < vectorA.length; i++) {
      vectorC[i] = parseInt(vectorA[i]) + parseInt(vectorB[i]);
    }
    document.getElementById("resultado").innerHTML = vectorC.join(",");
  }
  