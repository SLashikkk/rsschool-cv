document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".section-code .slider-wrapper");
  const slider = sliderWrapper.querySelector(".slider");
  const sliderLine = slider.querySelector(".slider-line");
  const slides = slider.querySelectorAll(".code-example");
  const next = sliderWrapper.querySelector(".next");
  const prev = sliderWrapper.querySelector(".prev");

  let offset = 0;
  const slidesCount = slides.length;

  function getSlideWidth() {
    return slider.clientWidth;
  }

  function updateSlidePosition() {
    sliderLine.style.transform = `translateX(-${offset}px)`;
  }

  function updateButtons() {
    const slideWidth = getSlideWidth();
    if (offset <= 0) {
      prev.disabled = true;
    } else {
      prev.disabled = false;
    }

    if (offset >= slideWidth * (slidesCount - 1)) {
      next.disabled = true;
    } else {
      next.disabled = false;
    }
  }

  next.addEventListener("click", () => {
    const slideWidth = getSlideWidth();
    if (offset < slideWidth * (slidesCount - 1)) {
      offset += slideWidth;
      updateSlidePosition();
      updateButtons();
    }
  });

  prev.addEventListener("click", () => {
    const slideWidth = getSlideWidth();
    if (offset > 0) {
      offset -= slideWidth;
      updateSlidePosition();
      updateButtons();
    }
  });

  window.addEventListener("resize", () => {
    offset = 0;
    updateSlidePosition();
    updateButtons();
  });

  updateButtons();
});

const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");
const body = document.querySelector("body");
const darkOverlay = document.querySelector(".dark-content");
const clsd = document.querySelector(".nav-item_close")

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
  body.classList.toggle("active");
  darkOverlay.classList.toggle("active");
  clsd.classList.toggle("active");
});


function closeMenu() {
  burger.classList.remove("active");
  navList.classList.remove("active");
  body.classList.remove("active");
  darkOverlay.classList.remove("active");
  clsd.classList.remove("active");
}

navList.addEventListener("click", (event) => {
  if (event.target.classList.contains("nav-link")) {
    closeMenu();
  }
});
darkOverlay.addEventListener("click", () => {
  closeMenu();
});

navList.addEventListener("click", () => {
  closeMenu();
});

window.addEventListener('resize', () => {
  closeMenu();
});


const scrollUpBtn = document.getElementById('scrollUp');
window.addEventListener('scroll', () => {
  if (window.scrollY > 900) { 
    scrollUpBtn.classList.add('show');
  } else {
    scrollUpBtn.classList.remove('show');
  }
});

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
