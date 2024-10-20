function initCarousel() {
    const carousel = document.getElementById('carrusel-container');
    const carouselList = carousel.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.carousel-control.prev');
    const nextBtn = carousel.querySelector('.carousel-control.next');
    
    let currentIndex = 0;

    function showSlide(index) {
        const itemWidth = items[0].offsetWidth;
        carouselList.style.transform = `translateX(-${index * itemWidth}px)`;
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

    // Manejo de errores de carga de imágenes
    carousel.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://raw.githubusercontent.com/elitemassagemx/Home/main/IMG/error.webp';
        });
    });

    // Iniciar el carrusel
    showSlide(0);
}

document.addEventListener('DOMContentLoaded', initCarousel);
