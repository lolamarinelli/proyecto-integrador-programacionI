window.addEventListener("load", function(){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function(info){
    console.log(info)
    let tracks = info.tracks.data
    for (let index = 0; index < tracks.length; index++) {
        const tracks1 = tracks[index];
        let cancionId = tracks1.id
        let nombre = tracks1.title
        let duracion = tracks1.duration
        let relleno =
        `
                <li class="unico1">
                    <div class="listacanciones">
                                  <div> <p class="numero">`+ (index+1) +`</p></div>
                                  <div> <section class="dentrolista"><a href= "detalletracks.html?cancion=`+cancionId+`"><h4 class="titulos">`+nombre+`</h4> </div>
                                  <div> <p class="duracion">`+duracion+`</p> </div>
                                  <div> <a href="" uk-icon="heart" class="uk-margin-small-right"></a></div>
                    </div>
                </li>
        `
                document.querySelector(".canciones2").innerHTML+= relleno;
    
    }
  

    
    })
})