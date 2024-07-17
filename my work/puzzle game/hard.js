const words = ["GOAL ORIENTED ACADEMY", "ANXIETY", "CORRUPTION", "GEOGRAPHY", "DEMOCRATIC", "SESQUIPEDALIAN", "PHENOMEN"];
let score = 0;

function generateNewWord() {
    const word = words[Math.floor(Math.random() * words.length)];
    const shuffledWord = word.split('').sort(() => 0.5 - Math.random()).join('');
    return { word, shuffledWord };
}

let { word, shuffledWord } = generateNewWord();

const puzzleElement = document.getElementById('puzzle');
const resultElement = document.getElementById('result');
const scoreValueElement = document.getElementById('scoreValue');

puzzleElement.textContent = shuffledWord;

document.getElementById('checkBtn').addEventListener('click', function() {
    const guessedWord = document.getElementById('guessInput').value.trim().toUpperCase();
    if (guessedWord === word) {
        resultElement.textContent = 'Congratulations! You got it right!';
        score++;
        scoreValueElement.textContent = score;
        const newWord = generateNewWord();
        word = newWord.word;
        shuffledWord = newWord.shuffledWord;
        puzzleElement.textContent = shuffledWord;
    } else {
        resultElement.textContent = 'Sorry, that\'s incorrect. Try again!';
    }
    document.getElementById('guessInput').value = '';
});
