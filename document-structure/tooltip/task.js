const hasTooltip = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelector('.tooltip');

hasTooltip.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		showTooltip(e.target);
	});
});

document.addEventListener('click', (e) => {
	if(!e.target.classList.contains('has-tooltip')) {
		tooltip.classList.remove('tooltip_active');
	}
});

//document.addEventListener('scroll', () => setCoordTolltip());

// отобразить подсказку
function showTooltip(el) {	
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