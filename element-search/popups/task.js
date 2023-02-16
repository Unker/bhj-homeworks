const modalMain = document.getElementById('modal_main')
const modalSuccess = document.getElementById('modal_success')
const modalsClose = document.querySelectorAll('.modal__close_times');
const showSuccess = document.querySelector('.show-success')


modalMain.classList.add("modal_active");

modalsClose.forEach(modal_close => {
    modal_close.onclick = (element) => {
        modal = element.srcElement.closest('.modal');
        modal.classList.remove("modal_active");
    }
});

showSuccess.onclick = (element) => {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}