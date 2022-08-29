let stopwatch = document.getElementById("stopwatch");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let Interval;
let appendSeconds = document.getElementById("secunde");
let appendMilisecunde = document.getElementById("milisecunde");
let tens = 00;
let seconds = 00;

start.addEventListener("click", startStopWatch);

function startStopWatch() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}
stop.onclick = () => clearInterval(Interval);

reset.onclick = () => {
    clearInterval(Interval);
    seconds = "00";
    miliseconds = "00";
    appendMilisecunde.innerHTML = miliseconds;
    appendSeconds.innerHTML = seconds;
};

function startTimer() {
    tens++;
    if (tens <= 9) {
        appendMilisecunde.innerHTML = "0" + tens;
    } else if (tens <= 99) {
        appendMilisecunde.innerHTML = tens;
    } else if (seconds < 9) {
        tens = 0;
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
    } else {
        tens = 0;
        seconds++;
        appendSeconds.innerHTML = seconds;
    }
}
//testing
//testing2
