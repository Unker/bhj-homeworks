const hasTooltip = document.querySelectorAll('.has-tooltip');
//const tooltip = document.querySelector('.tooltip');

hasTooltip.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		deleteTooltip();
		let tooltip = createTooltip(e.target);
		showTooltip(e.target, tooltip);
	});
});

document.addEventListener('click', (e) => {
	if(!e.target.classList.contains('has-tooltip')) {
		const tooltip = document.querySelector('.tooltip');
		tooltip.classList.remove('tooltip_active');
	}
});

function deleteTooltip() {
	const tooltip = document.querySelector('.tooltip');
	if(tooltip) {
		tooltip.remove();
	}
}

//document.addEventListener('scroll', () => setCoordTolltip());
// добавление элемента в DOM дерево
function createTooltip (el) {
	var tooltip = document.createElement('div');
	tooltip.classList.add('tooltip');
	el.style.left = '0px';
	el.style.top = '0px';
	if (el) {
		el.insertAdjacentElement('afterEnd', tooltip);
	}
	return tooltip
}

// отобразить подсказку
function showTooltip(el, tooltip) {	
	let coords = getCoords(el);
	
	tooltip.classList.add('tooltip_active');
	tooltip.style.left = coords.left + 'px';
	tooltip.style.top = coords.bottom + 'px';
	tooltip.innerHTML = el.title;

}

// получить координаты элемента в контексте документа
function getCoords(el) {
	let box = el.getBoundingClientRect();
	
	return {
		top: box.top + window.pageYOffset,
		right: box.right + window.pageXOffset,
		bottom: box.bottom + window.pageYOffset,
		left: box.left + window.pageXOffset,
	};
}