const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');
const cartTitle = document.querySelector('.cart__title');

const productControl = document.querySelectorAll('.product__quantity-control');
const productAdd = document.querySelectorAll('.product__add');

// window.addEventListener('Load', () => {
	// const defaultCartTitleDisplay = cartTitle.style.display;
	// console.log(defaultCartTitleDisplay)
	// refreshCart();
// });
refreshCart();


function refreshCart() {
	console.log('refresh')
	const productsInCart = cartProducts.querySelectorAll('.cart__product');
	// если нет продуктов, то убрать заголовок
	if(productsInCart.length == 0) {
		cartTitle.style.display = 'none';
	} else {
		cartTitle.style.display = 'flex';
	}
}

// изменение количества продукта
productControl.forEach((el) => { 
	el.addEventListener('click', (e) => {
		const productQuantity = e.target.parentElement.querySelector('.product__quantity-value');
		let quantity = Number(productQuantity.innerText);
		if(e.target.classList.contains('product__quantity-control_dec')) {
			quantity = Math.max(1, quantity-1);
		} else if(e.target.classList.contains('product__quantity-control_inc')) {
			quantity += 1;
		}
		productQuantity.innerText = quantity;
	});
});

// обработка кнопок добавления продукта в корзину
productAdd.forEach((el) => { 
	el.addEventListener('click', (e) => {
		// если анимация не закончилась, то не добавляем новый продукт
		if(e.target.classList.contains('product__add-disable') == false) {
			const product = e.target.closest('.product');
			addProductToCart(product);
		}
	});
});		

// добавление/изменение продукта в корзине
function addProductToCart(product) {
	let productParams = {}
	const productImage = product.querySelector('.product__image');
	productParams.imgSrc = productImage.src;
	productParams.id = product.dataset.id;
	productParams.quantity = product.querySelector('.product__quantity-value').innerText;
		
	const productInCart = cartProducts.querySelector(`[data-id="${productParams.id}"]`);
	// если продукта нет в корзине, то добавим его
	if(!productInCart) {
		const divProduct = document.createElement('div');
		divProduct.classList.add('cart__product');
		divProduct.dataset.id = productParams.id
		
		const img = document.createElement('img');
		img.classList.add('cart__product-image');
		img.src = productParams.imgSrc;
		
		const divCount = document.createElement('div');
		divCount.classList.add('cart__product-count');
		divCount.innerText = productParams.quantity
		
		const divRemove = document.createElement('div');
		divRemove.classList.add('product__remove');
		divRemove.innerText = 'Удалить из корзины'
		
		divProduct.appendChild(img);
		divProduct.appendChild(divCount);
		divProduct.appendChild(divRemove);
		
		cartProducts.appendChild(divProduct);
	} else {
		// изменим количество товара в корзине
		const count = productInCart.querySelector('.cart__product-count');
		count.innerText = Number(count.innerText) + Number(productParams.quantity);
				
		// вызываем анимацию добавления товара в корзину
		animateAddCart(productImage);
		
	}
	refreshCart();
}

// удаление товара из корзины
document.addEventListener('click', (e) => {
	if(e.target.classList.contains('product__remove')) {
		e.target.closest('.cart__product').remove();
		refreshCart();
	}
});


// анимация добавления продукта
function animateAddCart(productImage) {
	// блокируем все кнопки "добавить"
	productAdd.forEach((el) => {
		el.classList.add('product__add-disable');
	});

	const id = productImage.closest('.product').dataset.id;	
	
	let { left: leftStart, top: topStart } = getCoords(productImage);
	
	const productInCart = cartProducts.querySelector(`[data-id="${id}"]`);
	const cartImage = productInCart.querySelector('.cart__product-image');
	let { left: leftStop, top: topStop } = getCoords(cartImage);
	
	// get copy image
	const img = productImage.cloneNode(false);
	img.classList.add('cart__product-image');
	img.classList.add('animate__product-image');
	let leftImg = leftStart 
	let topImg = topStart;
	img.style.position = 'absolute';
	img.style.left = leftImg + 'px';
	img.style.top = topImg + 'px';
	document.body.appendChild(img);
	
	const timeToRender = 300;
	const timeStep = 20;
	const stepX = (leftStop - leftStart) * (timeStep/timeToRender);
	const stepY = (topStop - topStart) * (timeStep/timeToRender);
	intervalRenderImage = setInterval(() => {
        img.style.left = leftImg + 'px';
        img.style.top = topImg + 'px';
		if (Math.abs(leftImg - leftStop) > 5 || Math.abs(topImg - topStop) > 5) {
            leftImg += stepX;
			topImg += stepY;
        } else {
			clearInterval(intervalRenderImage);
			console.log('stop');
			img.remove();
			
			// разблокируем все кнопки "добавить"
			productAdd.forEach((el) => {
				el.classList.remove('product__add-disable');
			});
		}
		
    }, timeStep)
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
};