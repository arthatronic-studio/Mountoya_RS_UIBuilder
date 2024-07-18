let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let item = document.querySelectorAll('.carousel .item');
let countItem = item.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active = active + 1 >= countItem ? 0 : active + 1;
    other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if (itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if (itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if (itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    item.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    item[active].classList.add('active');
    item[other_1].classList.add('other_1');
    item[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    let autoPlay = setInterval(() => {
        next.click();
    }, 5000);

}
let autoPlay = setInterval(() => {
    next.click();
}, 5000);

document.getElementById('refill1').addEventListener('click', function () {
    window.location.href = 'home.html';
});

document.getElementById('refill2').addEventListener('click', function () {
    window.location.href = 'home.html';
});

document.getElementById('refill3').addEventListener('click', function () {
    window.location.href = 'home.html';
});

document.getElementById('refill4').addEventListener('click', function () {
    window.location.href = 'home.html';
});