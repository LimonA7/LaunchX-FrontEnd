/* Las variables se pueden declarar con la palabra reservada "var", estas variables se pueden considerar como globales.
Tambien se pueden reservar con la palabra "let" y estas seran usadas dentro de un bloqueo de código.
Igualmente esta la declaración con la palabra reservada "const" y se usara cuando el valor no cambie */
console.log("\n*************** Variables ***************\n")
var numero1 = 5;
let numero2 = 17;
const numero3 = 82;
console.log(" Número 1: " + numero1 + " Número 2: " + numero2 + " Número3 " + numero3);


/* Las cadenas (Strings) son caracteres que pueden ser una frase o palabra y estas pueden darse con comillas dobles "", simples '' o invertidas ``, la diferencia es que con las invertidas podemos agregar variables dentro de la cadena con las sintaxis ${} */
console.log("\n*************** Cadena ***************\n");
var frase1 = "Ejemplo de comillas dobles";
let frase2 = 'Ejemplo comillas simples';
var frase3 = `Ejemplo comillas ${frase1} invertidas`;

/* "\n" = Nos va a dar un espacio (enter) en la cosola. */
console.log(frase1 + "\n" + frase2 + "\n" + frase3);


/* Las condicionales se pueden usar valores como > *(mayor que) < *(menor que) == *(Revisa si tiene concordancia) === *(Analiza que efectivamente las cosas sean iguales) != *(diferente a) y cada una tiene una funcionalidadde comparacion entre elementos.
Valores Boolean = Son condicionales de verdadero o falso (True o False) */
console.log("\n***************Condicionales***************\n"); 

console.log(numero1 != numero2);
console.log(numero3 != numero2);
console.log(numero1 < numero2);
console.log(numero1 === numero1);
console.log(numero1 > numero2);
console.log(numero1 === numero2);
console.log(numero1 == numero2);


/* Los operadores logicos se utilizan cuando se necesitacomparar mas de una condicional. 
El operador && (AND) necesita que todos sus valores sean True para que la salida sea True. 
El operador || (OR)  necesita que solouno de sus valores sea True para que la salida sea True.*/
console.log("\n*************** Operador lógico AND ***************\n");
console.log(true && true);
console.log(true && false && true); 
console.log((true && false && true) || true); 
console.log (numero1 === numero1 && numero1 < numero2);

console.log("\n*************** Operador lógico OR ***************\n");
console.log(false || false);
console.log(false || true || false);
console.log(false || true || (false && true));
console.log(numero2 > numero1 || numero3 != numero3);


/* Los arreglos (vectores) son estructuras de datos que nos permiten agrupar datos de un mismo tipo */
console.log("\n*************** Arreglos ***************\n");
let listaDeNumeros = [2, 3, 5, 7, 11, 234];

console.log(listaDeNumeros [5]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

listaDeNumeros.pop()
console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras = ["Explorer", "MissionComander", "LaunchX", "Inovaccion", "JavaScript"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);


/* Las cadenas (Strings) pueden ser tratadas como arreglos */
let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);


/* Los objetos son estructuras de datos que nos permiten agrupar datos de diferentes tipos */
console.log("\n*************** Objetos ***************\n");

let explorer = {
  nombre: "Nombre del Explorer",
  email: "email@innovaccion.mx",
  numReg: 12345,
  mision: "FrontEnd",
  proyectos: ["Abogabot", "Taqueria","Pasteleria", "Vacunacion"],
  proPer: {
    escolar: "Tareas",
    profecional: "Trabajo",
    personal: "Negocio",
    cuantos: 3,
  },
};

console.log(explorer);
console.log(explorer.numReg);
console.log(explorer.proPer.escolar);
console.log(" Proyectos: " + explorer.proPer.cuantos + " " + explorer.proPer.escolar);


/* Flujo Condicional */
let number1 = 2;
let number2 = 6;
console.log("\n*************** if / else ***************\n");
if (number1 > number2 && number2 > 5) {
  console.log("El numero 1 es mayor que numero 2");
}
else if( number1 === number2 || number1 < 3){
  console.log("Los numeros son iguales");
}
else {
  console.log("El numero 2 es mayor que numero 1");
}


/* Ciclo condicional */
console.log("\n*************** While ***************\n");
let numberWhile = 5;
while (numberWhile <= 12) {
  console.log(numberWhile);
  numberWhile = numberWhile + 2;
}
console.log("Aqui ya salio el While " + numberWhile);


/* Ciclo condicional de una interaccion minimo */
console.log("\n*************** Do While ***************\n");
let numeroDoWhile = 22;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Aqui sale Do While " + numeroDoWhile);


/* Ciclo for con interacion controlada */
console.log("\n*************** For ***************\n");
let numeroFor = 0
for (numeroFor ; numeroFor <= 12; numeroFor = numeroFor + 1) {
  console.log(numeroFor);
} 
console.log("Aqui salimos del For " + numeroFor);


/* Opciones para evitar anidar condicionales */
console.log("\n*************** Switch ***************\n");
switch (prompt("¿Como esta el clima?")) {
  case "lluvioso":
  console.log("No te vayas a mojar"); 
  break;
case "soleado":
  console.log("Ponte Bloqueador");
  break;
case "nublado":
  console.log("Tapate bien");
  break;
  default:
    console.log("No se como esta el clima");
  break;
}
console.log("Aqui salimos del Switch"); 