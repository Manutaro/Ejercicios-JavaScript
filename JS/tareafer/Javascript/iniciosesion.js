// CONTROL DE INTENTOS PARA INICIAR SESIÓN
/**
 * INSTRUCCIONES:
 * Simula un proceso de inicio de sesion que permita máximo 3 intentos.
 * Cada intento pedira una contraseña a través de prompt. Considera lo siguiente:
 * 
 * -Si el usuario ingresa "admin123", muestra el mensaje "Acceso concedido".
 * -Si falla las 3 veces, muestra el mensaje "Cuenta bloqueada".
 * 
 * Use un bucle do-while.
 */

let intentos = 0;
let contraseña;

do{
    contraseña = prompt("¡Ingresa la contraseña!:");
    intentos++; //Esto suma 1 cada vez que intenta.

    if (contraseña === "admin123"){
        console.log("¡Acceso concedido!");
        break; // Significa romper o detener el ciclo inmediatamente.

    }
} while (intentos < 3);// < aqui avanza mientras tenga menos de 3 intentos.
if(contraseña !== "admin123"){
    console.log("¡Cuenta bloqueada!");
}
