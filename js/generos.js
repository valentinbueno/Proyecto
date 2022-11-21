let apikey = '5af2599bc48eedc0c872d98ac992b8e3'
let generospeliurl=`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`
let generoseriesurl = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apikey}&language=en-US`


fetch(generospeliurl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let section1 = document.querySelector('.generospeli');
        let elementosgenerospeli = ""

        
        for (let i=0; i<10; i++){
            elementosgenerospeli += 
            `<a href="./detail-genres.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type=pelicula"><li> ${data.genres[i].name}</li></a>`
        }
        
        section1.innerHTML = elementosgenerospeli
    })  

    .catch(function(error){
        console.log(error);
    })





fetch(generoseriesurl)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let section1 = document.querySelector('.generoseries');
    let elementosgeneroseries = ""

    
    for (let i=0; i<10; i++){
        elementosgeneroseries += 
        `<a href="./detail-genres.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type=serie"><li> ${data.genres[i].name}</li></a>`


    }
    
    section1.innerHTML = elementosgeneroseries
})  

.catch(function(error){
    console.log(error);
})



