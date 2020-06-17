window .addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoDeArtista = queryString.get("idDeArtista")
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
            document.querySelector(".letrabunny")+= imagen;
            let artista=
            `
            <h2><a class="letra" href="">`+ nombreDelArtista +`</a></h2>
            `
            document.querySelector(".letrabunny")+= artista;
            let seguidores=
            `
            <h6>`+ fansDelArtista+ `</h6>
            `
            document.querySelector(".fans")+= seguidores;
        })
})