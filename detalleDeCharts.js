window .addEventListener("load", function(){
    //Obtengo de la URL el código del artista
    let queryString = new URLSearchParams(location.search)
    let codigoDeArtista = queryString.get("pepinito3")
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart" + codigoDeArtista )
    .then (
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function(info){
        let detalleLista=info.data;
    console.log(info)
    for (let index=0;index< detalleLista.length;index++){
        cadaRenglon= detalleLista [index];
        let canciones=cadaRenglon.title
    }
    })
})