window .addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoDeTrack = queryString.get("pepinito")
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+ codigoDeTrack)
    .then(
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function(info){
        console.log(info)
    })
})