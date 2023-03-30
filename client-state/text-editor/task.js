const editor = document.getElementById('editor');
const clear = document.getElementById('clear_btn');

// считаем задачи  из localStorage
let text = JSON.parse(localStorage.getItem("text"));
if(!text) text = '';
// и отобразим
editor.value = text

let contentIsChanged = false;

let intervalAutoSave = setInterval(() => {
    if (contentIsChanged) {
		//запишем в хранилище
		localStorage.setItem("text", JSON.stringify(editor.value));
        contentIsChanged = false;
    }
}, 1000)

editor.addEventListener('input', (e) => {
    contentIsChanged = true;
})

clear.addEventListener('click', (e) => {
    editor.value = '';
    contentIsChanged = true;
});