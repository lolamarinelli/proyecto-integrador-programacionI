window .addEventListener("load", function(){
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
.then (
    function(respuesta){
        return respuesta.json();
    }
)
.then(
    function(informacion){
        let genero= informacion.data;
        
        for (let index=1;index< genero.length;index++){
            cadaGenero= genero[index];
            let img=cadaGenero.picture;
            let id = cadaGenero.id
            let nombre= cadaGenero.name;
       
            let generos=
             `
             <div class="divDeJs" >
                <h4 class="h4js">`+ nombre +`</h4>
                <a href= "detallegeneros.html?pepinito2=`+id+`"><img src="`+ img +`" alt="" class="imgDeGeneros"></a>
             </div>
             `
      document.querySelector(".section2").innerHTML += generos 
      
        }
        console.log(informacion);
    } 
)
})