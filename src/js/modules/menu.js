document.querySelector('.topbar__menu-icon-wrapper').onclick = function(){
	document.querySelector('.topbar__menu-icon').classList.toggle('topbar__menu-icon-active');
}

let btnMenu = document.querySelector('.topbar__menu-icon-wrapper');
let menu = document.querySelector('.topbar__menu');

btnMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
	menu.classList.toggle('opened');
}
