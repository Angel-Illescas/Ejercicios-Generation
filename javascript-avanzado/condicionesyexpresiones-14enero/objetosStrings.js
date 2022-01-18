let cadena1 = 'hola';
console.log(cadena1);

let cadena2 = new String ('Adios');
console.log(cadena2);

/* let arreglo = new Array(1);
console.log(arreglo); */


// Includes () busca una cadena en otra y regresa true or false

console.log(cadena2.toLowerCase().includes('a'));
// para minusculas o mayusculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

// Cohersión y conversión
/* 
Cohesion - Javascript convierte un automatico un tipo de dato en otro

*/


console.log(cadena1.toLowerCase());

/*  vamos hacer */

let palabra = 'Hola Mundo';
let arreglo = palabra.split("");
/* console.log(arreglo);

console.log(arreglo.reverse().join("")); */


function invertirPalabra(cadena){
    let arreglo = cadena.split("");  // convirtiendo la cadena en un arreglo
    arreglo.reverse(); // invirtiendo el arreglo
    let cadenaInvertida = arreglo.join(""); // este metodo une los elementos de un arrgelo y nos regreesa un string
    return console.log(cadenaInvertida);
};

invertirPalabra("Generation");




