/* 
CONDICIONALES

Se utilizan para tomar desiciones 
dentro de nuestro programa


*/

/* 
if (condicion) {

    codigo
    codigo
    codigo
    codigo
    codigo
    codigo

} */

/* 
let edad = 15;

if(edad >= 18) {
document.write("Eres mayor de edad, puede votar");
}
else {
document.write("lo siento no puedes votar");
}; 


ACA NOSOTROS LE DAMOS EL RESULTADO DE EDAD CON let
*/



// EJERCICIO PARA QUE EL USURIO NOS DE LOS DATOS

let edad = parseInt(prompt('¿Cual es tu edad?'));



if(edad >= 18 && edad < 30) {
    document.write("Eres un joven");
} else if(edad > 30 && edad < 60) { 
    document.write("Eres un adulto");
} else if (edad >= 60){
    document.write("Eres un adulto mayor");
} else {
    document.write("Lo siento eres un bebe ");
}

