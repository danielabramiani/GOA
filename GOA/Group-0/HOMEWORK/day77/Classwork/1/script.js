document.addEventListener("DOMContentLoaded", function() {
    let parent = document.querySelector('.parent');
    let child = document.querySelector('.child');

    parent.addEventListener('click', function() {
        console.log('Capturing phase: Parent');
        changeColor(parent);
    }, true);

    child.addEventListener('click', function() {
        console.log('Capturing phase: Child');
        changeColor(child);
    }, true); 
    parent.addEventListener('click', function() {
        console.log('Bubbling phase: Parent');
        changeColor(parent);
    }, false); 

    child.addEventListener('click', function() {
        console.log('Bubbling phase: Child');
        changeColor(child);
    }, false); 
    function changeColor(element) {
        element.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
