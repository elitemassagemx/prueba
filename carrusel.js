document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    const carousel = document.getElementById('elite-carousel');
    console.log("Carousel element:", carousel);

    if (carousel) {
        const items = carousel.querySelectorAll('.carousel-item');
        console.log("Carousel items:", items);
        console.log("Number of items:", items.length);

        if (items.length > 0) {
            const prevBtn = document.querySelector('.carousel-control.prev');
            const nextBtn = document.querySelector('.carousel-control.next');
            let currentIndex = 0;

            function showSlide(index) {
                const itemWidth = items[0].offsetWidth + 20; // width + margin
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

            if (prevBtn && nextBtn) {
                nextBtn.addEventListener('click', nextSlide);
                prevBtn.addEventListener('click', prevSlide);
                console.log("Navigation buttons set up");
            } else {
                console.error("Navigation buttons not found");
            }

            // Opcional: deslizamiento automático
            setInterval(nextSlide, 5000);
        } else {
            console.error("No carousel items found");
        }
    } else {
        console.error('Carousel element not found');
    }
});
