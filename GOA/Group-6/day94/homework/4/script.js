document.getElementById('colorButton').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'rgb(0, 123, 255)' ? '#007bff' : '#ff6347';
});

document.getElementById('textInput').addEventListener('input', function() {
    document.getElementById('textOutput').textContent = `You typed: ${this.value}`;
});

document.getElementById('exampleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Form submitted with name: ${name}`);
});
