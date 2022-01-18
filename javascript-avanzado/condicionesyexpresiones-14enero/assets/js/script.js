/* 
Operaciones Aritmeticos 

+ - / % ()

*/

let operacion = 3 * 5 + (10-5);
document.write(operacion);
let operacion2 = 3 - 5 / 2 *4;
document.write('<br/>'+ operacion2 + '<br/>');

/* 
OPERADORES RELACIONALES
<, >, >=, <=, ==, === ,
*/


document.write( '<br/>'+ (7 < 7) + '<br/>');
document.write('<br/>' + (7 <= 7) + '<br/>');

document.write('<br/>' + (7 == '7') + '<br/>');
document.write('<br/>' + (7 === '7') + '<br/>');

document.write('<br/>' + (7 != '7') + '<br/>');  // operador extricto
document.write('<br/>' + (7 !== '7') + '<br/>');

/* 
 Incremento y decremento

+=, -=, *=, /=

*/

let incremento = 5;

incremento += 5;
document.write('<br/>' + (incremento) + '<br/>');

incremento -= 5;
document.write('<br/>' + (incremento) + '<br/>');

// el restultado es 5, pero porque guardo el valor de la ultima operacion de += 5

incremento *= 5;
document.write('<br/>' + (incremento) + '<br/>');

// lo mismo pasaria aqui que guardo el valor anterio de la operacion pasada 

incremento /= 5;
document.write('<br/>' + (incremento) + '<br/>');


/* 
OPERADOR UNARIO

++ , --

suman uno | restan uno


*/

let sumar = 0;
document.write('<br/>' + (sumar) + ' linea 65' + '<br/>');
sumar ++;
document.write('<br/>' + (sumar) + ' linea 67' + '<br/>');
sumar ++;
document.write('<br/>' + (sumar) + ' linea 97' + '<br/>');
sumar --;
sumar --;
document.write('<br/>' + (sumar) + ' linea 72' + '<br/>');
sumar --;
document.write('<br/>' + (sumar) + ' linea 74' + '<br/>');


/* 



*/
 
for (let i = 0; i < 10; i ++)
{
    /* CODIGO */
}


let num = 5;
document.write('<br/>' + (++num) + '<br/>'); /* // preincremento ++variable  || primero modifica el valor y ya despues hace uso de la variable    <<AQUI TIENE EL MISMO VALOR DE LA VARIABLE O SEA 5>> */
document.write('<br/>' + (num++) + '<br/>'); /* // postincremento variable++ || usara variable y despes hace el incremento << AQUI SI YA TIENE 6,YA LE AUMENTO AHORA SI>>   */

for ( let i = 0; i < 5; i++){
        //iteracion
        //primer iteracion, se detiene  
        console.log('Este es el cilo padre'); // >>HAY QUE VERLO EN CONSOLA<< PARA ENTENDER
    for  (j = 0; j < 5; j++){
        // hace sus propias iteraciones (repeticiones) propias
        console.log('Este es el ciclo hijo');        
    }
}



