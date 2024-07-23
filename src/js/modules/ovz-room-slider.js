document.addEventListener('DOMContentLoaded', function() {

    let currentSlide = 0;
    const slides = document.querySelectorAll('.ovz-slider__slide');
    
    if (!slides.length) return;
    
    const slideNumber = document.querySelector('.ovz-slider__pagination p');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('ovz-slider__slide_active');
            if (i === index) {
                slide.classList.add('ovz-slider__slide_active');
                slideNumber.innerHTML = `${index + 1} / ${slides.length}`
            }
        });
    }

    document.querySelector('.ovz-slider__next-btn').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.querySelector('.ovz-slider__prev-btn').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
});