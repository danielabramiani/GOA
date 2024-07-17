function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 1001);
  let randomNumberDisplay = document.getElementById('randomNumber');
  
  randomNumberDisplay.textContent = 'Random Number: ' + randomNumber;
}
  