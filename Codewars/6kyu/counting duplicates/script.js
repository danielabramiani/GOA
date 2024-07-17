function duplicateCount(text) {
    text = text.toLowerCase();
    let count = {};
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        count[char] = (count[char] || 0) + 1;
    }
    count = Object.values(count).filter(value => value > 1);
    let result = 0;
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 1) {
            result++;
        }
    }
    return result;
}



