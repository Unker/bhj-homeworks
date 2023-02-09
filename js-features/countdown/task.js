const timer = document.getElementById('timer');
let timerValue = Number(timer.textContent);
let date = new Date(null);

setTextTimer(timerValue);

function setTextTimer(timerValue) {
    date.setSeconds(timerValue);
    timer.textContent = date.toISOString().slice(11, 19);
}

let refreshIntervalId = setInterval(() => {
    timerValue--;

    setTextTimer(timerValue)
    if (timerValue <= 0) {
        clearInterval(refreshIntervalId);
        window.alert('Вы победили в конкурсе!');
    }
}, 1000)

