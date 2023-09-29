



let costoZapatillas = 50;

function calcularCostoTotal(cantidad) {
    return costoZapatillas * cantidad;
}

let cantidadDeseada;

while (true) {
    let input = prompt("¿Cuántas zapatillas desea comprar?");
    cantidadDeseada = Number(input);

    if (!isNaN(cantidadDeseada) && cantidadDeseada > 0) {
        let costoTotal = calcularCostoTotal(cantidadDeseada);
        alert("El costo total de " + cantidadDeseada + " zapatillas es: $" + costoTotal);

        let respuesta = prompt("¿Desea comprar más zapatillas? (Sí o No)").toLowerCase();
        if (respuesta !== "si") {
            break; 
        }
    } else {
        alert("La cantidad ingresada no es válida. Por favor, ingrese un número válido mayor que 0.");
    }
}
