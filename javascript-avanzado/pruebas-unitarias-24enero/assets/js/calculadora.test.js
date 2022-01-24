const {sumar} = require('./calculadora');

describe ('Prueba en el componente calculadora', () =>{

    // 
    test('Pruebas en la funcion sumar', () =>{

        expect (sumar(3,5)).toBe(8);
    });
});

const {restar} = require('./calculadora');

describe ('Prueba en el componente calculadora', () =>{

    // 
    test('Pruebas en la funcion restar', () =>{

        expect (restar(10,5)).toBe(5);
    });
});

const {multiplicar} = require('./calculadora');

describe ('Prueba en el componente calculadora', () =>{

    // 
    test('Pruebas en la funcion multiplicar', () =>{

        expect (multiplicar(3,5)).toBe(15);
    });
});

const {dividir} = require('./calculadora');

describe ('Prueba en el componente calculadora', () =>{

    // 
    test('Pruebas en la funcion dividir', () =>{

        expect (dividir(15,3)).toBe(5);
    });
});