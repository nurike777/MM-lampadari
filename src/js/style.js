//menu
document.querySelector('.topbar__menu-icon-wrapper').onclick = function(){
    document.querySelector('.topbar__menu-icon').classList.toggle('topbar__menu-icon-active');
}


let btnMenu = document.querySelector('.topbar__menu-icon-wrapper');
let menu = document.querySelector('.topbar__menu');

btnMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
   menu.classList.toggle('opened');
}

//modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let close = document.getElementsByClassName("modal__header-close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

//slider
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

//promo
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