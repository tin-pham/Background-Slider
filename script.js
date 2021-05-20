const body = document.body;
const leftArrow = document.querySelector('.arrow--left');
const rightArrow = document.querySelector('.arrow--right');

let activeSlide = 0;

const slides = document.querySelectorAll('.slides');
rightArrow.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide === slides.length) {
    activeSlide = 0;
  }

  slideContainer();
  slideBody();
});

leftArrow.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide === -1) {
    activeSlide = slides.length - 1;
  }
  slideContainer();
  slideBody();
});

function slideContainer() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[activeSlide].classList.add('active');
}

function slideBody() {
  body.style.background = slides[activeSlide].style.background;
}
