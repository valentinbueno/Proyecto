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
    console.log(data.title);

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
})
	.catch(function(error){
	console.log('El error es: ' + error);
})

// // let qs = new URLSearchParams(location.search)
// // let serie_id = qs.get("id")

// // console.log(serie_id)


































// //     // el parametro que nos interesa del qs es el id.

// // let apikey = '5af2599bc48eedc0c872d98ac992b8e3'

// // let urldetalleserie = `https://api.themoviedb.org/3/tv/${serie_id}?api_key=${apikey}&language=en-US`


// // fetch(urldetalleserie)
// //     .then(function(response){
// //         return response.json();
// //     })
// //     .then(function(data){
// //         console.log(data);
// //          let detailserie = document.querySelector(".detail-sereie")
// //          let imagen = `https://image.tmdb.org/t/p/original`

        
// //        detailserie += 
// //          ` <div class="desc">
// //          <h2 class="titulo">${data.name}</h2>
// //          <p class="sinopsis">${data.overview}</p>
// //          <ul>
// //              <li>Valoracion: ${data.vote_average}</li>
// //              <li>Genero: </li>
// //              <li>Fecha de Estreno: ${data.first_air_date}</li>
// //          </ul>
// //      </div>`
        


          
// //          detailserie +=
// //          `<h2 class="plataformaseriedetalle">Trailer de ${data.name}</h2>`
// //          `<section class="trailer">
// //          <iframe class="trailer" width="560" height="315" src="https://www.youtube.com/embed/${data.name}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// //          <div class="textos"></iframe>
// //         </section>`

                
// //     })

// //  .catch(function(error){
// //      console.log(error);
// //     })





