/* Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
 */


let horausuario = parseInt(prompt('Cual es la hora en tu localidad'));

if(horausuario >= 6 && horausuario <=11){
    document.write(` <h1> Buenos dias </h1>`);
} else if (horausuario >= 12 && horausuario <=18){
    document.write(`<h1> Buenas tardes </h1>` );
} else if (horausuario >= 19 && horausuario <=23){
    document.write(` <h1>Buenas noches</h1>`);
} else  if (horausuario >= 0 && horausuario <=5){
    document.write(` <h1>Dejame dormir </h1>`);
} else {
    document.write(` <h1>Hora no valida</h1>`);
}
