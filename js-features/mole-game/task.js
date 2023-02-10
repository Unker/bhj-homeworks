getHole = index => document.getElementById(`hole${index}`)
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');



for (const i of Array(9).keys()) {
    hole = getHole(i+1)
    hole.onclick = (element) => {
        hole = element.srcElement
        if(hole.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1
        } else {
            lost.textContent = Number(lost.textContent) + 1
        }

        isEndGame = false;
        if( dead.textContent >= 10) {
            window.alert('You win');
            isEndGame = true;
        }

        if(lost.textContent >= 5) {
            window.alert('You lose');
            isEndGame = true;
        }

        if(isEndGame) {
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}
