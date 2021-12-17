/* 

ARREGLOS

Collecion de elementos
Tiene metodos o funciones que nos
permiten ordenar o manipular los datos almacenados 


*/

// manera 1
/* const arreglo1 = [4, "hola", true [1,2,3]];
console.log (arreglo1);

// manera 2 
const arreglo2 = Array.of (1, "hola", true);
console.log (arreglo2);

//manera 3
const arreglo3 = new Array (3, "hola", true);
console.log (arreglo3); */


const frutas = ["manzanas", "naranjas", "uvas","sandias",
[1,2,3,4,5,["A","B","C"]]];

// anoracion de corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]); // "5"
console.log(frutas[4][5][1]); // "B"

// Metodos

/* 
length = longitud del arreglo
*/

const letras = ["A", "B", "C", "D"];
console.log (letras. length);



/* 
push : añade un elemento al final de nuestro arreglo
*/

letras.push ("E");
console.log(letras);

/* 
pop : elimina el ultimo elemento que tengamos en el arreglo
*/
 letras.pop();
 console.log(letras);

 /* 
 unshift : agrega elemento al inicio del arreglo
 */

 letras.unshift(1);
 console.log(letras);

 /* 
 shift : elimina el primer elemento
 */

 letras.shift();
console.log(letras);