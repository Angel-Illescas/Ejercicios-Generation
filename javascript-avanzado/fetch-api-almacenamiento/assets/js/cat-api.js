let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search') // Primero fetch hace la peticion a la direccion, se la damos
        .then(resp => resp.json()).then(data => { console.log(data);   // then recibe una respuesta  =>, y despues convertimos esa respuesta en un objeto json, para poder manipularlo mejor , pero aun necesitamos procesar esa promesa .jsan, por eso agregamos otro .then y ahora si podemos trabajar con ese objeto
        
            let imagenGatito = document.createElement('img'); // creamos la etiqueta en el html
            imagenGatito.src = data[0].url; // le damos valor
            document.body.appendChild(imagenGatito); // lo agregamos al body
            
        });
});

let $btnPerro = document.querySelector('#btnPerro');

$btnPerro.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random') // 
        .then(resp => resp.json()).then(data => { console.log(data);   // 
        
            let imagenPerrito = document.createElement('img'); // 
            imagenPerrito.src = data.message; // como no nos da la respuesta en un arrglo sino en un objeto, por eso en compracion con el de gatitos, accedemos a la url por medio de .message
            document.body.appendChild(imagenPerrito); // 
            
        });
});