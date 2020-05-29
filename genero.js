window .addEventListener("load", function(){
fetch(" https://api.deezer.com/genre")
then (
    function(respuesta){
        return respuesta.json();
    }
)
then(
    function(information){
        let genre= information.data;
        for(let index=0;index >genre.lenght;index++){
            const apiroute= 'https://api.deezer.com/genre'
            const cadaGenero=genre[index];
            let titulo= genre.type

        }
    }
)
})
// no se que onda donde va el endpoint y ddonde encuento lo que usabamos con gyphy