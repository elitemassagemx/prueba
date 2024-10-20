function initCarousel() {
    console.log('Initializing carousel');
    const carousel = document.getElementById('elite-carousel');
    if (!carousel) {
        console.error('Carousel element not found');
        return;
    }
    console.log('Carousel element found:', carousel);

    const items = carousel.querySelectorAll('.carousel-item');
    if (items.length === 0) {
        console.error('No carousel items found');
        return;
    }
    console.log('Number of carousel items:', items.length);

    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    if (!prevBtn || !nextBtn) {
        console.error('Carousel control buttons not found');
        return;
    }

    const itemWidth = items[0].offsetWidth + 20; // width + margin
    console.log('Item width:', itemWidth);

    const visibleItems = 3; // Número de elementos visibles a la vez
    let currentIndex = 0;

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
        currentIndex = index;
        console.log('Current index:', currentIndex);
    }

    function nextSlide() {
        console.log('Next slide clicked');
        if (currentIndex < items.length - visibleItems) {
            showSlide(currentIndex + 1);
        } else {
            showSlide(0);
        }
    }

    function prevSlide() {
        console.log('Previous slide clicked');
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        } else {
            showSlide(items.length - visibleItems);
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Manejo de errores de carga de imágenes
    carousel.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${this.src}`);
            this.src = 'https://raw.githubusercontent.com/elitemassagemx/Home/main/IMG/error.webp';
        });
    });

    console.log('Carousel initialization complete');
}

// Llamar a initCarousel cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initCarousel);
