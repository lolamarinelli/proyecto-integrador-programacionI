window.addEventListener("load", function(){
    let queryString = new URLSearchParams (location.search)

    let loBuscado = queryString.get("buscador");
    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado)
    .then (
        function (respuesta) {
            return respuesta.json ();
        }
    )
    .then(
        function (informacion) {
            let resultado = informacion.data;
            console.log(resultado);
            
            if (resultado.length == 0){
                alert ("No hay resultados");
            }
            for (let index = 0; index < resultado.length; index++) {
                const cadaResult = resultado[index];
                let img = cadaResult.album.cover
                let nombre = cadaResult.title
                let foto = 
                `
                <section class="albums">
                <div> 
                <h4>`+ nombre + `</h4>
                <img src="`+ img + `">
                </div>
                </section>
                `
                document.querySelector("body").innerHTML += foto


                
            }
            
        }
    )




})