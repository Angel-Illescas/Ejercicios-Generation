/* Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado */
let precio = parseInt(prompt('Ingresa el precio'));
let cuponUsuario = prompt('Ingresa tu cupon');
let descuento;

switch(cuponUsuario){
    case 'bronce','Bronce','BRONCE' :
        descuento = precio * 0.95;
        break;
    case 'plata', 'Plata', 'PLATA':
        descuento = precio * 0.90;
        break;
    case 'oro', 'Oro', 'ORO':
        descuento = precio * 0.85;
        break;
    case 'platino', 'Platino', 'PLATINO':
        descuento = precio * 0.80;
        break;    
    default:
        descuento = precio + ' (No se realizo ningun descuento: Cupon erroneo)';
        break;
}

document.write(`Precio Original:  <b>${precio}</b> <br> `);
document.write(`Precio con descuento:  <b>${descuento}</b>`);
