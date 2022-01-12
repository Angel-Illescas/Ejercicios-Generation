
/*  Flujo orden en que se ejecutan las declaraciones */

/* let miVariable = 10;
console.log(miVariable); */

/* Estructura de control de flujo */

/* let edad = 18;
let tienesIne = true;


if(edad >= 18 || tienesIne == true){
    console.log('Puedes entrar');
} else{
    console.log('No puedes entrar')
} */

/* Operador ternario
 es la forma simplificada del if

 (condicion a evaluar) "?" se ejectua si es verdadero ":" se ejecuta si es falso
*/


/* let edad1 = 17;

(edad1 >= 18)
 ? console.log('Mayor de edad')
 : console.log ('Menor de edad'); */


 

 /* let pregunta = (edad >= 18)
    ? 'Mayor de edad'
    : 'Menor de edad';

    console.log(pregunta); */

    /* let edad1 = 17;

    let preguntaEdad = `Tengo ${edad1} años y soy ${edad1 >=18} ` ? 'mayor': 'menor' de edad ;

    console.log(preguntaEdad);
*/

    /* let dia = 0; 

if(dia === 0){
    console.log('Domingo');
} else if (dia === 1){
    console.log('Lunes');
} else if (dia === 2){
    console.log('Martes');
} else if (dia === 3){
    console.log('Miercoles');
} else if (dia === 4){
    console.log('Jueves');
} */
    


// Switch

/*  
 stich (variable a evaluar){
     case valor:
         -codigo a ejecutar-
break;
       case valor:
         -codigo a ejecutar-
defaut
 }

*/

/* let dia = 2;

switch(dia){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break; 
    case 6:
        console.log('Sabado');
        break; 
    default:
        console.log('No es un dia valido')
        break
} */

let cuponDescuento = 'Oro';
let descuento;

switch(cuponDescuento){
    case 'Bronce':
        descuento = 5;
        break;
    case 'Plata':
        descuento = 10;
        break;
    case 'Oro':
        descuento = 15;
        break;
    default:
        console.log('Cupon erroneo');
        break;
}

console.log(descuento);