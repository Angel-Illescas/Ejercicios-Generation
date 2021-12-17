/* 
Ciclos - Bucles = loops

while: tarea repetitiva, segun

do while

for

*/

// white

/* 

let condicion = 1 ; valor inicial

while(condicion){
    tu codigo 
    modificacion a nuestro valor inicial

} */


// Imprimir los numeros de 1 - 10

/* let condicion = 1;

while(condicion <= 10){
    console.log(condicion);
   // condicion = condicion + 1;
   condicion++;

    
} */

/* condicion++; // ++ representa sumar un 1 */

/* let numero = 1;
numero++;
numero++;
numero++;
numero --; // hace lo contrario, quita un numnero
console.log(numero); */

/* 
* ciclo while
*/
/* 
let numero = 1; // primero ejecuta y luego revisa, de ahi la direnciea con while

do {
console.log(numero);
numero++;

} while(numero <= 10); */

/* 
Ciclo for

utiliza un contador para realizar las vueltas o ciclos
*/

/* for (let control = 1; control <= 10; control++) {
    console.log(control);
} */


const comidas = ["Pozole", "Tamales", "Tortas", "Tacos"];

for (let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}


