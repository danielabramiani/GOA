const block = document.getElementById('block');

let xPos = 50;
let yPos = 50;
let moveRight = true;
let moveDown = false;

function moveBlock() {
  if (moveRight && xPos < 300) {
    xPos += 10;
  } else if (!moveRight && xPos > 50) {
    xPos -= 10;
  } else if (xPos >= 300 && yPos < 300) {
    moveRight = false;
    moveDown = true;
    yPos += 10;
  } else if (yPos >= 300 && xPos > 50) {
    moveRight = false;
    moveDown = false;
    xPos -= 10;
  } else if (yPos <= 50) {
    moveRight = true;
    moveDown = false;
  }
  
  block.style.left = xPos + 'px';
  block.style.top = yPos + 'px';
  
  setTimeout(moveBlock, 50);
}

moveBlock();
