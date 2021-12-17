/* Variable var se utiliza  antyeriormente, son variables globales */



var numero = 40;
console.log(numero); //40

if (true) {
    var numero = 50;
    console.log (numero); //50

}

console.log(numero); //40



var texto = "Bootcam Java";
console.log(texto); // Bj

if(true) { let texto="Cohorte 8";
console.log(texto);  // C8    let, digamos  que es de caracter local, solo en esa parte, mientras var es de caracter global
let numeroFavorito = 76;                              
}

console.log(numeroFavorito); // no lo va imprimir, porque solo viive dentro de las llaves
console.log(texto); // BJ

/* 
  let : Solo en una parte del codigo
         hace referencia a una variable local y sólo se puede acceder a ella desde el bloque en el que se encuentre, es decir afuera de { } es como si no existiera

  var : es una variable global y puede ser llamada desde cualquier parte del código


*/