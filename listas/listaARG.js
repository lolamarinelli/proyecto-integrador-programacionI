window .addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoDeAlbum = queryString.get("pepinito2")
    fetch(" https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/1279119721" + codigoDeAlbum)
    .then(
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(informacion){
            let chart=informacion.tracks.data;
            console.log(informacion)
            for (let index=0;index< chart.length;index++){
                cadaChart= chart [index];
                let titulo= cadaChart.title;
                let img=cadaChart.album.cover;
                let artista=cadaChart.artist.name;
                let id= cadaChart.id;
                let idA= cadaChart.artist.id

                let charts=`
                
                        <li class="renglones">
                            <div class="listatracks"> 
                               <p class="numeros">`+ (index+1) +`</p>
                                <a href="../album.html?pepinito2=`+ id+`"><img src=`+ img +` alt="" class="imglista" ></a>
                                    <section class="dentrolista"><h4 class="titulos">`+titulo+`</h4><a href="../Artista.html?pepinito=`+idA+`"><h5 class="nombredeartitas">`+artista+`</h5></a></section> 
                                    <span class="uk-margin-small-right" uk-icon="check"></span>

                                <a href="" uk-icon="heart" class="uk-margin-small-right"></a>
                            </div>
                         </li>
                   
             `
            document.querySelector(".lista").innerHTML += charts }
           
                titulo=informacion.title;
                let titulos=titulo;
            
                document.querySelector(".titulo").innerHTML += titulos

                seguidores=informacion.fans;
                let fans=seguidores;
               
                document.querySelector(".seguidores").innerHTML += fans
            
                numeroDeCanciones=informacion.nb_tracks;
                let canciones=numeroDeCanciones;
              
                document.querySelector(".ncanciones").innerHTML += canciones 

                foto=informacion.picture;
                let fotoDeLista=
                `
                <img src="`+ foto+`" alt="foto de TOP 50 ARGENTINA" class="imgdelostops">
                `
                document.querySelector(".ftoheader").innerHTML += fotoDeLista

                duracion=informacion.duration;
                let minutos=duracion;
               
                document.querySelector(".duracion").innerHTML += minutos
             
                
        }
       
        
    )

})