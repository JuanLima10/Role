function calcRole(){

    var NB = document.getElementById("NB").value;
    var NIB = document.querySelector('input[name="NIB"]:checked').value;
    var NBA = document.getElementById("NBA").value;
    var NIBA = document.querySelector('input[name="NIBA"]:checked').value;
    var NIS = document.querySelector('input[name="NIS"]:checked').value;
    var KM = document.getElementById("KM").value;
    var DIA = document.querySelector('Option[name="DIA"]:checked').value;
    var O = document.getElementById("O").value;
    // <Bases> Bases de Cálculo

    if (NIB == "rooftop"){
        NIB = 2.2;
    }else if (NIB == "gimCentro"){
        NIB = 1.5;
    }else{
        NIB = 1.1;
    }

    if(NIBA == "padrao"){
        NIBA = 2;
    }else{
        NIBA = 3;
    }

    if(NIS == "social"){
        NIS = 1;
    }else if(NIS == "comemoracao"){
        NIS = 1.6;
    }else{
        NIS = 2.5;
    }

    if(DIA == "dds"){
        DIA = 1;
    }else if(DIA == "sexta"){
        DIA = 1.4;
    }else if(DIA == "sabado"){
        DIA = 1.6;
    }else{
        DIA = 1.2;
    }

    // </Bases>
        
    var result = ((parseInt(NB) * parseFloat(NIB) * parseFloat(NIS) * 5 * 9) + (parseInt(NBA) * parseInt(NIBA) * parseFloat(NIS) * 5 * 9) + (parseFloat(KM) * parseFloat(DIA) * 4) + (parseFloat(O)));
    
    // Formatação para moeda brasileira (Real)

    function numberToReal(numero) {
        var numero = numero.toFixed(2).split('.');
        numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    }

    document.getElementById("result").innerHTML = numberToReal(result);
}