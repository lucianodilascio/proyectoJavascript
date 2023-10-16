// Captura de entradas mediante prompt()
let num1 = prompt("Introduce el primer número: ");
let num2 = prompt("Introduce el segundo número: ");

// Declaración de las variables
let numero1 = parseFloat(num1); // Convertir a número de punto flotante (con decimales)
let numero2 = parseFloat(num2);

// Creación de un objeto
const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Ingeniero",
}


// Creación de un array
const listaNumeros = [2, 4, 6, 8, 10];

// Función para realizar operaciones matematicas según lo que el usuario desee
function realizarOperacion(operacion, a, b) {
  switch (operacion) {
    case "suma":
      return a + b;
    case "resta":
      return a - b;
    case "multiplicacion":
      return a * b;
    case "division":
      if (b !== 0) {
        return a / b;
      } else {
        return "No se puede dividir por cero.";
      }
    default:
      return "Operación no valida.";
  }
}

// Preguntar al usuario qué operación desea realizar
let operacionSeleccionada = prompt(
  "¿Qué operación deseas realizar? (suma, resta, multiplicacion, division)"
);

// Operación y salida de los resultados
let resultado = realizarOperacion(operacionSeleccionada, numero1, numero2);
console.log("El resultado de la operación es: " + resultado);

// método de búsqueda en el array
let encontrado = listaNumeros.find(function(elemento) {
  return elemento > 5;
});
console.log("El primer número mayor que 5 es: " + encontrado);

//  método de filtrado en el array
let filtrados = listaNumeros.filter(function(elemento) {
  return elemento % 2 === 0;
});
console.log("Los números pares en la lista son: " + filtrados);

// propiedades del objeto
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Profesión: " + persona.profesion);
