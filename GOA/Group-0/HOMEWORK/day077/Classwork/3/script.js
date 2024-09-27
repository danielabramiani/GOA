document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');
    const slideWidth = slider.offsetWidth; 
    let currentSlide = 0; 

    const nextSlide = function() {
        currentSlide++;
        if (currentSlide >= slides.children.length) {
            currentSlide = 0; 
        }
        updateSlidePosition();
    };

    const prevSlide = function() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.children.length - 1; 
        }
        updateSlidePosition();
    };

    const updateSlidePosition = function() {
        slides.style.transition = 'transform 0.9s ease-in-out';
        slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    };

    slider.addEventListener('click', function() {
        nextSlide();
        slides.style.transition = 'none'; 
    });
});

