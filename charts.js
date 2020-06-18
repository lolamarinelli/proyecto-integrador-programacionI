window .addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoDeAlbum = queryString.get("pepinito3")
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then (
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function(informacion){
        console.log(informacion)
        let playlists=informacion.playlists.data;
        for (let index = 0; index < playlists.length; index++) {
            const cadaPlaylist = playlists[index];
            console.log(cadaPlaylist)
            let img=cadaPlaylist.picture
            let nombre=cadaPlaylist.title
            let idA= cadaPlaylist.id
            let lasPlaylists=
            `
            <div class="divDeJs" >
                <a href="detalleDeCharts.html?pepinito3=`+idA+`"><img src="`+ img +`" alt="" class="imgDeGeneros"></a>
                <h4 class="h4js">`+ nombre +`</h4>
             </div>
            `
            document.querySelector(".section2").innerHTML+= lasPlaylists;
        }
    })
    })