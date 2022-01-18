let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');
$texto.id = 'texto'; // le agregamos id desde js sin recurrir al html
/* $texto.style = 'color: red; font-size: 24px;'; // atributos de css */
/* vvvv es lo mismo que lo de arriba, pero lo correcto para agregar estilos */
$texto.className = 'bg-purple  h3'; 
/* $texto.className = 'h3';  */
/* $texto.className = 'h3'; */

$texto.classList.add('text-center'); 
//  en compracion con $texto.className = 'bg-purple'; , el class.list añade clses sin necesidad de eliminar las que ya estan.
$texto.classList.remove('bg-purple'); // para quitar clases en especifico

