//    La página debe mostrar:
// El listado de las películas o series pertenecientes al género que seleccionó. El end point para usar es "Discover".
// El nombre del género. En caso de que no se encuentre el género o no exista, debe indicarse un mensaje de error.
// Lista de películas o series con su foto y su nombre. Al clickear en cualquiera de las series/ películas debe redirigir al detalle (punto 4).
// Entregable: Archivo detail-genres.html (o similar) y archivo detail-genres.js (o similar) junto con todos los recursos necesarios y estilos de css.


let apikey = '5af2599bc48eedc0c872d98ac992b8e3'

//obtengo la qs

let QueryString = location.search

//construyo objeto literal


let QSobject = new URLSearchParams(QueryString)

//obtengo el id de la propiedad del objeto literal


let detail_id = QSobject.get('id')

//endpoint con el id de la qs

//fetch

let urldetallegeneros = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${detail_id}&with_watch_monetization_types=flatrate`

fetch(urldetallegeneros)
	.then(function(response){
	return response.json();

})

	.then(function(data){
	console.log(data);


    let arraygeneros = data.results
    let seccion = document.querySelector(".padre1")
    let elementospeliculas= ''
    let resultado = ''

    for (let i=0; i< arraygeneros.length; i++){
        if(arraygeneros[i].poster_path ==null) {

        resultado +=
        `<p class = "error > Hubo un error, no encontraron peliculas o series para dicho genero`

        seccion.innerHTML = resultado }

    else{
        elementospeliculas+=
            `<li> ${arraygeneros[i].original_title} </li>`




            
                  



    
            

        //     <h1 class="titulo">${data.original_name}</h1>
        //     <div class="desc">
        //         <img class="imgdetalleseries" src="https://image.tmdb.org/t/p/w500/${data.poster_path}"/>
        //         <p class="sinopsis"> ${data.overview}</p>
        //         <ul>
        //             <li>Valoracion: ${data.vote_average}</li>
        //             <li>Fecha de Estreno: ${data.first_air_date}</li>
        //             <li>Temporadas:${data.number_of_seasons}</li>       
        //             <li>Genero: 
        //                 <ul class=listadetalles></ul>
        //              </li>                
             
        //         </ul>
        //     </div>
        // </div>`





        }
    
    

    }





    

})


.catch(function(error){
	console.log('El error es: ' + error);
})
