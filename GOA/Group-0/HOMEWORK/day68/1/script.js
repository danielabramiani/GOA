let count = 0;

function incrementCounter() {
  count++;
  document.getElementById('counter').innerText = 'Counter: ' + count;
  changeColors();
}

function changeColors() {
  let div = document.getElementById('div');
  let colors = ['#f09', '#999', '#fff', '#f00', '#9ff'];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  div.style.backgroundColor = randomColor;
  document.getElementById('counter').style.color = randomColor;
}

document.getElementById('Button').addEventListener('click', incrementCounter);
