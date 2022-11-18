let qs = new URLSearchParams(location.search)
let serie_id = qs.get("id")

console.log(serie_id)


































//     // el parametro que nos interesa del qs es el id.

// let apikey = '5af2599bc48eedc0c872d98ac992b8e3'

// let urldetalleserie = `https://api.themoviedb.org/3/tv/${serie_id}?api_key=${apikey}&language=en-US`


// fetch(urldetalleserie)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//          let detailserie = document.querySelector(".detail-sereie")
//          let imagen = `https://image.tmdb.org/t/p/original`

        
//        detailserie += 
//          ` <div class="desc">
//          <h2 class="titulo">${data.name}</h2>
//          <p class="sinopsis">${data.overview}</p>
//          <ul>
//              <li>Valoracion: ${data.vote_average}</li>
//              <li>Genero: </li>
//              <li>Fecha de Estreno: ${data.first_air_date}</li>
//          </ul>
//      </div>`
        


          
//          detailserie +=
//          `<h2 class="plataformaseriedetalle">Trailer de ${data.name}</h2>`
//          `<section class="trailer">
//          <iframe class="trailer" width="560" height="315" src="https://www.youtube.com/embed/${data.name}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//          <div class="textos"></iframe>
//         </section>`

                
//     })

//  .catch(function(error){
//      console.log(error);
//     })

