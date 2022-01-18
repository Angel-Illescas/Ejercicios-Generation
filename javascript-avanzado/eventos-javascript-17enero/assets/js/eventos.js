let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanError = document.querySelector('span');

$btnMensaje.addEventListener('click', () => {
 console.log('No me presiones');
});

$mensaje.addEventListener('keyup', (e) => {
/* console.log('Escribiste algo'); */
console.log(e.target.value);
/* console.log(e); */

if (e.target.value.length < 3){
    $spanError.classList.remove('hide');
    $spanError.classList.add('error');
} else{
    $spanError.classList.add('hide');
    $spanError.classList.remove('error');
}
});