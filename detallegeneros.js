window .addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoDeGenero = queryString.get("pepinito2")
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"+ codigoDeGenero)
    .then (
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function (informacion) {
        console.log(informacion);
        let info = informacion.data
        for (let index = 0; index < info.length; index++) {
            const element = info[index];
            let nombre = element.name
            let img = element.picture
            let detalle = `
            <div>
            <img class="" src="`+ img +`" alt="">
            <h1>`+nombre+`</h1>
            </div>
            `
            document.querySelector(".parte1").innerHTML += detalle

        }
        
     
        
    })









})