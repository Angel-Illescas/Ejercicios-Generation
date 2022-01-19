const urlAPI = 'https://jsonplaceholder.typicode.com/albums/1/photos'
const $llenar = document.querySelector('#llenar')

fetch(urlAPI)
    .then(resp => resp.json()).then(data =>{
        data.forEach(dato => { // con .foreach accedemos a todos los objetos del arreglo
            const imagen = dato.thumbnailUrl // en el ejercicio se pide que de ese arreglo obtengamos la imagen y el titulo y en automatico genere las tarjetas de boostrap , por eso filtramos  de dato solo la url y el titulo
            const titulo = dato.title
            console.log(imagen,titulo)

            const texto = `<div class="col mb-4">
            <div class="card">
              <img src="${imagen}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
              </div>
            </div>
          </div>` // generamos una template generica, la cual se autorellenara una vez que empiece a ejecutar los ciclos y lo ira poniendo en el html

            const espacio = document.createElement('div')
            espacio.innerHTML = texto

            $llenar.appendChild(espacio)

        })

    })