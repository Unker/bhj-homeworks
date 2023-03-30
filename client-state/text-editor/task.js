const editor = document.getElementById('editor');

console.log(editor);

// считаем задачи  из localStorage
let text = JSON.parse(localStorage.getItem("text"));
if(!text) text = '';
// и отобразим
editor.value = text
console.log('restored', text)

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

