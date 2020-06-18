window .addEventListener("load", function(){
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
            let lasPlaylists=
            `
            <div class="divDeJs" >
                <img src="`+ img +`" alt="" class="imgDeGeneros">
                <h4 class="h4js">`+ nombre +`</h4>
             </div>
            `
            document.querySelector(".section2").innerHTML+= lasPlaylists
        }
    })
    })