const showZero = (value) => (value<10) ? `0${value}` : value;

 function clock() {
    let today = new Date();
    let hours = showZero(today.getHours());
    let minutes = showZero(today.getMinutes());
    let seconds = showZero(today.getSeconds());
    console.log(hours, minutes, seconds);

    hour.innerText = hours;
    minut.innerText = minutes;
    second.innerText = seconds;

 }

 clock();

 setInterval(clock, 1000);