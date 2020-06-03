window .addEventListener("load", function(){
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
.then (
    function(respuesta){
        return respuesta.json();
    }
)
.then(
    function(information){
        let genre= information.data;
        for(let index=0;index < genre.lenght;index++){
            const cadaGenero=genre[index];
            let img= cadaGenero.picture;
            let tipoDeGenero= cadaGenero.type;
            let diferentesGeneros=
            `
            <div>
            <h3>`+type+`</h3>
            <a href="detalle.html`+id+`"><img src="`+ picture +`" alt="" ></a>
         </div>
         `
         document.querySelector("h3").innerHTML = type;
            
         document.querySelector("img").src = picture;
            document.querySelector("section2").innerHTML+= diferentesGeneros;
        }
        console.log(information)
    }
)
})
// no se que onda donde va el endpoint y ddonde encuento lo que usabamos con gyphy