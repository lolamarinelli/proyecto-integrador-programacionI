window .addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoDeAlbum = queryString.get("pepinito3")
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart"+ codigoDeAlbum)
    .then (
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function(informacion){
            console.log(informacion)
            let detalleAlbum=informacion.playlist;
            let nombreDeAlbum=detalleAlbum.title;
            let foto= detalleAlbum.cover;
            let nombreDeArtista=detalleAlbum.artist.name
            let idA= detalleAlbum.artist.id
            let portada=
            `
            <div><img src="`+ foto +`" alt=""></div>
            <div class="h2"><a href="Artistas.html?pepinito3=`+ idA +`"><h2 class="h2letra"><b>`+nombreDeAlbum+`</b></h2></a></div>
            <div class="h3"><a href="Artistas.html"><h3 class="h3letra">`+nombreDeArtista+`</h3></a></div>
            
            `
            document.querySelector(".listado").innerHTML+= portada;
    })
 
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/"+ codigoDeAlbum )
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
            <div class="renglones">
                              <div> <p>`+ (index+1) +`</p></div>
                              <div> <section class="dentrolista"><h4 class="titulos">`+nombreDeCancion+`</h4> </div>
                              <div> <span class=" iconos uk-margin-small-right" uk-icon="check"></span></div>
                              <div> <a href="" uk-icon="heart" class=" iconos uk-margin-small-right"></a></div>
            </div>
            `
            document.querySelector(".listadetracks").innerHTML+= renglon;
            
        }
    })
})
