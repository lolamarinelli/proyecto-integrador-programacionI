window.addEventListener("load", function(){
    let queryString = new URLSearchParams (location.search)
    let loBuscado = queryString.get("buscador");
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=" + loBuscado)
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
                let idA= cadaResult.id
                let foto =
                '<section class="renglon">'+
                '<div class="divDeJs">'+
                '<a href=album.html?pepinito='+ id +'> <img src="'+ img + '" class="imgDeBuscador"> </a>'+
                '<h4 class="h4Js">'+ nombre + '</h4>'+
                '</div>'+
                '<div><button class="songRepro" id-song="'+ idA + '"><i class="fas fa-play"></i></button></div>' +
                '</section>'
                document.querySelector(".listadoDeResultados").innerHTML += foto
            }
            var cancionButtonRepro = document.querySelectorAll("button.songRepro")
                for (let i = 0; i < cancionButtonRepro.length; i++) {
                    cancionButtonRepro[i].onclick = function (){
                     document.querySelector("nav.miniPlayer").innerHTML = '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=clasic&autoplay=true&playlist=false&width=350&height=350&color=de00ff&layout=light&size=small&type=tracks&id=' + this.getAttribute("id-song") +'&app_id=1" width="350" height="350"></iframe>'
                    }
                }
        })
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + loBuscado)
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
            for (let index = 0; index < 1; index++) {
                const cadaResultado = result[index];
                let nombreArt = cadaResultado.name;
                let idArt = cadaResultado.id;
                let imgArt = cadaResultado.picture;
                let artista = `
                <section class="renglon2">
                <div class="divDeJs2">
                <a href=album.html?pepinito=`+ idArt +`> <img src="`+ imgArt + `" class="imgDeBuscador3"> </a>
                <h4 class="h4Js2">`+ nombreArt + `</h4>
                <i class="fas fa-play" aria-hidden="true" ></i>
                </div>
                </section>
                `
                document.querySelector(".listadoDeArtistas").innerHTML += artista
            }
        }
    )
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" + loBuscado)
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
                let img = cadaResult.cover
                let nombre = cadaResult.title
                let id = cadaResult.id
                let foto =
                `
                <section class="renglon">
                <div class="divDeJs">
                <a href=album.html?pepinito=`+ id +`> <img src="`+ img + `" class="imgDeBuscador"> </a>
                <h4 class="h4Js">`+ nombre + `</h4>
                <i class="fas fa-play" aria-hidden="true" ></i>
                </div>
                </section>
                `
                document.querySelector(".listadoDeResultados").innerHTML += foto
            }
        }
    )
})








