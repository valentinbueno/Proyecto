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

    else if(busqueda.value.length<3){
        comentario.innerText ="la busqueda debe tener al menos 3 carcteres"
        alerta.style.display = "block"
        busqueda.style.borderRadius = "10px 10px 0 0"
    }

    else{
        this.sumbit()

    }


})