let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slides");

  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex < 1) {
    slideIndex = document.querySelectorAll(".slides").length;
  }
  if (slideIndex > document.querySelectorAll(".slides").length) {
    slideIndex = 1;
  }
  showSlides();
}

function setCurrentSlide(n) {
  slideIndex = n;
  showSlides();
}
