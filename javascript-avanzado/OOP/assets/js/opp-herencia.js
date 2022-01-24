class Pokemon{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    //metodos
    atacar(){
        return console.log(`${this.nombre} esta atacando`)
    }
}

class Pikachu extends Pokemon{
constructor (nombre, tipo, edad){
    super(nombre, tipo);
    this.edad = edad;
}

//metdod

evocluionar(){
    return console.log(`${this.nombre} esta evolucionando`)
    }
}

const Pikachu1 = new Pikachu ("Juan", "Electrico", 3); // Pertence a pikachu
console.log(Pikachu1);

Pikachu1.atacar();

const Pokemon1 = new  Pokemon ('Carmander', 'Fuego'); // pertence a la clase pokemon 
Pokemon1.atacar();
/* Pokemon1.evocluionar(); */
