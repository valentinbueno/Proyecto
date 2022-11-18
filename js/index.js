let apikey = '5af2599bc48eedc0c872d98ac992b8e3'
let urlpopseries =`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language=en-US&page=1`
let urlpopmovies= `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
let urlvalomovies= `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`


let section1 = document.querySelector('.peliculaspop');
let section2 = document.querySelector('.seriespop');
let section3 = document.querySelector('.peliculasvalo');



fetch(urlpopmovies)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let contenedor = document.querySelector(".peliculaspop")
        for (let i=0; i<5; i++){
            console.log(data.results[i]);
            let title= data.results[i].title
            let imagen = data.results[i].poster_path
            let id= data.results[i].id
            contenedor.innerHTML += `<div class="full">
            <a href="./detail-movie.html"><img  class="peli" src="https://image.tmdb.org/t/p/w500/${imagen}"></a>
            <h3 class="nombres">${title}</h3>
            </div>`
        }
            section1.innerHTML = movie;
            return data 

    })

    .catch(function(error){
        console.log(error);
    })



fetch(urlpopseries)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let contenedor = document.querySelector(".seriespop")
        for (let i=0; i<5; i++){
            console.log(data.results[i]);
            let title= data.results[i].original_name
            let imagen = data.results[i].poster_path
            let id= data.results[i].id
            contenedor.innerHTML += `<div class="full">
            <a href="./detail-movie.html"><img  class="peli" src="https://image.tmdb.org/t/p/w500/${imagen}"></a>
            <h3 class="nombres">${title}</h3>
            </div>`
        }
            section1.innerHTML = series;
            return data 

    })

    .catch(function(error){
        console.log(error);
    })


    fetch(urlvalomovies)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let contenedor = document.querySelector(".peliculasvalo")
        for (let i=0; i<5; i++){
            console.log(data.results[i]);
            let title= data.results[i].title
            let imagen = data.results[i].poster_path
            let id= data.results[i].id
            contenedor.innerHTML += `<div class="full">
            <a href="./detail-movie.html"><img  class="peli" src="https://image.tmdb.org/t/p/w500/${imagen}"></a>
            <h3 class="nombres">${title}</h3>

            </div>`
        }
            section1.innerHTML = movie;
            return data 

    })

    .catch(function(error){
        console.log(error);
    })



