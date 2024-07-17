function spinWords(sentence) {
    if (sentence.length === 0) {
        return null;
    }
    
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            words[i] = reverse(words[i]);
        }
    }
    
    return words.join(" ");
}

function reverse(word) {
    return word.split("").reverse().join("");
}
