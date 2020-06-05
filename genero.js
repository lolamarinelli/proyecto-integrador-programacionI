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
        console.log(genero)
        for (let index=0;index< genero.lenght;index++){
            cadaGenero= genero[index];
            let img=genero.data.picture;
            let tipoDeGenero= genero.data.name;
       
            let generos=
             `
                <h4>`+ tipoDeGenero +`</h4>
                <img src="`+ img +`" alt="">
             
             `;
      document.querySelector(".section2").innerHTML + generos 
      
        }
        console.log(informacion);
    } 
)
})