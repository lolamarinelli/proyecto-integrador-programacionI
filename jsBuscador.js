window.addEventListener("load", function(){
    let queryString = new URLSearchParams (location.search)
    let loBuscado = queryString.get("buscador");
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado)
    .then (
        function (respuesta) {
            return respuesta.json ();
        }
    )
    .then(
        function (informacion) {
            let resultado = informacion.data;
            console.log(resultado);
            
            if (resultado.length == 0){
                alert ("No hay resultados");
            }
            for (let index = 0; index < resultado.length; index++) {
                const cadaResult = resultado[index];
                let img = cadaResult.album.cover
                let nombre = cadaResult.title
                let id = cadaResult.album.id
                let foto = 
                `
                <section class="renglon">
                <div class="divDeJs"> 
                
                <a href=album.html?pepito2`+ id +`> <img src="`+ img + `" class="imgDeBuscador"> </a>
                <h4 class="h4Js">`+ nombre + `</h4>
                <i class="fas fa-play" aria-hidden="true" ></i>


                </div>
                </section>
              
                `
                document.querySelector(".listadoDeResultados").innerHTML += foto

            }
            
        }
    )
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:" + loBuscado)
    .then (
        function (respuesta) {
            return respuesta.json ();
        }
    )
    .then(
        function (info) {
            let result = info.data;
            console.log(result);
            
            if (result.length == 0){
                alert ("No hay resultados");
            }
            for (let index = 0; index < result.length; index++) {
                const cadaResultado = result[index];
                let nombreArt = cadaResultado.artist.name;
                let idArt = cadaResultado.artist.id;
                let imgArt = cadaResultado.artist.picture;
                let artista = `
                <section class="renglon2">
                <div class="divDeJs2"> 
                
                <a href=album.html?pepito=`+ idArt +`> <img src="`+ imgArt + `" class="imgDeBuscador2"> </a>
                <h4 class="h4Js2">`+ nombreArt + `</h4>
                <i class="fas fa-play" aria-hidden="true" ></i>


                </div>
                </section>
              
                `
                document.querySelector(".listadoDeArtistas").innerHTML += artista

            }
            
        }
    )
    




})