const cookie = document.getElementById('cookie');
const clicker__counter = document.getElementById('clicker__counter');
const clicker__speed = document.getElementById('clicker__speed');


let delta = 20;
let count_click = 0;
let tm_last; // последнее время нажатия
let spd_click;

cookie.onclick = () => {
    count_click++;
    let adder = (count_click%2)?delta:-delta;
    cookie.width += adder;
    cookie.height += adder;
    clicker__counter.textContent = count_click;

    // подсчет скорости кликов
    if(tm_last === undefined) {
        tm_last=Date.now();
    } else {
        let tm = Date.now();
        console.log(tm)
        let spd = 1000/(tm-tm_last);
        tm_last = tm;
        clicker__speed.textContent = spd.toFixed(2);;
    }
    console.log()
}