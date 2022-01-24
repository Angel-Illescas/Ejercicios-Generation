class Animalito{
    constructor(nombre,edad,especie,revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.enfermo = false;
        this.revisado = false;
    }
    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`)
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1; // para agregar en automatico 1 mas en la cantidad de pacientes revisados
        /* this.cantidadPacientes++; //es lo mismo */
        let mensaje = `Paciente agregado <br/>`;
        return document.write(mensaje);
    }

    modificarPacientesRevisados(){
        this.pacientesRevisados++;
    }

    revisarPaciente(paciente){
        if(paciente.revisado === false){
           paciente.revisado = true;
           this.modificarPacientesRevisados();
           /* this.pacientesRevisados++; */
           document.write('Paciente ha sido revisado');
        } else{
            document.write(`Este paciente ya fue revisado`);
        }
    }

    mostrarLista(){
        for(let i = 0; i < this.listaPacientes.length; i ++){
            document.write(' ' + this.listaPacientes[i].nombre) // primero nos mostrara el "objeto" con el [i], para que nos muestre como tal el nombre que tiene, le agregamos el "".nombre"
        }
        document.write(`<br/><br/> Cantidad de pacientes: ${this.cantidadPacientes} <br/> Pacientes revisados: ${this.pacientesRevisados}<br/>`)
    }

}

const VeterinarioPanchito = new Veterinario();

//Objetos creados de la clase Animalito
const Animalito1 = new Animalito('Manchas', 5,'Perro', false);
const Animalito2 = new Animalito('Galleta', 2, 'Perro', true);
console.log(Animalito1);
console.log(Animalito2);


VeterinarioPanchito.agregarPaciente(Animalito1);
VeterinarioPanchito.agregarPaciente(Animalito2);

console.log(VeterinarioPanchito.listaPacientes); // aqui nos va dando el listado de los pacientes animalistos, conforme vamos agregando pacientes con los metodos " VeterinarioPanchito.agregarPaciente(AnimalitoN); "


VeterinarioPanchito.mostrarLista();
VeterinarioPanchito.revisarPaciente(Animalito1);
VeterinarioPanchito.mostrarLista();
VeterinarioPanchito.revisarPaciente(Animalito2);
VeterinarioPanchito.mostrarLista();


VeterinarioPanchito.revisarPaciente(Animalito2);