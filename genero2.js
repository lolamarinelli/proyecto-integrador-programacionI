window .addEventListener("load", function(){
    const apiRoute=' https://cors-anywhere.herokuapp.com/https://api.deezer.com/'
    fetch (apiRoute+' https://api.deezer.com/genre')
    .then(data=>data.json())
    .then(repsuesta=>{
        console.log(respuesta);
    })
}
