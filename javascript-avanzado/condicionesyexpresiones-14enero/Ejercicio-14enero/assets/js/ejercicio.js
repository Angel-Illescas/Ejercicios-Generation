

let palabra = 'Hola Mundo';
let arreglo = palabra.split("");
/* console.log(arreglo);

console.log(arreglo.reverse().join("")); */
 

function invertirPalabra(cadena){
    let arreglo = cadena.split("");  // convirtiendo la cadena en un arreglo
    arreglo.reverse(); // invirtiendo el arreglo
    let cadenaInvertida = arreglo.join(""); // este metodo une los elementos de un arrgelo y nos regreesa un string
    return document.write(` Esta es tu palabra invertida  <b><i>${cadenaInvertida} </i></b>`);
};

invertirPalabra(prompt('Ingresa una palabra'));


