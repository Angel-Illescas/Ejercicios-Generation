/* 
ARREGLO:

Lista de elementos 
*/

const comidas = ["Pozole", "Quezadilla", "Tacos"];

console.log(comidas.length);

/* 
push: colocar un elemento al final del arrglo
pop: retirar el ultimo elemento del arrglo
unshift: agrega un primer valor
shift: elimina el primer valor

*/

comidas.push("Torta");
console.log(comidas);

comidas.unshift("Pancita");
console.log(comidas);


/* 
forEach: nos puede ayudar a realizar una acccion por cada elemento 
de nuestro arrglo de manera automatica:

*/

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);

comidas.forEach(function(el){
 console.log(el);
})

const numeros = [1, 4, 7, 8];
console.log(numeros);

numeros.forEach(function(el){
let suma = el + 1;
console.log(suma);
})

/*  ejercicio */
const arr = [];

function suma(num){
 let sumMun = num + 1;
 return arr.unshift(sumMun);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);


console.log(arr);