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
        for (let index=0;index< genero.lenght;index++){
            cadaGenero= genero[index];
            let img=genero.data.picture;
            let tipoDeGenero= genero.data.name;
       
            let generos=
             `<section class="section2">
                <h4>`+ tipoDeGenero +`</h4>
                <img src="`+ img +`" alt="">
             </section>
             `
      document.querySelector(".section2").innerHTML += generos 
      
        }
        console.log(informacion);
    } 
)
})