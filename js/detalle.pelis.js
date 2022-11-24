let apikey = '5af2599bc48eedc0c872d98ac992b8e3'
let QueryString = location.search
let QSobject = new URLSearchParams(QueryString)
let detail_id = QSobject.get('id')

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

let botonderecomendaciones = document.querySelector(".boton_recomendaciones")
botonderecomendaciones.addEventListener(`click`, function(){
    
    let imagen = `https://image.tmdb.org/t/p/w500/original`
    let peliculasrecomendadasseccion = document.getElementById("peliculasrecomendadas")
    
    if (botonderecomendaciones.innerText == "RECOMENDACIONES"){
        let urlrecomendaciones = `https://api.themoviedb.org/3/movie/${detail_id}/recommendations?api_key=${apikey}&language=en-US&page=1`
        fetch(urlrecomendaciones)
        .then(function(response){
          return response.json();
         })
        .then(function(data){
            console.log(data);
            let peliculasrecomendadas2 = ""

            for(i=0; i<5; i=i+1){
                peliculasrecomendadasseccion +=
                `<li class="pelicula">
                    <a class="titulos" href="./detail-movie.html?id=${data.results[i].detail_id}"></a>
                    <img src="${imagen + data.results[i].poster_path}" class="pelis"></img>
                    <h3>${data.results[i].name}</h3>
                    <h4>${data.results[i].first_air_date}</h4>
                </li>`
            }
            peliculasrecomendadasseccion.innerHTML = peliculasrecomendadas2 
        })
        .catch(function(error){
            console.log(error);
        })

        this.innerText = "dejar de ver recomendaciones"
    }
    else{
        let peliculasrecomendadas2 =""
        peliculasrecomendadasseccion.innerHTML = peliculasrecomendadas2 
        
    }
}) 


//Creamos un array vacio
let pelisFavoritas = []

//Buscamos si ya hay info en el array
let recuperoStorage = localStorage.getItem('pelisFav')

if (recuperoStorage !== null){
    pelisFavoritas = JSON.parse(recuperoStorage)
}

//Seleccionamos el boton de favoritos
let botonFav = document.querySelector('.favoritos');

//Si el id ya esta en la lista, el boton debe ofrecer la opcion de quitar de favoritos
if (pelisFavoritas.includes(detail_id)){
    botonFav.innerText = "Eliminar de favoritos"
}

//Creamos un evento para cuando se haga click en el boton de favoritos
botonFav.addEventListener('click', function(){
    
    //Chequear si ya esta el id en el array
    if (pelisFavoritas.includes(detail_id)){
        let indicepeli = pelisFavoritas.indexOf(detail_id)
        pelisFavoritas.splice(indicepeli, 1)
        botonFav.innerText = "Agregar a Favoritos"
    }
    else{
        //Guardamos el id de la serie seleccionada en el array vacio
        pelisFavoritas.push(detail_id)
        botonFav.innerText = "Eliminar de Favoritos"
    }


    
    //Guardamos el id en el localStorage
    let favsToString = JSON.stringify(pelisFavoritas)
    localStorage.setItem('pelisFav', favsToString)

    console.log(localStorage);
})