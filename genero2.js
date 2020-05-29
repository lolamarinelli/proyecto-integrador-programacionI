window .addEventListener("load", function(){
    const apiRoute=' https://cors-anywhere.herokuapp.com/https://developers.deezer.com/api/explorer?url=genre/0'
    fetch (apiRoute+' https://developers.deezer.com/api/explorer?url=genre/0')
    .then(data=>data.json())
    .then(respuesta =>{
        let genre= respuesta.data;
        for(let index=0;index >respuesta.lenght;index++){
            const apiroute= 'https://cors-anywhere.herokuapp.com/https://developers.deezer.com/api/explorer?url=genre/0'
            const cadaGenero=genre[index];
            let titulo= genre.type

        }
        console.log(respuesta);
    })
})
// esto es lo que esta en playground , pero nunca lo vimos asi nose bien dodne poner cada dato.