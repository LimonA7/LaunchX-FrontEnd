const cuadrado = function (x) {
  return x * x;
};

/*
let numero = 4;
let numeroAlCuadrado = cuadrado(numero);
console.log(numeroAlCuadrado);
*/

let numero = 8;
let numero2 = 19;
let sumaNumerosAlCuadrado = cuadrado(numero) + cuadrado(numero2);
console.log(sumaNumerosAlCuadrado);


const ruido = function () {
      console.log("Kataplum!");
}

ruido ()


const exponencial = function (base, exponente) {
  let resultado = 1;
  for (let i = 0; i < exponente; i++){
      resultado *= base;
  }
  return resultado;
}

let resultadoExponencial = exponencial(2, 17)
console.log(resultadoExponencial);


console.log(sumar(5,65));
function sumar(x, y){
    return x + y;
}

   
const restar = (a, b) => {
    return a - b;
}
console.log(restar(40, 8));


function saludar(quien) {
  console.log("Hola " + quien);
}
saludar("Limón");
console.log("Bye Limón");


/*
//Excepciones
function preguntaDireccion(pregunta) {
  let result = prompt(pregunta);
  if (result.toLowerCase() == "izquierda") return "I";
  if (result.toLowerCase() == "derecha") return "D";
  throw new Error("Direccion Invalida: " + result);
}

function mirar() {
  if (preguntaDireccion("A que lado") == "I") {
    return "una casa";
  } else {
    return "2 osos hambrientos";
  }
}

try {
  console.log("Mira a ", mirar());
} catch (error) {
  console.log("Hubo un error: " + error);
}
*/
/*
const preguntar = (pregunta) => {
  let respuesta = prompt(pregunta);
  respuesta = respuesta.toLowerCase();
  if (respuesta == "izquierda" || respuesta == "derecha") return respuesta;
  throw new Error("Direccion Invalida " + respuesta);
};

const mirar2 = () => {
  let aDonde = preguntar("¿A que lado volteas?")
  if (aDonde == "izquierda") {
    return "una casa";
  } else {
    return "2 osos hambrientos";
  }
};

try {
  let aDonde = mirar2();
  console.log("Mirar a", aDonde)
} catch (error) {
  console.log("Hubo un error:", error);
}
*/


//Asincrono
setTimeout(() => console.log("Tick"),500);

let fifteen = Promise.resolve(15);
fifteen.then((value) => console.log(`Got ${value}`));

const promesa = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (resolve(console.log("Todo Cool")), reject(new Error("oops"))),
      2000
    )
  );



async function main() {
  //   promesa()
  //     .then(() => {
  //       promesa()
  //         .then(() => console.log('Hola'))
  //         .catch((err) => console.error(err)) 
  //     })
  //     .catch((err) => console.error(err))

  await promesa();
  console.log("Aqui termina la primera promesa")
  await promesa();
  console.log("Aqui termina la segunda  promesa")
}


main();