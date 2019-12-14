var edad;
var evaluar;
var resultado;

function init() {
    edad = document.getElementById("edad");
    evaluar = document.getElementById("evaluar");
    resultado = document.getElementById("resultado");
    resultado.textContent = " ********** ";

    evaluar.onclick = function() {
        if (parseInt(edad.value) >= 18) {
            resultado.textContent = "Usted ya puede conducir!!!";
        } else {
            resultado.textContent = "No puede conducir debido a que es menor de edad.";
        }
    }
}