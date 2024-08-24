document.getElementById('showTextBtn').addEventListener('click', function() {
    document.getElementById('text').classList.add('active');
});

document.getElementById('hideTextBtn').addEventListener('click', function() {
    document.getElementById('text').classList.remove('active');
});