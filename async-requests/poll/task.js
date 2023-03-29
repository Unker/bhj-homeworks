const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');

const urlQuiz = 'https://students.netoservices.ru/nestjs-backend/poll'

let state = {
    'id_quiz': undefined,
    'answers': undefined,
    'id_answer': undefined,
}

// получить случайный опрос с сервера
const loadQuiz = url => {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = function () {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error(
                    `Произошла ошибка. Код ошибки: ${request.status} ${request.statusText}`
                ));
            }
        };
        request.send();
    });
};

// отправить ответ на сервера
const sendAnswer = (url, id_quiz, id_answer) => {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('POST', url);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.onreadystatechange = function () {
            if (request.readyState === request.DONE) {
                if (request.status === 201) {
                    resolve(request.response);
                } else {
                    reject(Error(
                        `Произошла ошибка. Код ошибки: ${request.status} ${request.statusText}`
                    ));
                }
            }
        };
        request.send(`vote=${id_quiz}&answer=${id_answer}`);
    });
};

// запросить Опрос
const embeQuiz = url => {
    loadQuiz(url).then(function (result) {
        renderQuiz(JSON.parse(result));
    },
    function (err) {
        console.log(err);
    });
}

// Отобразите вопрос и список ответов в виде кнопок
function renderQuiz(quiz) {
    pollTitle.innerText = quiz.data.title
    state.id_quiz = quiz.id;
    state.answers = quiz.data.answers;

    quiz.data.answers.forEach((answer) => {
        let btn = document.createElement('button');
        btn.classList.add('poll__answer');
        btn.innerText = answer;

        pollAnswers.appendChild(btn);
    });
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('poll__answer')) {
        const answer = e.target.innerText;
        state.id_answer = state.answers.indexOf(answer);
        alert('Спасибо, ваш голос засчитан!');
        getResult(state.id_quiz, state.id_answer);
    }
});

// отправить ответ на сервер и получить результат
function getResult(id_quiz, id_answer) {
    sendAnswer(urlQuiz, id_quiz, id_answer).then(function (result) {
        showStat(JSON.parse(result));
    },
    function (err) {
        console.log(err);
    });
}

// отобразить статистику ответов
function showStat(stat) {
    // удалить все btn
    let btns = pollAnswers.querySelectorAll('.poll__answer');
    btns.forEach((btn) => {
        btn.remove();
    });

    // добавить статистику в документ
    renderStat(stat.stat);
}

function renderStat(stat) {
    const totalVotes = stat.reduce((acc, val) => {
        return acc + Number(val.votes);
    }, 0)

    stat.forEach((el) => {
        let answer = document.createElement('div');
        answer.classList.add('poll__answer');
        
        answer.innerText = 
            `${el.answer}: ${(100*(el.votes / totalVotes)).toFixed(2)}%`;

        pollAnswers.appendChild(answer);
    });
}

embeQuiz(urlQuiz);