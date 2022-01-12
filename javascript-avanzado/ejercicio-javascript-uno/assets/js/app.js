let nombre = document.getElementById('nombre');

function cambiarNombre(nombrecambiado){
    nombrecambiado = prompt("Escribe tu nombre:");
    nombre.textContent=nombrecambiado;
}