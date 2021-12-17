
/* 
CONDICIONALES
if (condicionales) {
 bloque de codigo
}

FUNCION

Bloqie de codigo reitilizable, para no estar escribiendo codigo que no sea repetitivo
 
function nombre (parametros) {

    intruciones que necesitamos para que se procese

        return 
}

nombre ( argumentos)


*/

function procesadorDeFrutas (manzanas, naranjas){
 let jugo = "Jugo de " + manzanas + " manzanas y " + naranjas + " naranjas " ;
 return jugo;
}

let jugoDeManzana = procesadorDeFrutas (4,0);

console.log (jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas (0,5);
console.log (jugoDeNaranja);