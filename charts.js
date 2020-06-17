window .addEventListener("load", function(){
    fetch("https://cors-anywhere.herokuapp.com/https://www.deezer.com/es/profile/637006841/playlists")
    .then (
        function(respuesta){
            return respuesta.json();
        }
    )
    .then(
        function(informacion){
            let listas= informacion.data;
            console.log(informacion)
            for (let index=1;index< listas.length;index++){
                cadaLista= listas[index];
                let img=cadaLista.picture;
                let nombre= cadaLista.name;
           
                let lista=
                 `
                 <div class="divDeJs" >
                    <h4 class="h4js">`+ nombre +`</h4>
                    <img src="`+ img +`" alt="" class="imgDeGeneros">
                 </div>
                 `
          document.querySelector(".section2").innerHTML += lista
          
            }
            console.log(informacion);
        } 
    )
    })