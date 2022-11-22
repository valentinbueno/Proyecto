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
console.log(detail_id)

//endpoint con el id de la qs

//fetch

let urldetallegenerospeli = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${detail_id}&with_watch_monetization_types=flatrate`


let urldetallegenerostv = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${detail_id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

let genero = document.querySelector(".nombregenero")
let nombre = QSobject.get("name")
let type = QSobject.get("type")


genero.innerHTML = nombre

if (type =="pelicula"){

fetch(urldetallegenerospeli)
	.then(function(response){
	return response.json();

})

	.then(function(data){
	console.log(data);


    let arraygeneros = data.results
    let seccion = document.querySelector(".padre4")
    let elementospeliculas= ''


    for (let i=0; i< 10; i++){
        

        elementospeliculas+=
    
                       
             `<div class="fullgeneros">
                <a href="./detail-movie.html?id=${arraygeneros[i].id}"><img  class="peli" src="https://image.tmdb.org/t/p/w500/${arraygeneros[i].poster_path}"></a>
                <h3 class="nombres">${arraygeneros[i].title}</h3>
             </div>`

                seccion.innerHTML=elementospeliculas;


                
        }
        


    })


.catch(function(error){
	console.log('El error es: ' + error);
})


}

else if (type=="serie") {

    fetch(urldetallegenerostv)
	.then(function(response){
	return response.json();

})

	.then(function(data){
	console.log(data);


    let arraygeneros = data.results
    let seccion = document.querySelector(".padre4")
    let elementostv= ''


    for (let i=0; i< 10; i++){
        
        elementostv+=
    
                       
             `<div class="fullgeneros">
                <a href="./detail-serie.html?id=${arraygeneros[i].id}"><img  class="peli" src="https://image.tmdb.org/t/p/w500/${arraygeneros[i].poster_path}"></a>
                <h3 class="nombres">${arraygeneros[i].name}</h3>
             </div>`

                seccion.innerHTML=elementostv;
                
        }
        


    })


.catch(function(error){
	console.log('El error es: ' + error);
})



}

// else if(){

//     elementospeliculas +=
//    `<p class = "error > Hubo un error, no encontraron peliculas o series para dicho genero`

//    seccion.innerHTML = elementospeliculas }