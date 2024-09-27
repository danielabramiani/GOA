document.getElementById('button').addEventListener('click', generateRandomNumbers);

function generateRandomNumbers() {
  let paragraphs = document.getElementsByClassName('num');
  for (let i = 0; i < paragraphs.length; i++) {
    let randomNumber = Math.floor(Math.random() * 10000000) + 1;
    paragraphs[i].innerText = 'Random Num: ' + randomNumber;
  }
}
