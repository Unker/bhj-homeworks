const hasTooltip = document.querySelectorAll('.has-tooltip');

let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

hasTooltip.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		hideTooltip(tooltip);
		e.target.appendChild(tooltip);
		showTooltip(e.target, tooltip);
	});
});

document.addEventListener('click', (e) => {
	if(!e.target.classList.contains('has-tooltip')) {
		const tooltip = document.querySelector('.tooltip');
		hideTooltip(tooltip);
	}
});

function hideTooltip(tooltip) {
	if(tooltip) {
		tooltip.classList.remove('tooltip_active');
	}
};

// отобразить подсказку
function showTooltip(el, tooltip) {	
	let coords = getCoords(el);
	
	tooltip.classList.add('tooltip_active');
	tooltip.style.left = coords.left + 'px';
	tooltip.style.top = coords.bottom + 'px';
	tooltip.innerHTML = el.title;

};

// получить координаты элемента в контексте документа
function getCoords(el) {
	let box = el.getBoundingClientRect();
	
	return {
		top: box.top + window.pageYOffset,
		right: box.right + window.pageXOffset,
		bottom: box.bottom + window.pageYOffset,
		left: box.left + window.pageXOffset,
	};
};