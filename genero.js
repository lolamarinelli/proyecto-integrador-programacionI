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
                <a href= "detallegeneros.html?pepinito2=`+id+`"><img src="`+ img +`" alt="" class="imgDeGeneros"></a>
                <h4 class="h4js">`+ nombre +`</h4>
             </div>
             `
      document.querySelector(".section2").innerHTML += generos 
      
        }
        console.log(informacion);
    } 
)
})