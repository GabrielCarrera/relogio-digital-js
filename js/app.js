setInterval(function atualizar_hora() {

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();


    hora.innerHTML = hours;
    minuto.innerHTML = minutes;
    segundo.innerHTML = seconds;

    if (String(hours).length < 2) {
        hora.innerHTML = `0${hours}`;
    }
    if (String(minutes).length < 2){
        minuto.innerHTML = `0${minutes}`;
    }
    if (String(seconds).length < 2){
        segundo.innerHTML = `0${seconds}`;
    }


}, 1000);

