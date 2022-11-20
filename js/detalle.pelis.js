let apikey = '5af2599bc48eedc0c872d98ac992b8e3'
let QueryString = location.search
let QSobject = new URLSearchParams(QueryString)
let detail_id = QSobject.get('id')
let favoritos = []
let botonFav = document.querySelector('.favoritos');


botonFav.addEventListener('click', function(){
    
    favoritos.push(detail_id)
    console.log(favoritos);

})