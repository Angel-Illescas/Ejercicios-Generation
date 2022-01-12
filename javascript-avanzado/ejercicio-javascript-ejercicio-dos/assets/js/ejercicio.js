let actual = 2022;

let year = document.getElementById('year');


function calculo(calculoedad){
    calculoedad = prompt("Escribe año de nacimiento:");
    year.textContent = actual - calculoedad + ' años';
}