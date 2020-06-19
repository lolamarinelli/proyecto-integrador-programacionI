window .addEventListener("load", function(){
    //Obtengo de la URL el código del artista
    //empieza fetch xa mobile
    let queryString = new URLSearchParams(location.search)
    let codigoDeArtista = queryString.get("pepinito")
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoDeArtista )
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
            <h2 class="nombreartista"><a class="letra" href="">`+ nombreDelArtista +`</a></h2>
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
            let idA= cadaRenglon.album.id
            let listadoDeCanciones=
            `
            <li class="renglones">
                            <div class="listaTracks">
                              <div> <p class="numerito">`+ (index+1) +`</p></div>
                              <div> <section class="dentrolista"><h4 class="titulos">`+canciones+`</h4> </div>
                              <div> <span class="uk-margin-small-right" uk-icon="check"></span></div>
                              <div> <a href="" uk-icon="heart" class="uk-margin-small-right"></a></div>
                            </div>
            </li>
            `
            document.querySelector(".canciones1").innerHTML+= listadoDeCanciones;
            
        }})
        //empieza fetchs xa desktop
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoDeArtista )// primera parte 
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
        <li class="fotobunny1">
            <img class="centrobunny1" src="`+imgDelArtista+`" alt="">
        </li>
        <li class="letrabunny1">
            <h2 class="letra1"><a class="letra2" href="">`+nombreDelArtista+`</a></h2>
            <p class="fans1">`+fansDelArtista+` fans</p>
            <h5 class="seguir1"><a class="seguir2" href="">Seguir</a></h5>
        </li>
        `
            document.querySelector(".informacion").innerHTML += imagen;
    })
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoDeArtista+ "/top")// lista de canciones
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
            let idA= cadaRenglon.album.id
            let listadoDeCanciones=
            `
        
            <li class="unico1">
                <div class="listacanciones">
                              <div> <p class="numero">`+ (index+1) +`</p></div>
                              <div> <section class="dentrolista"><h4 class="titulos">`+canciones+`</h4> </div>
                              <div> <span class="uk-margin-small-right" uk-icon="check"></span></div>
                              <div> <a href="" uk-icon="heart" class="uk-margin-small-right"></a></div>
                </div>
            </li>
            `
            document.querySelector(".canciones2").innerHTML+= listadoDeCanciones;
                
        }})
        
})

