var timeOut = true;

function showTime() {
    let clock = document.querySelector(".clock");
    let x = new Date();
    let seconds = x.getSeconds();
    let minutes = x.getMinutes();
    let hours = x.getHours();
    let session = "AM";

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours == 0) {
        hours = 12;
    }

    if (hours < 12) {
        session = "PM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + session;

    clock.innerText = time;

    if (!timeOut) {
        clock.innerText = "";
    }

    if (timeOut) {
        setTimeout(showTime, 1000);
    }
}

function startTheTimeOut() {
    timeOut = true;
    showTime();
}

const clock = document.querySelector(".clock");

function stopTheTimeOut() {
    timeOut = false;
}
