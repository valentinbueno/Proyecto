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
            <div class="ordencontenido">
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
        </div>
    </div>`


    let listadetalles = document.querySelector(".listadetalles")
    
    let elementosgenerosdetalles=''

    for (let i=0; i<data.genres.length; i++){
        elementosgenerosdetalles +=


    `<a href="./detail-genres.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type=serie"><li> ${data.genres[i].name}</li></a>`
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
        console.log(data)
        let container = document.querySelector(".proveedores")
        let proveedores = ""
        for (i=0; i<data.results.US.flatrate.length;i++){
            proveedores += 
            `<img class="imgprov" src="https://image.tmdb.org/t/p/w500/${data.results.US.flatrate[i].logo_path}" alt='${data.results.US.flatrate[i].provider_name}' />`
        }
        container.innerHTML = proveedores
    })
    .catch(function(error){
        console.log(error)
    })

    
    
   


//Creamos un array vacio
let seriesFavoritas = []

//Buscamos si ya hay info en el array
let recuperoStorage = localStorage.getItem('serieFav')

if (recuperoStorage !== null){
    seriesFavoritas = JSON.parse(recuperoStorage)
}

//Seleccionamos el boton de favoritos
let botonFav = document.querySelector('.favoritos');

//Si el id ya esta en la lista, el boton debe ofrecer la opcion de quitar de favoritos
if (seriesFavoritas.includes(detail_id)){
    botonFav.innerText = "Eliminar de favoritos"
}

//Creamos un evento para cuando se haga click en el boton de favoritos
botonFav.addEventListener('click', function(){
    
    //Chequear si ya esta el id en el array
    if (seriesFavoritas.includes(detail_id)){
        let indiceserie = seriesFavoritas.indexOf(detail_id)
        seriesFavoritas.splice(indiceserie, 1)
        botonFav.innerText = "Agregar a Favoritos"
    }
    else{
        //Guardamos el id de la serie seleccionada en el array vacio
        seriesFavoritas.push(detail_id)
        botonFav.innerText = "Eliminar de Favoritos"
    }


    
    //Guardamos el id en el localStorage
    let favsToString = JSON.stringify(seriesFavoritas)
    localStorage.setItem('serieFav', favsToString)

    console.log(localStorage);
})