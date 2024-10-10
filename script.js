const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;
let autoSlideInterval;

function updateCarousel() {
    const slideWidth = slides[currentIndex].clientWidth;
    carousel.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

    // Ajuste a opacidade das imagens
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.opacity = '1';
        } else {
            slide.style.opacity = '0.5';
        }
    });
}

function goToNextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function goToPrevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    updateCarousel();
}

prevButton.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    goToPrevSlide();
    startAutoSlide();
});

nextButton.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    goToNextSlide();
    startAutoSlide();
});

window.addEventListener('resize', updateCarousel);

function startAutoSlide() {
    autoSlideInterval = setInterval(goToNextSlide, 5000);
}

// Inicialize o carrossel com a opacidade correta e inicie o auto-slide
updateCarousel();
startAutoSlide();