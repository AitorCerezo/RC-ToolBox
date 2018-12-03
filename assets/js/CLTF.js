/* JavaScript for CLTF project - AitorCerezo */

/* Falta arreglar H25 + 10mm en mida 2 */


    var Bateria = "",
        BateriaEscollida = 0,
        Tub = "",
        TubEscollit = 0,
        Expansionadora = "",
        ExpansionadoraEscollida = "",
        Longitud = 0,
        Sumant = 0,
        Encongiment = 0,
        Variable_1 = 0,
        Variable_2 = 0,
        Mida_1 = 0,
        Mida_2 = 0;

function Calcular() {
    Bateria = document.getElementById("Bateria");
    BateriaEscollida = parseInt(Bateria.options[Bateria.selectedIndex].text);
    Tub = document.getElementById("Tub");
    TubEscollit = parseInt(Tub.options[Tub.selectedIndex].text);
    Expansionadora = document.getElementById("Expansionadora");
    ExpansionadoraEscollida = Expansionadora.options[Expansionadora.selectedIndex].text;
    Longitud = parseInt(document.getElementById("Longitud").value);
    
if ((BateriaEscollida == 325)&&(TubEscollit == 303)&&(ExpansionadoraEscollida == "H25")) {
    Sumant = 32;
    Encongiment = 1.043;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";
} else if ((BateriaEscollida == 325)&&(TubEscollit == 3028)&&(ExpansionadoraEscollida == "H25")) {
    Sumant = 32;
    Encongiment = 1.042;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 325)&&(TubEscollit == 3028)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 35;
    Encongiment = 1.021;
    Variable_1 = 15;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 325)&&(TubEscollit == 3028)&&(ExpansionadoraEscollida == "V")) {
    Sumant = 35;
    Encongiment = 1.03;
    Variable_1 = 0;
    Variable_2 = 10;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 325)&&(TubEscollit == 3030)&&(ExpansionadoraEscollida == "V")) {
    Sumant = 35;
    Encongiment = 1.038;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 325)&&(TubEscollit == 3035)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 35;
    Encongiment = 1.04;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 325)&&(TubEscollit == 3036)&&(ExpansionadoraEscollida == "H25")) {
    Sumant = 32;
    Encongiment = 1.043;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
}  else if ((BateriaEscollida == 325)&&(TubEscollit == 3036)&&(ExpansionadoraEscollida == "V25")) {
    Sumant = 33;
    Encongiment = 1.047;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 325)&&(TubEscollit == 3040)&&(ExpansionadoraEscollida == "H25")) {
    Sumant = 32;
    Encongiment = 1.043;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 325)&&(TubEscollit == 3040)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 40;
    Encongiment = 1.021;
    Variable_1 = 15;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 325)&&(TubEscollit == 3040)&&(ExpansionadoraEscollida == "V")) {
    Sumant = 35;
    Encongiment = 1.0335;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 325)&&(TubEscollit == 3050)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 35;
    Encongiment = 1.04;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 325)&&(TubEscollit == 3050)&&(ExpansionadoraEscollida == "V")) {
    Sumant = 35;
    Encongiment = 1.04;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 538)&&(TubEscollit == 5038)&&(ExpansionadoraEscollida == "H38")) {
    Sumant = 50;
    Encongiment = 1.018;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 538)&&(TubEscollit == 5038)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 50;
    Encongiment = 1.019;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 538)&&(TubEscollit == 5038)&&(ExpansionadoraEscollida == "V")) {
    Sumant = 50;
    Encongiment = 1.02;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 538)&&(TubEscollit == 5040)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 50;
    Encongiment = 1.02;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 538)&&(TubEscollit == 5064)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 538)&&(TubEscollit == 5071)&&(ExpansionadoraEscollida == "H38")) {
    Sumant = 50;
    Encongiment = 1.016;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 538)&&(TubEscollit == 5071)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 538)&&(TubEscollit == 5075)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 538)&&(TubEscollit == 5090)&&(ExpansionadoraEscollida == "H38")) {
    Sumant = 50;
    Encongiment = 1.018;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 538)&&(TubEscollit == 5090)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 538)&&(TubEscollit == 5100)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 50;
    Encongiment = 1.0138;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 560)&&(TubEscollit == 5038)&&(ExpansionadoraEscollida == "H60")) {
    Sumant = 60;
    Encongiment = 1.0225;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 560)&&(TubEscollit == 5038)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 60;
    Encongiment = 1.019;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 560)&&(TubEscollit == 5064)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 560)&&(TubEscollit == 5071)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else if ((BateriaEscollida == 560)&&(TubEscollit == 5090)&&(ExpansionadoraEscollida == "P")) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "";     
} else {
    Sumant = 0;
    Encongiment = 0;
    Variable_1 = 0;
    Variable_2 = 0;
    Messageifneeded = "La combinació és incorrecta. Reviseu les dades d'entrada.";
}   
document.getElementById("Sumant").value = Sumant;
document.getElementById("Encongiment").value = Encongiment;
document.getElementById("Variable_1").value = Variable_1;
document.getElementById("Variable_2").value = Variable_2;
Mida_1 = document.getElementById("Mida_1").value = ((Longitud+Sumant)*Encongiment).toFixed(0);
document.getElementById("Mida_2").value = parseInt(Mida_1)+parseInt(Variable_1);
document.getElementById("Messageifneeded").innerHTML = Messageifneeded;
}

function BuscarPlanol() {
    var numerobateria = document.getElementById("bateriabuscada").value;
    var link = '/////192.168.1.230/Compartida/cerezo/RC TOOLBOX/web/pdfs/' + numerobateria + ".pdf";
    document.getElementById("linkproba").innerHTML = "Obrir";
    document.getElementById("linkproba").href = link   
}