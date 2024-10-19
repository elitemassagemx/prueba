document.addEventListener('DOMContentLoaded', function() {
    const carruselContainer = document.getElementById('carrusel-container');

    // Cargar el contenido del carrusel.html
    fetch('carrusel.html')
        .then(response => response.text())
        .then(data => {
            carruselContainer.innerHTML = data;
            initCarrusel();
        })
        .catch(error => {
            console.error('Error al cargar el carrusel:', error);
            carruselContainer.innerHTML = '<p>Error al cargar el carrusel. Por favor, intente más tarde.</p>';
        });

    function initCarrusel() {
        const carrusel = document.getElementById('elite-carrusel');
        const items = carrusel.querySelectorAll('.carrusel-item');
        const prevBtn = document.querySelector('.carrusel-control.prev');
        const nextBtn = document.querySelector('.carrusel-control.next');
        let currentIndex = 0;

        function showSlide(index) {
            if (index < 0) index = items.length - 1;
            if (index >= items.length) index = 0;
            carrusel.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Cambio automático cada 5 segundos
        setInterval(nextSlide, 5000);
    }
});
