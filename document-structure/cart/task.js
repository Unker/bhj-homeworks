const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

const productControl = document.querySelectorAll('.product__quantity-control');

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