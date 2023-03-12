const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

const productControl = document.querySelectorAll('.product__quantity-control');
const productAdd = document.querySelectorAll('.product__add');

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


productAdd.forEach((el) => { 
	el.addEventListener('click', (e) => {
		const product = e.target.closest('.product');
		let productParams = {}
		productParams.img = product.querySelector('.product__image').src;
		productParams.id = product.dataset.id;
		productParams.quantity = product.querySelector('.product__quantity-value').innerText;
		addProductToCart(productParams);
	});
});		


function addProductToCart(product) {
	const productInCart = cartProducts.querySelector(`[data-id="${product.id}"]`);
	// если продукта нет в корзине, то добавим его
	if(!productInCart) {
		const divProduct = document.createElement('div');
		divProduct.classList.add('cart__product');
		divProduct.dataset.id = product.id
		
		const img = document.createElement('img');
		img.classList.add('cart__product-image');
		img.src = product.img;
		
		const divCount = document.createElement('div');
		divCount.classList.add('cart__product-count');
		divCount.innerText = product.quantity
		
		divProduct.appendChild(img);
		divProduct.appendChild(divCount);
		
		cartProducts.appendChild(divProduct);
	} else {
		// изменим количество товара в корзине
		const count = productInCart.querySelector('.cart__product-count');
		count.innerText = Number(count.innerText) + Number(product.quantity);
	}
}