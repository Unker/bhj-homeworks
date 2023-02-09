const timer = document.getElementById('timer');
let timerValue = Number(timer.textContent);


let refreshIntervalId = setInterval(() => {
    timerValue--;
    timer.textContent = timerValue;

    if(timerValue <= 0) {
        clearInterval(refreshIntervalId);
        window.alert('Вы победили в конкурсе!');
    }
}, 1000)

