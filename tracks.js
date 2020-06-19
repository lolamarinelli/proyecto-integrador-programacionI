window .addEventListener("load", function(){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556")
    .then(
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function(info){
        console.log(info)
    })
})