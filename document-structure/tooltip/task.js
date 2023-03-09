const hasTooltip = document.querySelectorAll('.has-tooltip');

let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

hasTooltip.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		hideTooltip(tooltip);
		e.target.parentNode.insertBefore(tooltip, e.target.nextSibling);
		showTooltip(e.target, tooltip, 'right');
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
function showTooltip(el, tooltip, position='bottom') {	
	let coords = getCoords(el);
	
	tooltip.classList.add('tooltip_active');
	tooltip.innerHTML = el.title;
	let shift = {x:0, y:0};	
	switch(position) {
		case 'right':
			// если подсказка может уместиться справа
			if(coords.right + tooltip.offsetWidth < window.innerWidth) {
				shift.y = -(coords.height + tooltip.offsetHeight)/2;
				shift.x =  coords.width;
				console.log('right')
				break;
			}
		case 'left':
			// если подсказка может уместиться слева
			if(coords.left - tooltip.offsetWidth > 0) {
				shift.y = -(coords.height + tooltip.offsetHeight)/2;
				shift.x = -(tooltip.offsetWidth);
				console.log('left')
				break;
			}
		case 'bottom':
			// если подсказка может уместиться снизу
			if(coords.y + coords.height + tooltip.offsetHeight < window.innerHeight) {
				console.log('bottom')
				break;
			}
		case 'top':
			// если подсказка может уместиться сверху
			if(coords.y - coords.height - tooltip.offsetHeight > 0) {
				console.log('top');
				shift.y = -(coords.height + tooltip.offsetHeight);
				break;
			}
			console.log('top')
			break;
		default:
			// bottom
			break;
			
	}
	tooltip.style.left = coords.left + shift.x + 'px';
	tooltip.style.top = coords.bottom + shift.y + 'px';

};

// получить координаты элемента в контексте документа
function getCoords(el) {
	let box = el.getBoundingClientRect();
	
	return {
		top: box.top + window.pageYOffset,
		right: box.right + window.pageXOffset,
		bottom: box.bottom + window.pageYOffset,
		left: box.left + window.pageXOffset,
		height: box.height,
		width: box.width,
		y: box.top,
		x: box.right,
	};
};