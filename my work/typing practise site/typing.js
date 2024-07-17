 const textToTypeElement = document.getElementById('text-to-type');
 const userInputElement = document.getElementById('user-input');
 const speedElement = document.getElementById('speed');
 const accuracyElement = document.getElementById('accuracy');
 let startTime, endTime, typedCharacters, correctCharacters;

 function startTyping() {
     const textToType = generateRandomText();
     textToTypeElement.textContent = textToType;
     userInputElement.value = '';
     userInputElement.disabled = false;
     startTime = new Date().getTime();
     typedCharacters = correctCharacters = 0;
     userInputElement.focus();

     userInputElement.addEventListener('input', checkInput);
 }

function generateRandomText() {
     // Replace this with a more extensive text source___
    const texts = ["The quick brown fox jumps over the lazy dog", "Coding is fun", "Practice makes perfect","goa the best academy","tree entire tie hoop jump okay goa till let jump he higher Random"]
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

 function checkInput() {
     const userTyped = userInputElement.value;
     const originalText = textToTypeElement.textContent;
     typedCharacters = userTyped.length;
     correctCharacters = 0;

     for (let i = 0; i < typedCharacters; i++) {
        if (userTyped[i] === originalText[i]) {
            correctCharacters++;
         }
    }

     if (typedCharacters === originalText.length) {
        endTyping();
     }
    
     updateResults();
 }

 function endTyping() {
     userInputElement.disabled = true;
     endTime = new Date().getTime();
 }

 function updateResults() {
     const elapsedTime = (endTime - startTime) / 1000 / 60; // in minutes
     const wordsPerMinute = Math.round((typedCharacters / 5) / elapsedTime);
     const accuracyPercentage = (correctCharacters / typedCharacters) * 100 || 0;

     speedElement.textContent = `Speed: ${wordsPerMinute} WPM`;
     accuracyElement.textContent = `Accuracy: ${accuracyPercentage.toFixed(2)}%`;
 }

startTyping();