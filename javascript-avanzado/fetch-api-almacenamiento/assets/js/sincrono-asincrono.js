let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);

/* Codigo asincrono */

let variableAsincrona;

setTimeout(() => {  // es como si fuera un timer
    variableAsincrona = 10 * 3;
    console.log(variableAsincrona);
}, 2000); // milisegundos

console.log(variableAsincrona)
