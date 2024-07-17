 // Function to play all tracks in random order
 function playAllTracks() {
    // Array of audio element IDs
    let audioElements = ['audio1', 'audio2'];
    // Add more audio element IDs for other tracks as needed

    // Shuffle the array to play tracks in random order
    shuffleArray(audioElements);

    // Play each audio track with a delay
    audioElements.forEach(function(audioId, index) {
        setTimeout(function() {
            let audio = document.getElementById(audioId);
            if (audio) {
                audio.play();
            }
        }, index * 3000); // Adjust the delay as needed (currently set to 3 seconds)
    });
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}