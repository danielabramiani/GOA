$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
});

let changeBackgroundImageSeason = clickedImage => {
    const milkaSection = document.getElementById('commerical-section');
    const images = document.querySelectorAll('.images img');
    images.forEach(image => image.parentElement.classList.remove('commerical-active-image'));
    clickedImage.parentElement.classList.add('commerical-active-image');
    const imageSrc = clickedImage.src;
    milkaSection.style.backgroundImage = `url(${imageSrc})`;
}