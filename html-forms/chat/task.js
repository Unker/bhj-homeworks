const chatBtn = document.querySelector('.chat-widget__side')
const chat = document.querySelector('.chat-widget')
const input = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const chatContainer = document.querySelector('.chat-widget__messages-container');

let intervalMsg;

chatBtn.addEventListener('click', (e) => {
    chat.classList.add('chat-widget_active');
    startIntervalMsg();
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.repeat === false) {
        if (input.value) {
            // отправим сообщение и очистим поле ввода
            sendMsg(input.value, true);
            input.value = '';

            // отправим ответ на принятое сообщение от пользователя
            responseRndMsg();

            clearInterval(intervalMsg);
            startIntervalMsg();
        }
    }
});

// прокрутку окна чата до блока последнего комментария
function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// При активном окне чата и простое 30 секунд, робот должен задать вопрос в чат
function startIntervalMsg(interval = 30000) {
    intervalMsg = setInterval(() => {
        if (chat.classList.contains('chat-widget_active')) {
            responseRndMsg();
        }
    }, interval)
}

// отправить сообщение в чат
function sendMsg(msg, isClient = false) {
    messages.innerHTML += `
    <div class="message ${isClient ? 'message_client' : ''}">
      <div class="message__time">${getCurrentTime()}</div>
      <div class="message__text">${msg}</div>
    </div>
    `
    scrollToBottom();
}

// получить текущее время в формате hh:mm:ss
function getCurrentTime() {
    let date = new Date();
    return date.toLocaleTimeString();
}

// отправить случайный ответ пользователю
function responseRndMsg() {
    let msg = sentence()
    sendMsg(msg);
}

var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function randGen() {
    return Math.floor(Math.random() * 5);
}

function sentence() {
    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 10);
    var rand4 = Math.floor(Math.random() * 10);
    var rand5 = Math.floor(Math.random() * 10);
    var rand6 = Math.floor(Math.random() * 10);
    //                var randCol = [rand1,rand2,rand3,rand4,rand5];
    //                var i = randGen();
    var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";

    return content;
};