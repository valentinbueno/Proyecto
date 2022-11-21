let apikey = '5af2599bc48eedc0c872d98ac992b8e3'
let QueryString = location.search
let QSobject = new URLSearchParams(QueryString)
let detail_id = QSobject.get('id')
console.log(detail_id)
let favoritos = []
let botonFav = document.querySelector('.favoritos');


botonFav.addEventListener('click', function(){
    
    favoritos.push(detail_id)
    console.log(favoritos);

})

let url_detailmovie = `https://api.themoviedb.org/3/movie/${detail_id}?api_key=${apikey}&language=en-US`

fetch(url_detailmovie)
    .then(function(response){
    return response.json()
})
    .then(function(data){
    console.log(data);
        
    let seccion = document.querySelector(".padre2")

    seccion.innerHTML +=
    `<div class="textos">`
        `<h1 class="titulo">${data.original_title}</h1>`
            `<p class="sinopsis">${data.overview}</p>`
            `<img class="imagendetallepelicula" src="https://image.tmdb.org/t/p/w500/${data.poster_path}">`
                `<ul>
                    <li>Valoracion: ${data.vote_average}</li>
                    <li>Genero: ${data.genres_ids[i]}</li>
                    <li>Fecha de estreno: ${data.release_date}</li>
                    <li>Duración: </li>
                </ul>`
    `</div>`
        
    let listadetalles = document.querySelector(".listadedetalles")

    let elementosgenerosdetalles = ""

    for(let i=0; i<data.genres.length; i++){
        elementosgenerosdetalles += 

    `<li>${data.genres[i].name}</li>`
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
    console.log(data);
    
    
    
    let proveedores = ''
    `<a class= "plataforma" href="./detail-movie.html?=${data.detail_id}"></a>`
    seccion.innerHTML += proveedores
})
    .catch(function(error){
    console.log(error);
})


    //fetch (`https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=399cd9827f714613d04693cee425808c`)
    //.then (function(resp){
        //return resp.json()
    //})
    //.then(function(data){
        //console.log(data)
        //let container = document.querySelector(".proveedores")
        //let proveedores = ""
        //for (i=0; i<data.results.US.flatrate.length;i++){
            //proveedores += `
            //<li class="elemento_prov">
            //<img class="logo_prov" src="https://image.tmdb.org/t/p/w500/${data.results.US.flatrate[i].logo_path}" alt='${data.results.US.flatrate[i].provider_name}' />
            //</li>`
        //}
        //container.innerHTML = proveedores
    //})
    //.catch(function(error){
        //console.log(error)
    //})