const slideshow = document.querySelector(".slideshow");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const btnContainer = document.querySelector(".btn-container");
console.log(btnContainer);
let currentIndex = 0;

prev.addEventListener("click", () => {
  prevSlide();
});

next.addEventListener("click", () => {
  nextSlide();
});

const prevSlide = () => {
  slides[currentIndex].classList.remove("active");

  if (currentIndex === 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex--;
  }

  slides[currentIndex].classList.add("active");
};

const nextSlide = () => {
  slides[currentIndex].classList.remove("active");

  if (currentIndex === totalSlides - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  slides[currentIndex].classList.add("active");
};

const moveItem = () => {
  if (window.innerWidth < 960) {
    slideshow.appendChild(btnContainer);
  }
};
window.addEventListener("resize", moveItem);