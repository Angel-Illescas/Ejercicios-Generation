let title = document.getElementById('title');

console.log(title);
title.textContent = 'Este texto esta escrito desde Javascript';

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

/* parrafos[0].textContent = 'Parafos escritos desde Javascript';

for(let i = 0; i < parrafos.length; i ++){
    parrafos[1].textContent = 'parafo' + i + 'escritos desde Javascript'
} */

let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation(){
    console.log(email.value);
    console.log(password.value);
}
