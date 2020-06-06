window .addEventListener("load", function(){
    fetch(" https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/1279119721")
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
                let charts=`
                <ul class="uk-list uk-list-striped">
                        <li class="renglones">
                            <div class="listatracks"> 
                                <a href="album.html"><img src=`+ img +` alt="" class="imglista" ></a>
                                    <section class="dentrolista"><h4>`+titulo+`</h4><h5 class="nombredeartitas">`+artista+`</h5></section> 
                                    <span class="uk-margin-small-right" uk-icon="check"></span>

                                <a href="" uk-icon="heart" class="uk-margin-small-right"></a>
                            </div>
                         </li>
                </ul>         
             `
            document.querySelector(".lista").innerHTML += charts }
           
            
                seguidores=informacion.fans;
                let fans=seguidores;
                let followers=
                `
                <a href="">
                <h5 class="numeros"> `+fans+`</h5>
                </a>
                `
                document.querySelector(".seguidores").innerHTML += followers
            
                foto=informacion.picture;
                let fotoDeLista=
                `
                <img src="`+ foto+`" alt="foto de TOP 50 ARGENTINA" class="imgdelostops">
                `
                document.querySelector(".imgtop").innerHTML += fotoDeLista
        }
        
    )

})