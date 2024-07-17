const bird = document.getElementById('bird');
const pipeContainer = document.getElementById('pipeContainer');
const scoreDisplay = document.getElementById('score');
const gameOverDisplay = document.getElementById('gameOver');
const restartButton = document.getElementById('restartButton');
const flapSound = document.getElementById('flapSound');
const hitSound = document.getElementById('hitSound');
const sky = document.getElementById('sky');
const ground = document.getElementById('ground');

let birdTop = 200;
let gravity = 1.8;
let isGameOver = false;
let score = 0;

document.addEventListener('keydown', flap);
document.addEventListener('click', flap);

restartButton.addEventListener('click', restartGame);

function flap(event) {
  if (!isGameOver) {
    if (event.type === 'click' || event.key === ' ') {
      birdTop -= 50;
      flapSound.currentTime = 0;
      flapSound.play();
    }
  }
}

function createPipe() {
  if (!isGameOver) {
    const pipe = document.createElement('div');
    pipe.classList.add('pipe');
    pipe.style.height = `${Math.random() * 200 + 100}px`;
    pipe.style.left = '400px';
    pipeContainer.appendChild(pipe);

    const pipeMove = setInterval(() => {
      if (!isGameOver) {
        const pipes = document.querySelectorAll('.pipe');
        pipes.forEach(pipe => {
          const pipeLeft = parseInt(pipe.style.left);
          pipe.style.left = `${pipeLeft - 2}px`;

          if (pipeLeft < -80) {
            pipe.remove();
          }

          if (pipeLeft > 0 && pipeLeft < 80 && birdTop < parseInt(pipe.style.height) + 40) {
            hitSound.play();
            gameOver();
          }

          if (pipeLeft === 40) {
            score++;
            scoreDisplay.textContent = score;
          }
        });
      }
    }, 10);
  }
}
  
function gameLoop() {
  birdTop += gravity;
  bird.style.top = `${birdTop}px`;

  if (birdTop > 560 || birdTop < -400) {
    hitSound.play();
    gameOver();
  }

  if (!isGameOver) {
    requestAnimationFrame(gameLoop);
  }
}

function gameOver() {
  isGameOver = true;
  gameOverDisplay.style.display = 'block';
  restartButton.style.display = 'block';
}

function restartGame() {
  location.reload();
}

gameLoop();
createPipe();
setInterval(createPipe, 2500);