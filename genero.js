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
            let nombre= cadaGenero.name;
       
            let generos=
             `
             <div class="divDeJs" >
                <h4 class="h4js">`+ nombre +`</h4>
                <img src="`+ img +`" alt="" class="imgDeGeneros">
             </div>
             `
      document.querySelector(".section2").innerHTML += genero 
      
        }
        console.log(informacion);
    } 
)
})