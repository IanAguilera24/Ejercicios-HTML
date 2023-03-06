function generaTabla() {
    // Solicitar al usuario que ingrese un número
    let numero = document.getElementById("numero").value;
    // Convertir el número a entero
    const num = parseInt(numero);
    // Verificar si el número ingresado es un número válido
    if (isNaN(num)) {
        alert("Ingrese un número válido");
    } else {
        // Crear una variable para almacenar la tabla de multiplicar
        var tabla = "";
        // Generar la tabla de multiplicar usando un bucle for
        for (let i = 1; i <= 10; i++) {
            tabla += `${num} x ${i} = ${num * i}<br>`;
        }
        // Mostrar la tabla de multiplicar en una ventana de alerta
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "La tabla de multiplicar de " + num + " es: <br>" + tabla;
    }
}
