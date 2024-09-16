AOS.init();

const dataDoEvento = new Date('Dec 12, 2024 19:00:00 '); /* 12/12/2024 ás 19h - data especifica*/

const timeStampDOEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDOEvento - timeStampAtual;

const diaEmMS = 1000 /* 1segundo */ *  60 /* minuto */ * 60 /* hora */ * 24 /* dia */;
const horaEmMS = 1000*60*60 ;
const minutoEmMS = 1000*60;

    /* descobrir os dias que faltam */
    const  diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS); 
    
    /* descobrir as horars */
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS) / horaEmMS);
    
    /* descobrir minutos */
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMS) / minutoEmMS);
    
    /* segundo */
    const segundoAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMS) / 1000)
    


    document.getElementById('contador').innerHTML =` ${diasAteOEvento}d : ${horasAteOEvento}h : ${minutosAteOEvento}m : ${segundoAteOEvento}s . `

    if (distanciaAteOEvento < 0 ){
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = ' -> Evento expirado <-'
    }



},1000);