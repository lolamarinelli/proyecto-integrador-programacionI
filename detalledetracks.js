window .addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoTracks = queryString.get("cancion")
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/tracks/"+ codigoTracks)
    .then (
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function(informacion){
        console.log(informacion);
        
    })

})