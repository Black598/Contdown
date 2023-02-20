const dias = document.querySelector("#days")
const horas = document.querySelector("#hours")
const minutos = document.querySelector("#minutes")
const segundos =  document.querySelector("#seconds")

//setar a data final do countdown
let countDownDate = new Date("March 09, 2023 22:45:00").getTime();

let interval = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours < 10) {
        hours = "0" + hours;
      }
      if (mins < 10) {
        mins = "0" + mins;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

    dias.innerHTML = days;
    horas.innerHTML = hours;
    minutos.innerHTML = mins;
    segundos.innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    },1000);   
    
    