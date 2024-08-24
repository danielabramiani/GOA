function addText() {
    const textContainer = document.getElementById('text-container');
    const newTextDiv = document.createElement('div');
    newTextDiv.className = 'text-item';
    newTextDiv.textContent = 'New Text';
    textContainer.appendChild(newTextDiv);
}

function removeText() {
    const textContainer = document.getElementById('text-container');
    const lastTextDiv = textContainer.lastElementChild;
    if (lastTextDiv) {
        textContainer.removeChild(lastTextDiv);
    }
}
document.getElementById('add-text-button').addEventListener('click', addText);
document.getElementById('remove-text-button').addEventListener('click', removeText);

