const modalSubs = document.getElementById('subscribe-modal')
const modalsClose = document.querySelectorAll('.modal__close_times');

// let subscribeIsClosed = JSON.parse(localStorage.getItem('subscribeIsClosed'));
// console.log(subscribeIsClosed)
let subscribeIsClosed

let pairs = document.cookie.split('; ');
console.log(pairs)
subscribeIsClosed = pairs.find(p => p.startsWith('subscribeIsClosed='));
if (subscribeIsClosed) {
    subscribeIsClosed = subscribeIsClosed.substring('subscribeIsClosed='.length);
}

if(!subscribeIsClosed) {
    modalSubs.classList.add("modal_active");
}

modalsClose.forEach(modalClose => {
    modalClose.onclick = (element) => {
        modal = element.srcElement.closest('.modal');
        modal.classList.remove("modal_active");
        // запишем закрытие окна в хранилище
        // localStorage.setItem('subscribeIsClosed', JSON.stringify(true));
        document.cookie = 'test=Hello; subscribeIsClosed=true';
    }
});
