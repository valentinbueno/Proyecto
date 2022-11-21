let apikey = '5af2599bc48eedc0c872d98ac992b8e3'
let QueryString = location.search
let QSobject = new URLSearchParams(QueryString)
let detail_id = QSobject.get('id')

let url_detailmovie = `https://api.themoviedb.org/3/movie/${detail_id}?api_key=${apikey}&language=en-US`

fetch(url_detailmovie)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let seccion = document.querySelector(".padre2")

        seccion.innerHTML +=
        `<h1 class="titulo"></h1>`
        `<p class="sinopsis"></p>`
                `<ul>
                    <li>Valoracion: </li>
                    <li>Genero: Acción</li>
                    <li>Fecha de estreno: </li>
                    <li>Duración: </li>
                    <li></li>
                </ul>`
    })