window .addEventListener("load", function(){
    fetch(" https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27")
    .then(
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(function(info){
        let artista=info.artist;
        console.log(info)
            cadaArtista=artista [index];

            let img=cadaArtista.picture;
            let foto= img;
        document.querySelector(".slider1").innerHTML += foto;
            
        
    })

<<<<<<< HEAD


    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127")
    .then(
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(informacion){
            let album=informacion;
           ;
        }

    )
})

=======
    
})
>>>>>>> d0e0e062adde9ea4bcb67c9f9bc6327ed469461d
