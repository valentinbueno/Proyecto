//let formulario = document.querySelector(".formulario")
//let busqueda = document.querySelector(".search")
//let comentario =document.querySelector(".indicacion")
//let alerta = document.querySelector(".alerta")



//let QueryString = location.search

//construyo objeto literal


//let QSobject = new URLSearchParams(QueryString)

//obtengo el id de la propiedad del objeto literal


//let detail_id = QSobject.get('id')

//endpoint con el id de la qs

//fetch

//el metodo .get sirve para solicitar datos al servidor y .get() sirver para el valor de una clave dentro de la querystring. 
// Querystring es una cadena de texto que viaja por la url, cuando uno hace una petición por get al servidor.
// location.search, se divide en dos partes ya que location es un objeto literal que nos sirve para solicitar informacion de la URL. y .search sirve para poder almacenar la querystring de una URL.
//URLSearchParams sirve para definir distintos metodos utiles para poder trabajar con los parametros de una URL.

//formulario.addEventListener('submit',function(event){
    //event.preventDefault();
    //console.log(busqueda.value);
    
    //if (busqueda.value==""){
       //comentario.innerText = "No ingreso ningun dato"
       //alerta.style.display = "block"
       //busqueda.style.borderRadius = "10px 10px 0 0"
    //}
    
    //else if(busqueda.value.length<4){
        //comentario.innerText ="la busqueda debe tener al menos 3 caracteres"
        //alerta.style.display = "block"
        //busqueda.style.borderRadius = "10px 10px 0 0"
    //}



    //else{

    //let url = `https://api.themoviedb.org/3/search/company?api_key=5af2599bc48eedc0c872d98ac992b8e3&query=${busqueda.value}&page=1`


 //let resultado = documen.querySelector(".secciones")


     //fetch(url)
          //.then(function(response){
          //return response.json();
          //})
         //.then(function(data){
          //console.log(data);


              //if (data.result.length==0){
                 //resultado.innerText = `No hay resultados para: ${busqueda.value}`
             //}
             //else{
                 //titulo.innerText = `Resultado: ${busqueda.value}`
             //}
        
             //for (i=0; i<6; i++){
                 //`<h3 class="nombres z ingresado">${original_tittle}</h3>`
                 //`<div class="full">`
                     //`<img class="peli" src=https://image.tmdb.org/t/p/w500${poster_path}>`
                     //`<h3 class="nombres ingresado">Nombre${tittle}</h3>`
                 //`</div>`
             //}


             //})


             //.catch(function(error){
                 //console.log(error)
             //})

         //}})




        
    







    //     else{
//         let url=`https://api.themoviedb.org/3/search/company?api_key=5af2599bc48eedc0c872d98ac992b8e3&query=${busqueda.value}&page=1`
        
//         fetch(url)
//             .then(function(response){
//             return response.json();
//             })
//             .then(function(data){
//             console.log(data);

    //     else{
    //         let url=`https://api.themoviedb.org/3/search/company?api_key=5af2599bc48eedc0c872d98ac992b8e3&query=${busqueda.value}&page=1`
            
    //         fetch(url)
    //             .then(function(response){
    //             return response.json();
    //             })
    //             .then(function(data){
    //             console.log(data);

// //  catch(function(error){
//     console.log('El error es: ' + error);
// })

//  })


let formulario = document.querySelector(".formulario")
let busqueda = document.querySelector(".busqueda")
let comentario = document.querySelector(".indicacion")
let alerta = document.querySelector(".alerta")

let query = location.search
let querys = new URLSearchParams(query)
let buscador_1 = querys.get("buscador_1")

let secciones = document.querySelector(".secciones")
secciones.innerHTML += `Resultados para tu ${buscador_1}`

let url_peliculas = `https://api.themoviedb.org/3/search/movie?api_key=5af2599bc48eedc0c872d98ac992b8e3&language=en-US&page=1&include_adult=false`

fetch(url_peliculas)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let resultadodebusqueda = document.querySelector(".secciones");
        let informacion = document.querySelector(".informacion")
        if (data.resultadodebusqueda.length==0){
            resultadodebusqueda.innerText = `No hubo resultados para su ${buscador_1}`
        } 
        else{
            for(i=0; i<6; i++);
            let poster_path = data.resultados[i].poster_path
            let foto = `https://image.tmdb.org/t/p/w500/${poster_path}`
            let id = data.resultados[i].id
            informacion.innerHTML += `<article class = "pelicula">
                    <a href="./detail-movie?movie_id=${id}"> 
                    <img src="${foto}" alt="foto${data.results[i].original_title}"></a>
                    <p class = "titulo">${data.results[i].original_title}</p>
                    <p class= "fecha_de_estreno">${data.results[i].release_date}</p>
                </article>`
        }
    })
    .catch(function(error){
        console.log(error)
    })

let url_series = `https://api.themoviedb.org/3/search/tv?api_key=5af2599bc48eedc0c872d98ac992b8e3&language=en-US&page=1&include_adult=false`
fetch(url_series)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let resultadodebusqueda = document.querySelector(".secciones");
        let informacion_series = document.querySelector('.informacion_sobre_series');
        let informacion = document.querySelector(".informacion")
        if (data.resultadodebusqueda.length==0){
            informacion_series.innerHTML = "" //se deja vacio para que si no hay series, que no aparezca nada
        }
        else {
            for(let i=0; i<6; i++);
            let poster = data.resultados[i].poster_path
            let foto = `https://image.tmdb.org/t/p/w500/${poster}`
            let id = data.resultados[i].id
            informacion.innerHTML += `<article class = "serie">
                    <a href="./detail-serie.html?movie_id=${id}"> 
                    <img src="${foto}" alt="foto${data.results[i].original_title}"></a>
                    <p class = "titulo">${data.results[i].original_title}</p>
                    <p>${data.results[i].release_date}</p>
                </article>`
        }
    })
    .catch(function(error){
        console.log(error);
    })
