let apikey = '5af2599bc48eedc0c872d98ac992b8e3'
let QueryString = location.search
let QSobject = new URLSearchParams(QueryString)
let detail_id = QSobject.get('id')
console.log(detail_id)
let favoritos = []
let botonFav = document.querySelector('.favoritos');


// botonFav.addEventListener('click', function(){
    
//     favoritos.push(detail_id)
//     console.log(favoritos);

// })

let url_detailmovie = `https://api.themoviedb.org/3/movie/${detail_id}?api_key=${apikey}&language=en-US`

fetch(url_detailmovie)
    .then(function(response){
    return response.json()
})
    .then(function(data){
    console.log(data);
        
    let seccion = document.querySelector(".padre2")

    seccion.innerHTML +=
    // `<div class="textos">`
    //     `<h1 class="titulo">${data.original_title}</h1>`
    //         `<p class="sinopsis">${data.overview}</p>`
    //         `<img class="imagendetallepelicula" src="https://image.tmdb.org/t/p/w500/${data.poster_path}">`
    //             `<ul>
    //                 <li>Valoracion: ${data.vote_average}</li>
    //                 <li>Genero: ${data.genres_ids[i]}</li>
    //                 <li>Fecha de estreno: ${data.release_date}</li>
    //                 <li>Duración: </li>
    //             </ul>`
    // `</div>`



    `<div class="textos">
        <h1 class="titulo">${data.original_title}</h1>
        <div class="desc">
            <img class="imgdetalleseries" src="https://image.tmdb.org/t/p/w500/${data.poster_path}"/>
            <div class="ordencontenido">

                    <p class="sinopsis"> ${data.overview}</p>
                    <ul>
                        <li>Valoracion: ${data.vote_average}</li>
                        <li>Fecha de Estreno: ${data.first_air_date}</li>
                        <li>Duracion:${data.runtime} minutos</li>       
                        <li>Genero: 
                            <ul class=listadetalles></ul>
                        </li>                           
             </div>
            </ul>
        </div>
    </div>`
        
   

    let listadetalles = document.querySelector(".listadetalles")
    
    let elementosgenerosdetalles=''

    for (let i=0; i<data.genres.length; i++){
        elementosgenerosdetalles +=


        `<a href="./detail-genres.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type=pelicula"><li> ${data.genres[i].name}</li></a>`
    }


    
    listadetalles.innerHTML += elementosgenerosdetalles


})
    .catch(function(error){
    console.log(error);
    })

    


let proveedores_url = `https://api.themoviedb.org/3/movie/${detail_id}/watch/providers?api_key=${apikey}`


fetch(proveedores_url)
	.then(function(response){
	return response.json();
})

    .then(function(data){
        console.log(data)
        let container = document.querySelector(".proveedores")
        let proveedores = ""
        for (i=0; i<data.results.US.flatrate.length;i++){
            proveedores += 
            `<img class="imgprov" src="https://image.tmdb.org/t/p/w500/${data.results.US.flatrate[i].logo_path}" alt='${data.results.US.flatrate[i].provider_name}' />`
        }
        container.innerHTML += proveedores
     
    })
    .catch(function(error){
        console.log(error)
    })


fetch(proveedores_url)
.then(function(response){
return response.json();
})

.then(function(data){
    console.log(data)
    let container = document.querySelector(".proveedores")
    let proveedores = ""
    for (i=0; i<data.results.MX.buy.length;i++){
        proveedores += 
        `<img class="imgprov" src="https://image.tmdb.org/t/p/w500/${data.results.MX.buy[i].logo_path}" alt='${data.results.MX.buy[i].provider_name}' />`
    }
    container.innerHTML += proveedores
 
})
.catch(function(error){
    console.log(error)
})


fetch(proveedores_url)
.then(function(response){
return response.json();
})

.then(function(data){
    console.log(data)
    let container = document.querySelector(".proveedores")
    let proveedores = ""
    for (i=0; i<data.results.KR.rent.length;i++){
        proveedores += 
        `<img class="imgprov" src="https://image.tmdb.org/t/p/w500/${data.results.KR.rent[i].logo_path}" alt='${data.results.KR.rent[i].provider_name}' />`
    }
    container.innerHTML += proveedores

 
})
.catch(function(error){
    console.log(error)
})


fetch(proveedores_url)
.then(function(response){
return response.json();
})

.then(function(data){
    console.log(data)
    let container = document.querySelector(".proveedores")
    let proveedores = ""
    for (i=0; i<data.results.CA.buy.length;i++){
        proveedores += 
        `<img class="imgprov" src="https://image.tmdb.org/t/p/w500/${data.results.CA.buy[i].logo_path}" alt='${data.results.CA.buy[i].provider_name}' />`
    }
    container.innerHTML = proveedores



 
})
.catch(function(error){
    console.log(error)
})
