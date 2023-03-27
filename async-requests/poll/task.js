const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');

const urlQuiz = 'https://students.netoservices.ru/nestjs-backend/poll'

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
                    'Произошла ошибка. Код ошибки:' + request.statusText
                ));
            }
        };
        request.send();
    });
};

// запросить Опрос
const embeQuiz = url => {
    loadQuiz(url).then(function (result) {
        console.log(result)
        renderQuiz(JSON.parse(result));
    },
    function (err) {
        console.log(err);
    });
}

// Отобразите вопрос и список ответов в виде кнопок
function renderQuiz(quiz) {
    pollTitle.innerText = quiz.data.title

    quiz.data.answers.forEach((answer) => {
        let btn = document.createElement('button');
        btn.classList.add('poll__answer');
        btn.innerText = answer;
        
        pollAnswers.appendChild(btn);
    });
}

document.addEventListener('click', (e) => {
	if(e.target.classList.contains('poll__answer')) {
		const answer = e.target.innerText;
        console.log(answer);
        alert('Спасибо, ваш голос засчитан!')
	}
});

embeQuiz(urlQuiz);