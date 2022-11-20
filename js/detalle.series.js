let apikey = '5af2599bc48eedc0c872d98ac992b8e3'

//obtengo la qs

let QueryString = location.search

//construyo objeto literal


let QSobject = new URLSearchParams(QueryString)

//obtengo el id de la propiedad del objeto literal


let detail_id = QSobject.get('id')

//endpoint con el id de la qs

//fetch

let urldetailseries = `https://api.themoviedb.org/3/tv/${detail_id}?api_key=${apikey}&language=en-US`

fetch(urldetailseries)
	.then(function(response){
	return response.json();

})

	.then(function(data){
	console.log(data);


    let seccion = document.querySelector(".padre2")


    seccion.innerHTML+=
    `<div class="textos">
        <h1 class="titulo">${data.original_name}</h1>
        <div class="desc">
            <img class="imgdetalleseries" src="https://image.tmdb.org/t/p/w500/${data.poster_path}"/>
            <p class="sinopsis"> ${data.overview}</p>
            <ul>
                <li>Valoracion: ${data.vote_average}</li>
                <li>Fecha de Estreno: ${data.first_air_date}</li>
                <li>Temporadas:${data.number_of_seasons}</li>       
                <li>Genero: 
                    <ul class=listadetalles></ul>
                 </li>                
         
            </ul>
        </div>
    </div>`


    let listadetalles = document.querySelector(".listadetalles")
    
    let elementosgenerosdetalles=''

    for (let i=0; i<data.genres.length; i++){
        elementosgenerosdetalles +=


    `<li>${data.genres[i].name}</li>`
    }

    
    listadetalles.innerHTML += elementosgenerosdetalles



})
	.catch(function(error){
	console.log('El error es: ' + error);
})


let providers_url = `https://api.themoviedb.org/3/tv/${detail_id}/watch/providers?api_key=${apikey}`

fetch(providers_url)
	.then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);

    let proveedores = ''


//aca arranca lo de los ifs
// su DetalleSerieContent es proveedores en la nuestra, osea ahi tenes que remplazar eso
// su DetalleSerieSection es nuestro seccion






})
	.catch(function(error){
	console.log('El error es: ' + error);
})

