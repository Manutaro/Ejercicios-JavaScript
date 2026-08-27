// VALIDANDO CONTRASEÑAS.

/**
 * Dado a un arreglo de contraseñas, recorre cada una de ellas y muestras en consola
 * si cumple con la siguiente regla:
 * 
 * - La contraseña contiene al menos 8 caracteres.
 * 
 * Ejemplo:
 * arreglo = ["admin", "clave1234", "pass","supersegura123"]
 * -Contraseña 1 no es válda.
 * -Contraseña 2 es válida.
 * etc..
 *
 */

let contraseñas = ["admin","clave1234","pass","supersegura123"];

// array.lenght indica cuantas contraseñas hay.
for(let i = 0; i < contraseñas.length; i++){

//  array[i].lenght cuenta los caracteres de las contraseñas.
    if(contraseñas[i].length >= 8){ // verifica si tiene 8 o mas caracteres.

        console.log("La contraseña:" + (i + 1) + " ¡Es validad!");
        // (i + 1) hace que la numeracion empiece en 1 y no en 0.

    }else{
        console.log("La contraseña: " + (i + 1) + " ¡No es valida!");
    }
}