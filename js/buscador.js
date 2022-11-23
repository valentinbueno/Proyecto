
let formulario = document.querySelector(".form")
let busqueda = document.querySelector(".search")
let comentario = document.querySelector(".indicacion")
let alerta = document.querySelector(".alerta")


// formulario.addEventListener('submit',function(event){
//     event.preventDefault();
//     console.log(busqueda.value);
    
//     if (busqueda.value==""){
//     //    comentario.innerText = "No ingreso ningun dato"
//     //    alerta.style.display = "block"
//     //    busqueda.style.borderRadius = "10px 10px 0 0"
 
//     }
    
//     else if(busqueda.value.length<4){
//         // comentario.innerText ="la busqueda debe tener al menos 3 caracteres"
//         // alerta.style.display = "block"
//         // busqueda.style.borderRadius = "10px 10px 0 0"
//     }

// else{
//     this.submit()


// }
// })

let query = location.search
let QSobject = new URLSearchParams(query)
let search = QSobject.get("search")
console.log(search)

let resultados = document.querySelector(".resultadosdebusqueda")
resultados.innerHTML += `Resultados para ${search}:`

let url_peliculas = `https://api.themoviedb.org/3/search/movie?api_key=5af2599bc48eedc0c872d98ac992b8e3&language=en-US&page=1&include_adult=false&query=${search}`

fetch(url_peliculas)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let resultadodebusqueda = document.querySelector(".resultadosdebusqueda");
        let peliculasbuscadas = document.querySelector(".peliculasbuscadas")
        
        
        if (data.results.length==0){
            resultadodebusqueda.innerText = `No hubo resultados para su busqueda`
        } 

        
        else{
            for(i=0; i<5; i++) {
        
            peliculasbuscadas.innerHTML += 
            
            `<div class = "fullgeneros">
            // <a href="./detail-movie.html?id=${data.results[i].id}"><img  class="peli" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"></a>
                    <h3 class = "nombres">${data.results[i].original_title}</p>
                </div>`
        


        
            }}
    })
    .catch(function(error){
        console.log(error)
    })

let url_series = `https://api.themoviedb.org/3/search/tv?api_key=5af2599bc48eedc0c872d98ac992b8e3&language=en-US&page=1&include_adult=false&query=${search}`

fetch(url_series)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let resultadodebusqueda = document.querySelector(".resultadosdebusqueda");
        let seriesbuscadas = document.querySelector(".peliculasbuscadas")
        
        
        if (data.results.length==0){
            resultadodebusqueda.innerText = `No hubo resultados para su busqueda`
        } 

        else{
            for(i=0; i<5; i++) {
            seriesbuscadas.innerHTML += 
            
            `<div class = "fullgeneros">
            // <a href=".//detail-serie.html?id=${data.results[i].id}"><img  class="peli" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"></a>
            <h3 class = "nombres">${data.results[i].original_name}</p>
             </div>`
        


            }}
    })
    .catch(function(error){
        console.log(error)
    })



    