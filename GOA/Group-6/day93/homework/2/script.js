const circle = document.querySelector('.circle');
const container = document.querySelector('#container');
const radius = 100; 
const speed = 0.02; 
let angle = 0;

function animate() {
    angle += speed;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    circle.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate);
}

animate()