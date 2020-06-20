window.addEventListener("load", function(){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function(info){
    console.log(info))}
})