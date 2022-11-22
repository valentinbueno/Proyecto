let apikey = '5af2599bc48eedc0c872d98ac992b8e3'

//Como el array de los id favoritos esta en el localStorage, primero debemos recuperarlo

//Comenzaremos con las peliculas
let recuperoStoragePelis = localStorage.getItem("pelisFav")
let peliculas = JSON.parse(recuperoStoragePelis)
let favsPelis = document.querySelector(".favsPelis")
let pelisApi = ""

if (peliculas == null || peliculas.length == 0) { 
    favsPelis.innerHTML = '<p>No hay peliculas favoritas</p>'
    favsPelis.style.color = "white"
    favsPelis.style.fontSize = "30px"
    favsPelis.style.fontFamily = "Arial, Helvetica, sans-serif"
}

else {
    //Recorro el array con un for
    for(let i=0; i<peliculas.length; i++){
        buscarYMostrarPeliculas(peliculas[i])
    }
}

function buscarYMostrarPeliculas(detail_id){
    //Debe buscar los favoritos y mostrarlos en pantalla
    let url_movie = `https://api.themoviedb.org/3/movie/${detail_id}?api_key=${apikey}&language=en-US`

    fetch(url_movie)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data);

            pelisApi += 
            `<div class="full">
                <a href="./detail-movie.html?id=${detail_id}"><img  class="peli" src="https://image.tmdb.org/t/p/w500/${data.backdrop_path}"></a>
                <h3 class="nombres">${data.title}</h3>
                <li class="fechas">${data.release_date}</li>
            </div>`
            
            favsPelis.innerHTML = pelisApi; 

        })
        .catch(function(error){
            console.log(error);
        })
}

//Realizamos lo mismo para las series

let recuperoStorageSeries = localStorage.getItem("serieFav")
let series = JSON.parse(recuperoStorageSeries)
let favsSeries = document.querySelector(".favsSeries")
let seriesApi = ""

if (series == null || series.length == 0) { 
    favsSeries.innerHTML = '<p>No hay series favoritas</p>'
    favsSeries.style.color = "white"
    favsSeries.style.fontSize = "30px"
    favsSeries.style.fontFamily = "Arial, Helvetica, sans-serif"
}

else {
    //Recorro el array con un for
    for(let i=0; i<series.length; i++){
        buscarYMostrarSeries(series[i])
    }
}

function buscarYMostrarSeries(detail_id){
    //Debe buscar los favoritos y mostrarlos en pantalla
    let urldetailseries = `https://api.themoviedb.org/3/tv/${detail_id}?api_key=${apikey}&language=en-US`

    fetch(urldetailseries)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data);

            seriesApi += 
            `<div class="full">
                <a href="./detail-movie.html?id=${detail_id}"><img  class="peli" src="https://image.tmdb.org/t/p/w500/${data.backdrop_path}"></a>
                <h3 class="nombres">${data.original_name}</h3>
                <li class="fechas">${data.first_air_date}</li>
            </div>`
            
            favsSeries.innerHTML = seriesApi; 

        })
        .catch(function(error){
            console.log(error);
        })
}