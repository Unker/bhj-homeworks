const input = document.querySelector('.tasks__input');
const taskAdd = document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');


input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.repeat === false) {
		e.preventDefault();

		const taskText = input.value.trim();
		console.log(taskText);
        if (taskText) {
            // 
			let divTask = document.createElement('div');
			divTask.classList.add('task');
			
			let divTitle = document.createElement('div');
			divTitle.classList.add('task__title');
			divTitle.innerText = taskText;
			
			let taskRemover = document.createElement('a');
			taskRemover.setAttribute('href', '#');
			taskRemover.classList.add('task__remove');
			taskRemover.innerHTML ='&times;';
			
			divTask.appendChild(divTitle);
			divTask.appendChild(taskRemover);
			taskList.appendChild(divTask);
						
			input.value = '';
        }
    }
}); 

taskAdd.addEventListener('click', (e) => {
	e.preventDefault();
	input.dispatchEvent(new KeyboardEvent('keydown', {key: "Enter", repeat: false}));
});

document.addEventListener('click', (e) => {
	console.log(e.target)
	if(e.target.classList.contains('task__remove')) {
		e.target.closest('.task').remove();
	}
});