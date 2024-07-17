const child = document.getElementById("child");
const parent = document.getElementById("parent");
let position = 0;
let moveRight = setInterval(function(){
    if(position == 900){
        clearInterval(moveRight);
        moveLeft();
    }
    child.style.left = position + "px";
    position++;
}, 10);

function moveLeft() {
    let moveBack = setInterval(function(){
        if(position == 0){
            clearInterval(moveBack);
        } else {
            child.style.left = position + "px";
            position--;
        }
    }, 10);
}

function detectAlignment() {
    const childRect = child.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    if (childRect.left !== parentRect.left) {
        moveLeft();
    }
}
setInterval(detectAlignment, 900);