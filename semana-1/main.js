// LUNES -- Ejercicio 1
let num_1 = 5;
let num_2 = 10;
let num_3 = "60";
// LUNES -- Ejercicio 1
const sumar = (num_1, num_2) => {
  return num_1 + num_2;
};

console.log(` - - - - - - - - - - - - - - - - - - -`);
console.log();
console.log(` S U M A  D E  D O S  N U M E R O S`);
let ressuma = sumar(num_1, num_2);
console.log(` ${num_1} + ${num_2} = ${ressuma}`);
console.log();
console.log(` - - - - - - - - - - - - - - - - - - -`);

// MARTES -- Ejercicio 2
const multiplicar = (num_1, num_2) => {
  if (typeof num_1 === "number" && typeof num_2 === "number") {
    return num_1 * num_2;
  } else {
    return "Ambos parámetros deben ser números.";
  }
};

console.log();
console.log(` M U L T I P L I C A R   D O S  N U M E R O S`);
let resmulti = multiplicar(num_1, num_3);
let tipo = typeof num_3;
console.log(` ${num_1} * ${num_3} [ ${tipo} ]  = ${resmulti}`);

console.log();
console.log(` - - - - - - - - - - - - - - - - - - -`);

// MIERCOLES - Ejercicio 3
let mes = "Enero";
const esInvierno = (mes) => {
  let ban = false;

  switch (mes) {
    case "Junio":
    case "Julio":
    case "Agosto":
      ban = true;
      break;
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
      ban = false;
      break;
    default:
      ban = " desconocido";
  }
  return ban;
};

console.log();
console.log(` ¿ ES INVIERNO ? `);
let esInviernoResponse = esInvierno(mes);
console.log(`Mes a analizar ${mes} = ${esInviernoResponse}`);
console.log();
console.log(` - - - - - - - - - - - - - - - - - - -`);

// JUEVES -- Ejercicio 4

let enfermo = ["fiebre", "dolor muscular", "vómitos"];
let noEnfermo = ["fiebre", "titila ojo", "vómitos"];
let COVID_19 = ["fiebre", "dolor muscular", "pérdida de gusto"];

const esCovid = (paciente, sintomas) => {
  let contador = 0;

  for (let i = 0; i < paciente.length; i++) {
    if (paciente[i] === sintomas[i]) {
      contador += 1;
      console.log(`Sintoma ${sintomas[i]}`);
    }
  }

  return contador >= 2 ? true : false;
};

let es = esCovid(enfermo, COVID_19);
console.log();
console.log("- S I N T O M A S -");
console.table(COVID_19);
console.log(` - - - - - - - - - - - - - - - - - - -`);
console.log("- P A C I E N T E -");
console.table(enfermo);
console.log(`¿ El paciente esta enfermo ? ${es}`);
console.log();
console.log(` - - - - - - - - - - - - - - - - - - -`);

// VIERNES -- Ejercicio 5

let materias = ["MATEMÁTICA", "LENGUA", "GEOGRAFÍA", "PROGRAMACIÓN"];

const horarioCursada = (materia) => {
  let dia;
  switch (materia) {
    case "MATEMÁTICA":
      dia = "JUEVES";
      break;
    case "LENGUA":
      dia = "LUNES";
      break;
    case "GEOGRAFÍA":
      dia = "VIERNES";
      break;
    case "PROGRAMACIÓN":
      dia = "MARTES";
      break;
    default:
      dia = "MATERIA NO ENCONTRADA";
  }
  return dia;
};

console.log();
console.log("- H O R A R I O C U R S A D A -");
let cursada = horarioCursada(materias[0]);
console.log(`Deseo saber el dia de cursada de ${materias[0]} → ${cursada}`);
