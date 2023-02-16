const modal_main = document.getElementById('modal_main')
const modal_success = document.getElementById('modal_success')
const modals_close = document.querySelectorAll('.modal__close_times');
const show_success = document.querySelector('.show-success')


modal_main.classList.add("modal_active");

modals_close.forEach(modal_close => {
    modal_close.onclick = (element) => {
        modal = element.srcElement.closest('.modal');
        modal.classList.remove("modal_active");
    }
});

show_success.onclick = (element) => {
    modal_main.classList.remove("modal_active");
    modal_success.classList.add("modal_active");
}