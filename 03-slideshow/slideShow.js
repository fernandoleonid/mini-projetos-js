'use strict';

const images = [
    { 'id': '1', 'url':'./img/chrono.jpg' },
    { 'id': '2', 'url':'./img/inuyasha.jpg' },
    { 'id': '3', 'url':'./img/tenchi.jpg' },
    { 'id': '4', 'url':'./img/tenjhotenge.jpg' },
    { 'id': '5', 'url':'./img/yuyuhakusho.jpg' },
    { 'id': '6', 'url':'./img/ippo.png' },
]

const containerItems = document.querySelector('#container-items');
console.log (containerItems);

const selectedIndicators = (number) => {
    const indicators = document.querySelectorAll('.indicators span');
    indicators.forEach( indicator => indicator.classList.remove('selected'));
    indicators[number].classList.add('selected'); 
}

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
        <div class='item' data-number='${image.id}'>
        <img src='${image.url}'>
        </div>
        `
    })
}

loadImages( images, containerItems );



let items = document.querySelectorAll('.item');
const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
    selectedIndicators(items[1].dataset.number-1);
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore (lastItem, items[0]);
    items = document.querySelectorAll ('.item');
    selectedIndicators(items[1].dataset.number-1);
}

const indicators = (event) => {

    let selectedSlide = event.target.dataset.number;
    let visibleSlide = items[1].dataset.number;
   
    if (selectedSlide != visibleSlide) {
        const teste = setInterval(() => {
            next();
            visibleSlide = items[1].dataset.number;

            if (selectedSlide == visibleSlide) clearInterval(teste);

        }, 50);
    }

}
document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
document.querySelector('.indicators').addEventListener('click',indicators);