// Escribe una funcion que realize cada una de las operaciones que se te indican:

/**
 * Calcular la velocidad de un objeto dadas la distancia y el tiempo
 * 
 * Los resultados deben de ser mostrados en la consola con un mensaje que ayude a comprende el resultado.
 * 
 * Escribe la solucion en cada ejercicio con sintaxis de funcion común y funcion flecha.
 */


// 1. Funcion Común.

function calcularVelocidad(){
    let distancia = Number(prompt("Ingrese la distancia recorrida en kilometros:"));
    let tiempo = Number(prompt("Ingrese el tiempo en horas:"));
    let velocidad = distancia / tiempo;
    console.log("La velocidad de este objeto es: " + velocidad + "km/h");
}
calcularVelocidad();


// 2. Funcion Flecha.

const calcularVelocidadFlecha = () => {
    let distancia = Number(prompt("Ingrese la distancia recorrida en kilometros:"));
    let tiempo = Number(prompt("Ingrese el tiempo en horas:"));
    let velocidad = distancia / tiempo;
    console.log("La velocidad de este objeto es: " + velocidad + "km/h");
}
calcularVelocidadFlecha();



