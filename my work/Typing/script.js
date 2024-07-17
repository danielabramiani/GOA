const textDisplay = document.getElementById('text-display');
const input = document.getElementById('input');
const timerDisplay = document.getElementById('timer');
const resultsDisplay = document.getElementById('results');
let timerInterval;
let startTime;
let endTime;
let errors = 0;

const texts = [
    "this is an example text for typing practice",
    "the quick brown fox jumps over the lazy dog",
    "programming is fun and challenging",
    "practice makes perfect",
    "keep calm and type on",
    "coding is the language of the future",
    "innovation distinguishes between a leader and a follower",
    "success is not final, failure is not fatal: It is the courage to continue that counts",
    "strive for progress, not perfection"
];

function startTimer() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    endTime = new Date().getTime();
    clearInterval(timerInterval);
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const timeElapsed = Math.floor((currentTime - startTime) / 1000);
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    timerDisplay.textContent = `Time: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

function calculateAccuracy(charsTyped, errors) {
    const totalChars = textDisplay.textContent.length;
    return ((charsTyped - errors) / charsTyped) * 100;
}

function updateResults() {
    const charsTyped = input.value.length;
    const accuracy = calculateAccuracy(charsTyped, errors);
    resultsDisplay.textContent = `Accuracy: ${accuracy.toFixed(2)}% | Errors: ${errors}`;
}

function resetTest() {
    clearInterval(timerInterval);
    input.value = '';
    timerDisplay.textContent = 'Time: 0:00';
    resultsDisplay.textContent = '';
    errors = 0;
    startTime = null;
    endTime = null;
}

function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

input.addEventListener('input', function() {
    const typedText = textDisplay.textContent.substr(0, input.value.length);
    if (input.value === typedText) {
        input.style.borderColor = '#ced4da';
        if (input.value === textDisplay.textContent) {
            stopTimer();
            updateResults();
        }
    } else {
        input.style.borderColor = 'red';
        errors++;
    }
});

input.addEventListener('keypress', function() {
    if (!startTime) {
        startTimer();
    }
});

textDisplay.textContent = getRandomText();
