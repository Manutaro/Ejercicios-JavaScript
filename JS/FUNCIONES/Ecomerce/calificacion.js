// PROMEDIAR CALIFICACIONES ENVIADAS POR USUARIOS.

/**
 * Dentro de un ecommerce de aparatos electronicos, uno de sus productos más
 * populares recibio una gran cantidad de calificaciones y se registraron dentro del
 * siguiente arreglo:
 * 
 * calificaciones = [4.3, 5.0, 4.1, 4.4, 3.1, 4.0];
 * 
 *
 * Tu tarea es calcular el promedio de las calificaciones enviadas.
 * 
 * Muestra en consola el resultado utilizando solo un decimal.
 */

const calificaciones = [4.3, 5.0, 4.1, 4.4, 3.1, 4.0];

let suma = 0;//Inicia en 0

//Recorre todas las calificaciones con for.
for (let i = 0; i < calificaciones.length; i++){ // .lenght te muestra cuantas calificaciones hay: 6.
    suma += calificaciones[i]; //va sumando cada numero.

} 
let promedio = suma/calificaciones.length; // aqui se calcula el promedio.
console.log("El promedio de las calificaciones de los usuarios es: " + promedio.toFixed(1));// .toFixed(1) muestra solo un decimal.
