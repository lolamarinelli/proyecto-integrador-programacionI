window .addEventListener("load", function(){
    //Obtengo de la URL el código del artista
    let queryString = new URLSearchParams(location.search)
    let codigoDeArtista = queryString.get("pepinito")
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoDeArtista)
    .then (
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(informacion){
            let detalleArtista=informacion;
            console.log(informacion)
            let imgDelArtista= detalleArtista.picture
            let nombreDelArtista=detalleArtista.name;
            let fansDelArtista=detalleArtista.nb_fan;
            let imagen=
            `
            <img class="centrobunny" src="`+ imgDelArtista +`" alt="">
            `
            document.querySelector(".letrabunny").innerHTML += imagen;
            let artista=
            `
            <h2><a class="letra" href="">`+ nombreDelArtista +`</a></h2>
            `
            document.querySelector(".letrabunny").innerHTML+= artista;
            let seguidores=
            `
            <h6>`+ fansDelArtista+ `</h6>
            `
            document.querySelector(".fans").innerHTML+= seguidores;
        })
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoDeArtista+ "/top")
    .then (
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(info){
            let detalleLista=info.data;
            console.log(info)
            for (let index=0;index< detalleLista.length;index++){
            cadaRenglon= detalleLista [index];
            let canciones=cadaRenglon.title
            let imagenDeAlbum=cadaRenglon.album.cover;
            let nombreDeAlbum=cadaRenglon.album.title;
            let listadoDeCanciones=
            `
            <li class="renglones">
                            <div class="listaTracks">
                              <div> <p>`+ (index+1) +`</p></div>
                              <div> <section class="dentrolista"><h4 class="titulos">`+canciones+`</h4> </div>
                              <div> <span class="uk-margin-small-right" uk-icon="check"></span></div>
                              <div> <a href="" uk-icon="heart" class="uk-margin-small-right"></a></div>
                            </div>
            </li>
            `
            document.querySelector(".canciones1").innerHTML+= listadoDeCanciones;
            listaDeAlbums=
            `
            <div class="1">
                <a href="./album.html">
                    <img class="foto" src="`+imagenDeAlbum+`" alt=""><p class="titulo">`+nombreDeAlbum+`</p>
                </a>
            </div>
            `
            document.querySelector(".albums").innerHTML+= listaDeAlbums;
        }})
})