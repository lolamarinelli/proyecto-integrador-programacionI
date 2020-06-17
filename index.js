window .addEventListener("load", function(){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function(info){
        console.log(info);
        let artistas = info.artists.data
        for (let index = 0; index < artistas.length; index++) {
            const cadaArtista = artistas[index];
            console.log(cadaArtista);
            let nombre = cadaArtista.name;
            let id = cadaArtista.id
            let img = cadaArtista.picture
            
            let nuevoHtml= `
            <li>
                        <img src="`+ img +`" alt="" class="slider1">
                        <div class="uk-position-center uk-panel"><h1>
                        <a href= "Artistas.html?pepinito=`+ id +`">`+ nombre +`</a>
                        </h1></div>
            </li>
            `
            document.querySelector(".topartistas").innerHTML += nuevoHtml
        }
        
            
        
    })

    
})
