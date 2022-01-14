/* const numeros = [] */

let numeros = new Array();
numeros = [1,2,3,4,5,6,7,8]

for (let i =0; i < numeros.length ; i++){ // el ++ en i++ (abrevidad de escribir i = i + 1) hace agregar una unidad si quisiera que vaya de dos en dos seria "i = i + 2" 
    document.write(` ${numeros[i]} <br/>`);
}