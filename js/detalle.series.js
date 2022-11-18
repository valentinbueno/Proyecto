let detalleserie = `https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language=en-US&page=1`


fetch(detalleserie)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let detailserie = document.querySelector(".detail-sereie")
        let imagen = //FALTAAAA


        detailserie += 
        `<h2 class="tituloseriedetalle"></h2>`
        `<img class="imagenseriedetalle" src="">`
        `<h4 class="calificacionseriedetalle"><p>Clasificacion: </p></h4>`
        `<h4 class="fechaseriedetalle"><p>Fecha de estreno: </p></h4>`
        `<h4 class="sinopsisseriedetalle"><p>Sinopsis: </p></h4>`
        `<h4 class="generoseriedetalle"><p>Genero: </p></h4>`
        //FALTA AGREGAR TODO LO QUE VA DENTRO DE LAS LLAVES

        //for
        
        detailserie +=
        `<h2 class="plataformaseriedetalle"></h2>`
        `<section class="traile">
            <iframe></iframe>
        </section>`

                
    })

.catch(function(error){
    console.log(error);
})

    
