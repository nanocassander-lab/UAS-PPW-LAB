document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    const visibleSlides = 3;

    let currentIndex = 0;

    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function moveToNextSlide() {
        if (currentIndex < slides.length - visibleSlides) {
            currentIndex++;
            updateSlidePosition();
        }
    }

    function moveToPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    }

    nextButton.addEventListener('click', moveToNextSlide);
    prevButton.addEventListener('click', moveToPrevSlide);
    window.addEventListener('resize', updateSlidePosition);
});
