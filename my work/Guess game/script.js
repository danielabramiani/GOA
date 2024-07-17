const jokerNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const guess = parseInt(guessInput.value);
    const message = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts++;
        if (guess === jokerNumber) {
            message.textContent = `Congratulations! You've guessed the number in ${attempts} attempts!`;
            message.style.color = 'green';
            guessInput.disabled = true;
        } else if (guess < jokerNumber) {
            message.textContent = 'low! Try again.';
            message.style.color = 'red';
        } else {
            message.textContent = 'high! Try again.';
            message.style.color = 'red';
        }
    }
}
