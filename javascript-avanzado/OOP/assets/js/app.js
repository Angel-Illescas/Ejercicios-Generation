// Clases, molde que nos permite crear objetos

//simepre que sea una clase se incia con letra mayuscula

class Animal {
    constructor(nombremolde, especiemolde){ // sirve para crear la clase, contructor es una funcion

        this.nombre = nombremolde; 
        this.especie = especiemolde; // // this hace referencia a una variable que se crea internamente, mas hacia al contexto en que se esta utilizando 
    }

    presentarse () {
        document.write(`Hola soy ${this.especie} y me llamo ${this.nombre} </br>`);
    } // podemos agregar otro metodo

    /* metodos == function */

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie}`;
        return mensaje;
    }

// Getters y Setters
// get = obtener el valro de una variable
// set = fijar o cambiar el valor de una atributo

    get getNombre(){
        return this.nombre;
    }

    set setNombre (nombre){
        this.nombre = nombre;
    }

    get getEspecie(){
        return this.especie;
    }
    set setEspecie(especie){
        this.especie = especie;
    }

    // Metodos estaticos

    static saludar(){ // static lo convierte en un metdo estatico, pertence solo a al clase y no se hereda a los objetos , los demas animal1 , animal2 , animal3 no los tienen 

        return console.log('Hola, soy un metodo estatico');
    }
}

Animal.saludar();

// diganos que el class animal de aca arriba, es el template y los const que vamso haciendo retoman ese template y lo van llenando, sin necesidad de hacerlo todo desde 0, por eso el new, es como decir esta constante es uno nuevo de clase Animal




const Animal1 = new Animal ('Scooby', 'perro'); // con new le decimos que estamos creando un nueo objeto
    console.log(Animal1);

const Animal2 = new Animal ('Pecas', 'Gato');
    console.log(Animal2);

const Animal3 = new Animal();
    console.log(Animal3);




Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = 'Scrappy';
console.log(Animal1.nombre);
console.log(Animal1);

document.write(Animal1.cambiarNombre('Oddie'));

console.log(Animal1.getNombre);
Animal1.setNombre = 'Manchas';
console.log(Animal1.getNombre);








