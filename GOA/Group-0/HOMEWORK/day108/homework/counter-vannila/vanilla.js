let scores = [0, 0, 0];

const updateDisplay = (id, value) => {
    document.getElementById(id).textContent = `Count: ${value}`;
};

const handleScoreChange = (index, change) => {
    scores[index] += change;
    updateDisplay(`count${index + 1}`, scores[index]);
};

const resetScore = (index) => {
    scores[index] = 0;
    updateDisplay(`count${index + 1}`, scores[index]);
};

for (let i = 0; i < 3; i++) {
    document.getElementById(`incr${i + 1}`).addEventListener("click", () => handleScoreChange(i, 1));
    document.getElementById(`decr${i + 1}`).addEventListener("click", () => handleScoreChange(i, -1));
    document.getElementById(`reset${i + 1}`).addEventListener("click", () => resetScore(i));
}
