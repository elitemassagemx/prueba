function initCarousel() {
    console.log('Initializing carousel');
    const carousel = document.getElementById('carrusel-container');
    if (!carousel) {
        console.error('Carousel element not found');
        return;
    }
    console.log('Carousel element found:', carousel);
    console.log('Carousel HTML:', carousel.innerHTML);

    const items = carousel.querySelectorAll('.carousel-item');
    if (items.length === 0) {
        console.error('No carousel items found');
        return;
    }
    console.log('Number of carousel items:', items.length);

    const prevBtn = carousel.querySelector('.carousel-control.prev');
    const nextBtn = carousel.querySelector('.carousel-control.next');
    if (!prevBtn || !nextBtn) {
        console.error('Carousel control buttons not found');
        return;
    }

    const itemWidth = items[0].offsetWidth;
    console.log('Item width:', itemWidth);
    let currentIndex = 0;

    function showSlide(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.style.display = 'block';
                item.classList.add('active');
            } else {
                item.style.display = 'none';
                item.classList.remove('active');
            }
        });
        currentIndex = index;
        console.log('Current index:', currentIndex);
        updateIndicators(index);
    }

    function nextSlide() {
        console.log('Next slide clicked');
        showSlide((currentIndex + 1) % items.length);
    }

    function prevSlide() {
        console.log('Previous slide clicked');
        showSlide((currentIndex - 1 + items.length) % items.length);
    }

    function updateIndicators(index) {
        const indicators = carousel.querySelectorAll('.carousel-indicators button');
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.classList.remove('active');
                indicator.removeAttribute('aria-current');
            }
        });
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Configurar indicadores
    const indicators = carousel.querySelectorAll('.carousel-indicators button');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });

    // Manejo de errores de carga de imágenes
    carousel.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', function() {
            console.log(`Image loaded successfully: ${this.src}`);
        });
        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${this.src}`);
            this.src = 'https://raw.githubusercontent.com/elitemassagemx/Home/main/IMG/error.webp';
        });
    });

    // Iniciar el carrusel
    showSlide(0);
    console.log('Carousel initialization complete');
}
