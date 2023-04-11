const editor = document.getElementById('editor');
const clear = document.getElementById('clear_btn');

// считаем задачи  из localStorage
editor.value = localStorage.getItem("text");


editor.addEventListener('input', (e) => {
    localStorage.setItem("text", editor.value);
})


clear.addEventListener('click', (e) => {
    editor.value = '';
    localStorage.removeItem("text");
});