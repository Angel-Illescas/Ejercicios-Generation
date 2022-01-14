/* 
Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio.
*/

let numeros = [1,3,5,33,42,12,89,09,67,23,12,34,556,6776,90];
let sumar = 0;
let promedio = 0;

for (let i = 0; i < numeros.length; i ++) {  // digamos que en esta parte le vas indicar desde donde hasta cuando debe hacer ese ciclo
    sumar += numeros[i]; // el += toma el valor 0 (el que desee) y le va sumar el siguiente a la derecha
    promedio = sumar / numeros.length;
}

document.write('<br/>' +'Arreglo de numeros: ' + numeros + '<br/>');
document.write('<br/>' +'Suma: ' + sumar + '<br/>');
document.write('<br/>' +'Promedio: ' + promedio + '<br/>');