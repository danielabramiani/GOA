let counter = 0;

function incrementCounter() {
  counter++;
  document.getElementById('counter').innerText = counter;

  if (counter === 10) {
    document.getElementById('increment').removeEventListener('click', incrementCounter);
  }
}

document.getElementById('increment').addEventListener('click', incrementCounter);
