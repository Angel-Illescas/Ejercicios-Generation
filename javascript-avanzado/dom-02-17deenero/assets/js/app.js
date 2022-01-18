/* let $titulo = document.getElementById('titulo'); // " $ " hace referencia a un elemento del DOM.
titulo.textContent = 'Titulo escrito desde JS'; */

let $titulo = document.querySelector('#titulo');  // Para etiqueta 'p' , por class '.class' y por  id '#titulo', EL QUERY  PUEDE ACCERDER A LOS ELEMENTOS SIN NECESARIAMENTE SER PURO ID COMO CON GETBYID , digamos que es el mas universal.
$titulo.textContent = 'Titulo escrito desde JS';

let $parrafo = document.querySelector('p'); // Solo el primero que encuentre
console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll('p'); // Encuentra todos los que coinciden con el paramentro por eso  .querySelectorAll
console.log($parrafos.textContent);
console.log($parrafos[1].textContent); // es la forma en que se accede a la informacion del primer 'p' que encuentra

let $subtitulo = document.createElement('h3'); // Solo lo ha creado en memoria, aun no esta en el html 
$subtitulo.textContent = 'Este es un subtitulo creado desde JS'; // Sigue sin estar en el htmm
document.body.append($subtitulo); // Hasta aqui por fin inserta el elemento.
// en >document< seria el html,  >.body< al body en html, el .append es el que lo coloca, pero al final del ultimo nodo, que en este caso seria el parrafo dos.

let $contenido = document.querySelector('#contenido');
console.log($contenido.textContent = '<br/>'); // Nos devuelve texto  y solo podemos escribir texto.
console.log($contenido.innerHTML = '<br/>'); // nos devulve todo lo que hay dentro, y hatsa nos deja escribir etiquetas html
console.log($contenido.outerHTML = 'hola'); // en comparacion de inner , outer no lo hace hacia dentro de la etiqueta, sino la toma tambien para modificarla, todo.



let $contenido2 = document.querySelector('#contenido2');
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo con .appendChild';

$contenido2.appendChild(contenidoParrafo);
// lo va agragar como hijo, dentro del elemento


let $contenido3 = document.querySelector('#contenido3');

let  $subtitulo2 = document.createElement('h4');
$subtitulo2.textContent = 'Este es el subtitulo2 desde Js';

$titulo.insertAdjacentElement('afterend', $subtitulo2);
// Ahora trabaja como hermano y no cmo hijo, diganos que a lado

/* $titulo.remove(); // lo elimina completamente  */
