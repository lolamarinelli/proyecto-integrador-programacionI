window .addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoDeGenero = queryString.get("pepinito2")
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"+ codigoDeGenero)
    .then (
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function(informacion){
        console.log(informacion)
        

        })
        
     
        
    })
