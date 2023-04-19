function pegaTexto() {
    var input1 = document.querySelector("#n1");
    var input2 = document.querySelector("#n2");
    if (input1 != null && input2 != null) {
        var soma1 = parseFloat(input1.value);
        var soma2 = parseFloat(input2.value);
        var s = soma1 + soma2;
        var somar = document.querySelector("#somar");
        somar.value = s.toString();
    }
}
function pegaTexto2() {
    var input3 = document.querySelector("#n1");
    var input4 = document.querySelector("#n2");
    if (input3 != null && input4 != null) {
        var multiplicar3 = parseFloat(input3.value);
        var multiplicar4 = parseFloat(input4.value);
        var m = multiplicar3 * multiplicar4;
        var multiplicar = document.querySelector("#somar");
        multiplicar.value = m.toString();
    }
}
function pegaTexto3() {
    var input5 = document.querySelector("#n1");
    var input6 = document.querySelector("#n2");
    if (input5 != null && input6 != null) {
        var dividir5 = parseFloat(input5.value);
        var dividir6 = parseFloat(input6.value);
        var m = dividir5 / dividir6;
        var dividir = document.querySelector("#somar");
        dividir.value = m.toString();
    }
}
