// animation changement de couleur nav bar

const nav = document.getElementById('nav');

setInterval(function changeBg() {
    let navPos = nav.getBoundingClientRect();
    if(navPos.top === 0) {
        nav.classList.add('mybg');
    } else {
        nav.classList.remove('mybg');
    }
}, 100);

// animation menu

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
});