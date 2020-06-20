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
                let idA = cadaArtista.id
                let img = cadaArtista.picture

                let nuevoHtml= `
                <li>
                            <a href="Artistas.html?pepinito=`+ idA +`"><img src="`+ img +`" alt="" class="slider1"></a>
                            <div class="uk-position-bottom uk-panel"><h1>
                            <a class="nombreartistas" href= "Artistas.html?pepinito=`+ idA +`">`+ nombre +`</a>
                            </h1></div>
                </li>
                `
 
                document.querySelector(".topartistas").innerHTML += nuevoHtml
            }
        })

        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
        .then(
            function(respuesta){
                return respuesta.json();
            }
        )

        .then(function (info){
            console.log(info)
            let cadaAlbum=info.albums.data
            for (let index = 0; index < 3; index++) {
             const cadaUno = cadaAlbum[index];
             console.log(cadaUno);
             let foto=cadaUno.cover
             let idAlb=cadaUno.id
             let portada=
             `
             <div><article><a href="album.html?pepinito=`+idAlb+`"><img src="`+foto+`" alt="" class="imgalbum"></a></article></div>
             `
             document.querySelector(".imgalbums1").innerHTML += portada  
             
            }
            for (let index = 4; index < 7; index++) {
                const cadaUno = cadaAlbum[index];
                console.log(cadaUno);
                let foto=cadaUno.cover
                let idAlb=cadaUno.id
                let portada=
                `
                <div><article><a href="album.html?pepinito2=`+idAlb+`"><img src="`+foto+`" alt="" class="imgalbum"></a></article></div>
                `
                document.querySelector(".imgalbums2").innerHTML += portada  
                
               }
        }
        )
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
        .then(
            function(respuesta){
                return respuesta.json();
            }
        )
        .then(function(infoD){
        // El paso 2 es identificar QUE necesitan mostrar. ¿Un listado de elementos? ¿O un detalle de uno solo? En este archivo veremos SOLAMENTE el caso de querer imprimir un listado
            console.log(infoD);
        // El paso 3 es encontrar DONDE ESTA EL ARRAY con su listado. En este caso estaba en .artists.data (lo pudimos ver porque hicimos el console.log!
            let artistasD = infoD.artists.data
        // El paso 4 es hacer un for para recorrer ese array
            for (let index = 0; index < artistasD.length; index++) {
                const cadaArtistaD = artistasD[index];
                console.log(cadaArtistaD);
            // El paso 5 (con un console log de antemano) es revisar que datos necesitamos de cada item y ponerlo en variables
                let nombreD = cadaArtistaD.name;
                let idAD = cadaArtistaD.id
                let imgD = cadaArtistaD.picture
            // El paso 6 es armar el HTML de cada elemento. En este caso, en su HTML original ustedes tenian un <li> por cada artista. Ese <li> lo trajimos acá a una variable
            // y lo importante es que donde va la imagen o el nombre lo reemplazamos POR LAS VARIABLES QUE DEFINIMOS EN EL PASO 5
            // No olviden tambien que los hipervinculos deben contener el id del item que lo identifica
                let nuevoHtmlD= `
                <li>
                        <div class="uk-panel">
                            <a href="Artistas.html?pepinito=`+idAD+`"><img class="imgartistasd" src="`+imgD+`" alt=""></a>
                    
                        </div>
                    </li>
                `
            // Paso 7, por último, antes de cerrar el for rellenamos en el HTML (en este caso el <ul>) con el HTML generado
                document.querySelector(".slideD").innerHTML += nuevoHtmlD
            }
        })

        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
        .then(
            function(respuesta){
                return respuesta.json();
            }
        )

        .then(function (infoLD){
            console.log(infoLD)
            let cadaAlbumLD=infoLD.albums.data
            for (let index = 0; index < 6; index++) {
             const cadaUnoD = cadaAlbumLD[index];
             console.log(cadaUnoD);
             let fotoD=cadaUnoD.cover
             let idAlbD=cadaUnoD.id
             let portadaD=
             `
             <article class="indalb">
                <a href="album.html?pepinito=`+ idAlbD+`"> <img class="imgad" src="`+ fotoD +`" alt=""></a>
             </article>
             `
             document.querySelector(".contalbums").innerHTML += portadaD  
             
            }
        })
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
        .then(
            function(respuesta){
                return respuesta.json();
            }
        )
        .then(function(info){
         console.log(info)
         let tracks=info.tracks.data
         let duracion=tracks.duration
         let titulo=
        })
        let saludo= alert("Bienvenidos a Play")
    })
    
    