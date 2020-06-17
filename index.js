window .addEventListener("load", function(){
    // El paso 1 es identificar bien CUAL es la URL que necesitan en su fetch
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
        .then(
            function(respuesta){
                return respuesta.json();
            }
        )
        .then(function(info){
        // El paso 2 es identificar QUE necesitan mostrar. ¿Un listado de elementos? ¿O un detalle de uno solo? En este archivo veremos SOLAMENTE el caso de querer imprimir un listado
            console.log(info);
        // El paso 3 es encontrar DONDE ESTA EL ARRAY con su listado. En este caso estaba en .artists.data (lo pudimos ver porque hicimos el console.log!
            let artistas = info.artists.data
        // El paso 4 es hacer un for para recorrer ese array
            for (let index = 0; index < artistas.length; index++) {
                const cadaArtista = artistas[index];
                console.log(cadaArtista);
            // El paso 5 (con un console log de antemano) es revisar que datos necesitamos de cada item y ponerlo en variables
                let nombre = cadaArtista.name;
                let id = cadaArtista.id
                let img = cadaArtista.picture
            // El paso 6 es armar el HTML de cada elemento. En este caso, en su HTML original ustedes tenian un <li> por cada artista. Ese <li> lo trajimos acá a una variable
            // y lo importante es que donde va la imagen o el nombre lo reemplazamos POR LAS VARIABLES QUE DEFINIMOS EN EL PASO 5
            // No olviden tambien que los hipervinculos deben contener el id del item que lo identifica
                let nuevoHtml= `
                <li>
                            <img src="`+ img +`" alt="" class="slider1">
                            <div class="uk-position-center uk-panel"><h1>
                            <a href= "Artistas.html?pepinito=`+ id +`">`+ nombre +`</a>
                            </h1></div>
                </li>
                `
            // Paso 7, por último, antes de cerrar el for rellenamos en el HTML (en este caso el <ul>) con el HTML generado
                document.querySelector(".topartistas").innerHTML += nuevoHtml
            }
        })
    })
    