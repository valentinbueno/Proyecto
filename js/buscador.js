let formulario = document.querySelector(".formulario")

let busqueda = document.querySelector(".search")
let comentario =document.querySelector(".indicacion")
let alerta = document.querySelector(".alerta")

let titulo = `https://api.themoviedb.org/3/search/company?api_key=5af2599bc48eedc0c872d98ac992b8e3&query=${original_tittle}&page=1` 

let url = `https://api.themoviedb.org/3/search/company?api_key=5af2599bc48eedc0c872d98ac992b8e3&query=${busqueda.value}&page=1`
formulario.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(busqueda.value);
    })
    fetch(url)
             .then(function(response){
             return response.json();
             })
            .then(function(data){
             console.log(data);
            })
            .catch(function(error){
                console.log(error)
            })
        
if (busqueda.value==""){
    comentario.innerText = "No ingreso ningun dato"
    alerta.style.display = "block"
    busqueda.style.borderRadius = "10px 10px 0 0"
    }
             
else if(busqueda.value.length<4){
        comentario.innerText ="la busqueda debe tener al menos 3 caracteres"
        alerta.style.display = "block"
        busqueda.style.borderRadius = "10px 10px 0 0"
    }

    if (data.result.length==0){
        titulo.innerText = `No hay resultados para: ${busqueda.value}`
    }
    else{
        titulo.innerText = `Resultado: ${busqueda.value}`
    }

    for (i=0; i<6; i++){
        `<h3 class="nombres z ingresado">${original_tittle}</h3>`
        `<div class="full">`
            `<img class="peli" src=https://image.tmdb.org/t/p/w500${poster_path}>`
            `<h3 class="nombres ingresado">Nombre${tittle}</h3>`
        `</div>`
    }







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
            



    