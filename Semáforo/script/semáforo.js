const img = document.getElementById("img");
const botoes = document.getElementById("botoes");
let corIndex = 0;
let intervalId = null;

    const luz = (event) =>{
       stopAutomatic();
       luzes[event.target.id]();
        /*if (event.target.id == "vermelho"){
           luzes.vermelho();
       }else if(event.target.id == "verde"){
            luzes.verde();
       }else if(event.target.id == "amarelo"){
           luzes.amarelo();
       }*/
        
        
    }
    const parar = (event) =>{
        stopAutomatic();
    }
    const proIndex = () => corIndex = corIndex < 2? ++corIndex : 0;
    /*{    
        /if(corIndex < 2){
            corIndex++;  
        }
        else{
            corIndex = 0;
        }
    }*/
    const mudarCor = () => {
        const cors = ["vermelho","verde","amarelo"];
        const cor = cors[corIndex]
        luzes[cor]();
        proIndex();   
    }

    const stopAutomatic = () => {
        clearInterval(intervalId)
    }
    const luzes = {
        "vermelho": () => img.src = "/Semaforo/Semáforo/img/vermelho.png",
        "verde": () => img.src = "/Semaforo/Semáforo/img/verde.png",
        "amarelo": () => img.src = "/Semaforo/Semáforo/img/amarelo.png",
        "auto": () => intervalId = setInterval(mudarCor, 2000) 
    }

    botoes.addEventListener("click", luz);