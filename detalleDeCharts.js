window .addEventListener("load", function(){
    // es la manera de identificar lo escrito en el buscador
    let queryString = new URLSearchParams(location.search)
    //lo creaamos para utilizar lo que el usuario introdujo en la barra del buscador y darle un atributo
    let codigoDeAlbum = queryString.get("pepinito3")
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/"+ codigoDeAlbum)// muestra la ibnformacion del artista
    // desempaqueta la respuesta 
    .then (
        function(respuesta){
            return respuesta.json();
        }
    )
    // procesa, recorre la informacion para poder luego volcarla en donde deseemos
    .then(function(informacion){
            console.log(informacion)
            let detalleAlbum=informacion;// aca definimos esplicitamente que parte de este array vamos a usar
            let nombreDeAlbum=detalleAlbum.title;
            let foto= detalleAlbum.picture;
            let nombreDeArtista=detalleAlbum.creator.name
            let idA= detalleAlbum.id
            let portada=
            `
            <div class="divchart"><img class="fotochart" src="`+ foto +`" alt=""></div>
            <div class="h2"><a href="Artistas.html?pepinito3=`+ idA +`"><h2 class="h2letra"><b>`+nombreDeAlbum+`</b></h2></a></div>
            <div class="h3"><a href="Artistas.html"><h3 class="h3letra">`+nombreDeArtista+`</h3></a></div>
            
            `
            document.querySelector(".listado").innerHTML+= portada;
    })
 
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/"+ codigoDeAlbum )//muestra listado de tracks
    .then (
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function(info){
        console.log(info)
        listaTracks=info.tracks.data
        console.log(listaTracks)
        for (let index = 0; index < listaTracks.length; index++) {
            const cadaTrack = listaTracks[index];
            let nombreDeCancion=cadaTrack.title

            let renglon=
            `
            <li>
            <div class="renglones">
                              <div> <p class="numeros">`+ (index+1) +`</p></div>
                              <div> <section class="dentrolista"><h4 class="titulos">`+nombreDeCancion+`</h4> </div>
                              <div> <span class=" iconos uk-margin-small-right" uk-icon="check"></span></div>
                              <div> <a href="" uk-icon="heart" class=" iconos uk-margin-small-right"></a></div>
            </div>
            </li>
            `
            document.querySelector(".listado2").innerHTML+= renglon;
            
        }
    })
})
