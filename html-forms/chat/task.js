const chatBtn = document.querySelector('.chat-widget__side')
const chat = document.querySelector('.chat-widget')
const input = document.querySelector( '.chat-widget__input' );
const messages = document.querySelector( '.chat-widget__messages' );

chatBtn.addEventListener('click', (e) => chat.classList.add('chat-widget_active'));

input.addEventListener('keydown', (e) => {
    console.log(e.key);
    if(e.key === 'Enter' && e.repeat === false) {
        if(input.value) {
            // отправим сообщение и очистим поле ввода
            sendMsg(input.value);
            input.value = '';
            
            // отправим ответ на принятое сообщение от пользователя
            responseMsg();
        }
    }
});

// отправить сообщение в чат
function sendMsg(msg) {
    messages.innerHTML += `
    <div class="message">
      <div class="message__time">${getCurrentTime()}</div>
      <div class="message__text">${msg}</div>
    </div>
    `
}

// получить текущее время в формате hh:mm:ss
function getCurrentTime() {
    let date = new Date();
    return date.toLocaleTimeString();
}


