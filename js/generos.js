let apikey = '5af2599bc48eedc0c872d98ac992b8e3'
let generosurl=`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`





fetch(generosurl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let section1 = document.querySelector('.generospeli');
        let elementosgenerospeli = ""

        
        for (let i=0; i<6; i++){
            elementosgenerospeli += `
            <li> ${data.genres[i].name}</li>`

        }
        
        section1.innerHTML = elementosgenerospeli
    })  

    .catch(function(error){
        console.log(error);
    })
