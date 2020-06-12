window.addEventListener("load", function(){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")

.then (
    function(respuesta){
        return respuesta.json();
    }
)
.then(
    function(informacion){
        let chart= informacion.data;
        console.log(informacion)
        for (let index=0;index< 3;index++){
            cadaChart= chart[index]
            imgChart= cadaChart.picture
            console.log(informacion)
            document.querySelector("liplay").innerHTML += imgChart
        }
        
    })
})