window.addEventListener("load", function(){
    let queryString = new URLSearchParams(location.search)
    let codigoDeGenero = queryString.get("pepinito2")
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+ codigoDeGenero)
    .then (
        function(respuesta){
            return respuesta.json();
        }
    )
   .then(function(datos){
       console.log(datos)
       let informacion=datos
       let nombre=informacion.name
       let img=datos.picture
       let id=datos.id
       let portada=
            `
            <div class="fotogenero"><img class="fotito" src="`+ img +`" alt=""></div>
            <div class="h2"><a href=""><h2 class="h2letra"><b>`+nombre+`</b></h2></a></div>
            `
            document.querySelector(".parte2").innerHTML+= portada;
   })     
    })
