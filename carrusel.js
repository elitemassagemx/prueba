document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('elite-carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentIndex = 0;

    function showSlide(index) {
        const itemWidth = items[0].offsetWidth;
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < items.length - 1) {
            showSlide(currentIndex + 1);
        } else {
            showSlide(0);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        } else {
            showSlide(items.length - 1);
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Opcional: deslizamiento automático
    setInterval(nextSlide, 5000);

    // Opcional: soporte para gestos táctiles
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', function(event) {
        touchStartX = event.changedTouches[0].screenX;
    }, false);

    carousel.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            nextSlide();
        }
        if (touchEndX > touchStartX) {
            prevSlide();
        }
    }
});
