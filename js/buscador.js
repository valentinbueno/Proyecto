let formulario = document.querySelector(".formulario")

let busqueda = document.querySelector(".search")
let comentario =document.querySelector(".indicacion")
let alerta = document.querySelector(".alerta")


formulario.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(busqueda.value);
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

    })


    
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