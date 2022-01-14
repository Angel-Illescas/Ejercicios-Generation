let numeros = [1,2,3,4,5,6,7,8]

numeros.forEach((numero) =>{
    document.write(numero + ', ');
}); /// aqui se comviete en funcion de flecha

/* numeros.forEach(function (numero){
    document.write(numero + ', ');
}); */


/*
 .forEach  ES EL EQUIVALENTE DE Este PERO SIN TENER EL CONTADOR vvvv

for (let i =0; i < numeros.length ; i++){ 
    document.write(` ${numeros[i]} <br/>`);
} 
*/


/* 
numeros.forEach(function (numero, indice){
    document.write(numero + '-' + indice + '<br/>');
}); 
*/

let numeros2 = numeros.map(function(elemento){ // .map permite crear arreglo a partir de otro arreglo
    return elemento;
});

document.write('<br/>' + numeros2 + '<br/>');


/* 
let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas;

document.write('<br/>' + frutas + '<br/>');
document.write('<br/>' + frutas2 + '<br/>');

frutas2.push('pera');
document.write('<br/>' + frutas + '<br/>');
document.write('<br/>' + frutas2 + '<br/>');
 */

let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas.map(function(elemento){ // basicamente .map copia el arrglo original para poderlo modificar sin afectar al original
    return elemento  
});

document.write('<br/>' + frutas + '<br/>');
document.write('<br/>' + frutas2 + '<br/>');

frutas2.push('pera');
document.write('<br/>' + frutas + '<br/>');
document.write('<br/>' + frutas2 + '<br/>');



document.write('<br/>' + numeros.includes(1) + '<br/>'); // obtenermos verdadero o falso, porque confirma si el elemento esta dentro  o no del arreglo


let numerosPares = numeros.filter ((elemento) =>{
    if (elemento % 2 == 0){
        return true;
    } else{
        return false
    }
});

/* return elemento % 2 == 0; */

document.write('<br/>' + numerosPares + '<br/> ');



/* Filter  */


let frutasA = ['mango', 'uva', 'piña', 'mandarina', 'aguacate', 'sandia'];

let frutasFiltro = frutasA.filter((fruta) =>{
    /*
     if (fruta.includes('i')) {
        return true; // forma extensa
    } 
    */

    // .toLowerCase para convertirlo todo en minuscula y .toUperCase viceversa  

    return fruta.toLowerCase().includes('m'); // esta es la forma simplificada, la de arriba es la mas extensa.
});

document.write('<br/>' + frutasFiltro + '<br/> ');

/*  Sort */ // ordena, pero no es recomendable 

let otrosNumeros = [9, 2, 3, 5, 6, 7, 7, 6, 7]

document.write('<br/>' + otrosNumeros.sort() + '<br/> ');

/* Metodo Reverse */
/* INVIERTE EL ORDEN DE LOS ELEMENTOS DE UN ARREGLO */
document.write('<br/>' + numeros.reverse() + '<br/> ');

/* Metodo find */

//OBTIENE EL PRIMER ELEMENTO QUE CUMPLA CON LA CONDICION

let frutaEncontrada = frutas.find((elemento) => {
 return elemento.toLowerCase().includes('ma');
});

document.write ('<br/>' + frutaEncontrada + '<br/> ');