let box = document.querySelector('.box');
let container = document.querySelector('.box-container');
let containerWidth = container.offsetWidth;
let boxWidth = box.offsetWidth;
let position = 0;
let direction = 1;

function moveBox() {
    position += 2 * direction;
    if (position >= containerWidth - boxWidth || position <= 0) {
        direction *= -1; 
    }
    box.style.left = position + 'px';
}

setInterval(moveBox, 20);

