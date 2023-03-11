const input = document.querySelector('.tasks__input');
const taskAdd = document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');

// считаем задачи  из localStorage
let tasks = JSON.parse(localStorage.getItem("tasks"));
if(!tasks) tasks = {};
// и отобразим
for (const [key, task] of Object.entries(tasks)) {
	showTask(task, key);
};

function showTask(taskText, id = undefined, saveTask = false) {
	if(!id) id = getCurrentTime()+'_'+document.querySelectorAll('.task__title').length;
	if(saveTask) {
		//запишем в хранилище
		tasks[id] = taskText;
		localStorage.setItem("tasks", JSON.stringify(tasks)); 	
	}
	
	let divTask = document.createElement('div');
	divTask.classList.add('task');
	
	let divTitle = document.createElement('div');
	divTitle.classList.add('task__title');
	divTitle.innerText = taskText;
	
	let taskRemover = document.createElement('a');
	taskRemover.setAttribute('href', '#');
	taskRemover.classList.add('task__remove');
	taskRemover.setAttribute('id', id);
	taskRemover.innerHTML ='&times;';
	
	divTask.appendChild(divTitle);
	divTask.appendChild(taskRemover);
	taskList.appendChild(divTask);
				
	input.value = '';
	
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.repeat === false) {
		e.preventDefault();

		const taskText = input.value.trim();
        if (taskText) {
            showTask(taskText, true);
        }
    }
}); 

taskAdd.addEventListener('click', (e) => {
	e.preventDefault();
	input.dispatchEvent(new KeyboardEvent('keydown', {key: "Enter", repeat: false}));
});

document.addEventListener('click', (e) => {
	if(e.target.classList.contains('task__remove')) {
		let key = e.target.id;
		e.target.closest('.task').remove();
		delete tasks[key];
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}
});

// получить текущее время в формате hh:mm:ss
function getCurrentTime() {
    let date = new Date();
    return date.toLocaleTimeString();
}