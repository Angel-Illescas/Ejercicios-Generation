/* 
Funciones

    Es un bloque de codigo reutilizabe. Puede tener o no parametros de entrada.
    Puede devolver o no un valor

*/

 function sumar(numero1,numero2) {
    // Operaciones o código a ejecutar
    return numero1 + numero2;
    console.log('Hola desde la funcion');  // si pongo algo abajo de return ya no se va hacer, return es la ultima instruccion
}



let numero1 = parseInt(prompt('Numero 1 '));
let numero2 = parseInt(prompt('Numero 2 '));
let suma = sumar(numero1, numero2);

document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);  // esta cadena se conoce como template string // backtick  ` ese simbolo


document.write(' La suma de ' + numero1 + ' y ' + numero2 + ' es ' + suma);  // concatenando 




/* function suma(numero1) {
    // Operaciones o código a ejecutar
    return numero1 + numero2;
   
}



let numero1 = parseInt(prompt('Numero 1 '));
let numero2 = parseInt(prompt('Numero 2 '));
let numero3 = 20 ;
let sumaNumeros = suma(numero3, numero2);

document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros} <br>`);  // esta cadena se conoce como template string // backtick  ` ese simbolo


document.write(' La suma de ' + numero1 + ' y ' + numero2 + ' es ' + sumaNumeros);  // concatenando
 */
