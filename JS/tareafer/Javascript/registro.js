/**Crea un programa que reciba un numero n(cantidad de registros a procesar)
 * a través de un prompt, y muestre en consola un mensaje por cada registro
 * procesado, de la siguiente manera:
 * 
 * - Proceso 1 resgistrado....
 * -Proceso n registrado.....
 * 
 * Cuando se hayan completado todos los registros, mostrar en consola:
 * -Todos los procesos han sido registrados con exito.
 * 
 */

let numero = Number(prompt("¿Cuantos registros deseas procesar?"));

for(let i = 1; i <= numero; i++){
    console.log("Proceso " + i + " registrado...");
}

console.log("¡Todos los procesos han sido registrados con exito!");
