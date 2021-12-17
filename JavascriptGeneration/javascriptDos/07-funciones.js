/* 

FUNCIONES

Nos sirven para escribir bloques de codigo que se pueden 
reutilizar


*/



let numero01 = 10;
let numero02 = 20;
let suma = numero01 + numero02;
document.write('<h1>'+ suma + '</h1>');

let numero03 = 10;
let numero04 = 220;
let suma2 = numero03 + numero04;
document.write('<h1>'+ suma2 + '</h1>');

 /* 
 Palabra reservada, seguida del nombre de la funcio, seguida de parentesis,
 seguida de llaves

 function sumar ( ) {
     
 }

 
 */

 function sumar (numero1, numero2) {
    let suma = numero1 + numero2;
    document.write('<h1>'+ suma + '</h1>');
 }

 sumar (23,23);
 sumar (10,10);