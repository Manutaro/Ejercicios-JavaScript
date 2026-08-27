// Escribe una funcion que realize cada una de las operaciones que se te indican:

/**
 * Calcular el volumen de una esfera.
 * 
 * Los resultados deben de ser mostrados en la consola con un mensaje que ayude a comprende el resultado.
 * 
 * Escribe la solucion en cada ejercicio con sintaxis de funcion común y funcion flecha.
 */
 
//1. Función común.
const PI = Math.PI;
let radio = parseFloat(prompt("Ingresa el radio de la esfera: "));

function volumenEsfera(radio) {
    let volumen = (4 / 3) * PI * Math.pow(radio, 3);
    console.log(`El volumen de la esfera con radio ${radio} es: ${volumen.toFixed(2)}`);
}
 
// 2. Función flecha.

const calcularVolumen = radio => {
    let radioCubo = Math.pow(radio);
    let v = 4/3*PI*radioCubo;
    return v;
};
