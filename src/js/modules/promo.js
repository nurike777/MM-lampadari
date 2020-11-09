let button = document.querySelector('.promo__up-button');
let promo = document.querySelector('.promo');

button.addEventListener('click', togglePromo);

function togglePromo() {
	let promoBlock = document.querySelector('.promo-row');
	let height = promoBlock.scrollHeight;

	if (!promoBlock.style.maxHeight) {
		promoBlock.style.maxHeight = height + 'px';
	}
	else {
		promoBlock.style.maxHeight = '';
	}
}

function rotateBtn() {
	document.querySelector('.promo__up-button').classList.toggle('rotated');
}