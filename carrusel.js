function initCarousel() {
    const carousel = document.getElementById('elite-carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const itemWidth = items[0].offsetWidth + 20; // width + margin
    const visibleItems = 3; // Número de elementos visibles a la vez
    let currentIndex = 0;

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < items.length - visibleItems) {
            showSlide(currentIndex + 1);
        } else {
            showSlide(0);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        } else {
            showSlide(items.length - visibleItems);
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Opcional: deslizamiento automático
    // setInterval(nextSlide, 5000);
}
