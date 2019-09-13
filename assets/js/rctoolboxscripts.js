/* JavaScript for RC ToolBox project - Aitor & Carlos*/

/*Calcul de tubs i forquilles*/
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
  Mida_1 = 0,
  Mida_2 = 0;
//implementación

function Calcular() {
  Bateria = document.getElementById("Bateria");
  BateriaEscollida = parseInt(Bateria.options[Bateria.selectedIndex].text);
  Tub = document.getElementById("Tub");
  TubEscollit = parseInt(Tub.options[Tub.selectedIndex].text);
  Expansionadora = document.getElementById("Expansionadora");
  ExpansionadoraEscollida =
    Expansionadora.options[Expansionadora.selectedIndex].text;
  Longitud = parseInt(document.getElementById("Longitud").value);

  if (
    BateriaEscollida == 325 &&
    TubEscollit == 303 &&
    ExpansionadoraEscollida == "H25"
  ) {
    Sumant = 33;
    Encongiment = 1.043;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 325 &&
    TubEscollit == 3028 &&
    ExpansionadoraEscollida == "H25"
  ) {
    Sumant = 32;
    Encongiment = 1.042;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 325 &&
    TubEscollit == 3028 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 35;
    Encongiment = 1.021;
    Variable_1 = 15;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 325 &&
    TubEscollit == 3028 &&
    ExpansionadoraEscollida == "V"
  ) {
    Sumant = 35;
    Encongiment = 1.03;
    Variable_1 = 10;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 325 &&
    TubEscollit == 3030 &&
    ExpansionadoraEscollida == "V"
  ) {
    Sumant = 35;
    Encongiment = 1.038;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 325 &&
    TubEscollit == 3035 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 35;
    Encongiment = 1.04;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 325 &&
    TubEscollit == 3036 &&
    ExpansionadoraEscollida == "H25"
  ) {
    Sumant = 32;
    Encongiment = 1.043;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 325 &&
    TubEscollit == 3036 &&
    ExpansionadoraEscollida == "V25"
  ) {
    Sumant = 33;
    Encongiment = 1.047;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 325 &&
    TubEscollit == 3040 &&
    ExpansionadoraEscollida == "H25"
  ) {
    Sumant = 32;
    Encongiment = 1.043;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 325 &&
    TubEscollit == 3040 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 40;
    Encongiment = 1.021;
    Variable_1 = 15;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 325 &&
    TubEscollit == 3040 &&
    ExpansionadoraEscollida == "V"
  ) {
    Sumant = 35;
    Encongiment = 1.0335;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 325 &&
    TubEscollit == 3050 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 35;
    Encongiment = 1.04;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 325 &&
    TubEscollit == 3050 &&
    ExpansionadoraEscollida == "V"
  ) {
    Sumant = 35;
    Encongiment = 1.04;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 538 &&
    TubEscollit == 5038 &&
    ExpansionadoraEscollida == "H38"
  ) {
    Sumant = 50;
    Encongiment = 1.018;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 538 &&
    TubEscollit == 5038 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 50;
    Encongiment = 1.019;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 538 &&
    TubEscollit == 5038 &&
    ExpansionadoraEscollida == "V"
  ) {
    Sumant = 50;
    Encongiment = 1.02;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 538 &&
    TubEscollit == 5040 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 50;
    Encongiment = 1.02;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 538 &&
    TubEscollit == 5064 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 538 &&
    TubEscollit == 5071 &&
    ExpansionadoraEscollida == "H38"
  ) {
    Sumant = 50;
    Encongiment = 1.016;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 538 &&
    TubEscollit == 5071 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 538 &&
    TubEscollit == 5075 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 538 &&
    TubEscollit == 5090 &&
    ExpansionadoraEscollida == "H38"
  ) {
    Sumant = 50;
    Encongiment = 1.018;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 538 &&
    TubEscollit == 5090 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 538 &&
    TubEscollit == 5100 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 50;
    Encongiment = 1.0138;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 560 &&
    TubEscollit == 5038 &&
    ExpansionadoraEscollida == "H60"
  ) {
    Sumant = 60;
    Encongiment = 1.0225;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 560 &&
    TubEscollit == 5038 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 60;
    Encongiment = 1.019;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 560 &&
    TubEscollit == 5064 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 560 &&
    TubEscollit == 5071 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 560 &&
    TubEscollit == 5090 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 50;
    Encongiment = 1.011;
    Variable_1 = 0;
    Messageifneeded = "";
  } else if (
    BateriaEscollida == 560 &&
    TubEscollit == 5100 &&
    ExpansionadoraEscollida == "P"
  ) {
    Sumant = 50;
    Encongiment = 1.0138;
    Variable_1 = 0;
    Messageifneeded = "";
  }
    else {
    Sumant = 0;
    Encongiment = 0;
    Variable_1 = 0;
    Messageifneeded =
      "La combinació és incorrecta. Reviseu les dades d'entrada.";
  }
  document.getElementById("Sumant").value = Sumant;
  document.getElementById("Encongiment").value = Encongiment;
  document.getElementById("Variable_1").value = Variable_1;
  Mida_1 = document.getElementById("Mida_1").value = (
    (Longitud + Sumant) *
    Encongiment
  ).toFixed(0);
  document.getElementById("Mida_2").value =
    parseInt(Mida_1) + parseInt(Variable_1);
  document.getElementById("Messageifneeded").innerHTML = Messageifneeded;
}

/*Buscador de planols*/
function BuscarPlanol() {
  var numerobateria = document.getElementById("bateriabuscada").value;
  var link =
    "/////192.168.1.230/Compartida/cerezo/Documents comuns/PLANOLS/" +
    numerobateria +
    ".pdf";
  //if(file_exists(link)){
    window.open(link, "_blank");
  //} else {
    //Notfoundmessage = "El arxiu no existeix.";
  //}
  //document.getElementByID("Notfoundmessage").innerHTML = Notfoundmessage;
}

/*Calculadora de circuits*/
function Circ() {
  var T = parseInt(document.getElementById("T").value),
    F = parseInt(document.getElementById("F").value),
    C = parseInt(document.getElementById("C").value),
    BAT = 0,
    TS = 0,
    CT = 0,
    Q1 = 0,
    Q2 = 0,
    C1 = 0,
    C2 = 0,
    EX = 0;

  BAT = T * F;

  if (BAT % 2 == 1) {
    TS = 1;
    BAT--;
  }

  CT = BAT / C;

  EX = Math.trunc(CT);

  if (document.getElementById("checkCircuitsIguals").checked == true) {
    console.log("CT = " +CT);
    console.log("Modulo1 = " +CT%1);
    console.log("Modulo2 = " +CT%2);
    while (CT % 2 !== 0) {
      console.log("CT = " +CT);
      TS++;
      console.log("TS = " +TS);
      BAT--;
      console.log("BAT = " +BAT);
      CT = BAT / C;
    }
      console.log("Modulo1_2 = " +CT%1);
      console.log("Modulo2_2 = " +CT%2);
      Q1 = C;
      Q2 = "No aplica";
      C1 = CT;
      C2 = "No aplica";
  } else {
    if (CT == 1) {
      Q1 = C;
      Q2 = "Això té";
      C1 = CT;
      C2 = "mala pinta";
    } else if (CT % 1 == 0 && CT % 2 == 0) {
      Q1 = C;
      Q2 = "No aplica";
      C1 = CT;
      C2 = "No aplica";
    } else if (CT % 1 == 0 && CT % 2 == 1) {
      Q1 = C / 2;
      Q2 = C / 2;
      C1 = CT - 1;
      C2 = CT + 1;
    } else if (CT % 1 !== 0 && EX % 2 == 0) {
      Q1 = Number(C) - 1;
      Q2 = 1;
      C1 = EX;
      C2 = Number(C1) + 2;
      while (
        Number(BAT) - (Number(Q1) * Number(C1) + Number(Q2) * Number(C2)) >
        0
      ) {
        Q2++;
        Q1 = Number(C) - Q2;
      }
    } else if (CT % 1 !== 0 && EX % 2 == 1) {
      Q1 = Number(C) - 1;
      Q2 = 1;
      C1 = EX - 1;
      C2 = Number(C1) + 2;
      while (
        Number(BAT) - (Number(Q1) * Number(C1) + Number(Q2) * Number(C2)) >
        0
      ) {
        Q2++;
        Q1 = Number(C) - Q2;
      }
    } else {
      Q1 = "Houston";
      Q2 = "un";
      C1 = "tenemos";
      C2 = "problema";
    }
  }

  document.getElementById("Q1").value = Q1;
  document.getElementById("C1").value = C1;
  document.getElementById("Q2").value = Q2;
  document.getElementById("C2").value = C2;
  document.getElementById("TS").value = TS;
}

/*Esquemes Estandar*/
function BuscarEsquema() {
  var TubsEsquema = document.getElementById("tubsEsquema").value;
  var FilesEsquema = document.getElementById("filesEsquema").value;
  var CircuitsEsquema = document.getElementById("circuitsEsquema").value;
  var PosicioEsquema = document.getElementById("posicioEsquema").value;

  var nomEsquema =
    "560" + 
    FilesEsquema +
    "F" +
    TubsEsquema +
    "T" +
    CircuitsEsquema +
    "C" +
    PosicioEsquema;
  var link =
    "/////192.168.1.230/Compartida/cerezo/Documents Comuns/ESQUEMES/PROJECTE RC 3.0 - 2019/EsquemesEstandard/" +
    nomEsquema +
    ".pdf";
  window.open(link, "_blank");
}

///////////////////////////////////////////
//
// CALCULADOR 2.0
//
///////////////////////////////////////////

//var "325.3028.V" = {
//i : "1",
//nombre : "V25",
//Tmax : "40",
//Fmax : "6",
//Lmax : "2050"
//Sumant : 10
//Encong
//v
//};
