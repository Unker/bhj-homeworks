const rotatorCases = document.querySelectorAll('.rotator__case');
let currentCase = 0;
var interval;

changeCase(currentCase);

// Смена объявления
function changeCase(n) {
    currentCase = (n + rotatorCases.length) % rotatorCases.length;

    rotatorCases.forEach((item) => item.classList.remove('rotator__case_active'));
    rotatorCases[currentCase].classList.add('rotator__case_active');

    const speed = rotatorCases[currentCase].dataset.speed;
    const color = rotatorCases[currentCase].dataset.color;

    rotatorCases[currentCase].style.color = color;

    clearInterval(interval);
    interval = setInterval(() => {
        changeCase(currentCase + 1)
    }, speed)
    
}
