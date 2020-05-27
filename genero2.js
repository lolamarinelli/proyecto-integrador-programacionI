window .addEventListener("load", function(){
    const apiRoute=' https://cors-anywhere.herokuapp.com/https://api.deezer.com/'
    fetch (apiRoute+' https://api.deezer.com/genre')
    .then(data=>data.json())
    .then(respuesta=>{
        
        console.log(respuesta);
    })
})
// esto es lo que esta en playground , pero nunca lo vimos asi nose bien dodne poner cada dato.