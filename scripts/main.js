// JavaScript para mostrar el encabezado al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        let scrollTop = window.scrollY;
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelectorAll('.carousel img');
    let currentImageIndex = 0;

    function showNextImage() {
        carouselImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        carouselImages[currentImageIndex].classList.add('active');
    }

    // Initialize carousel
    carouselImages[0].classList.add('active');
    setInterval(showNextImage, 3000); // Cambia cada 3 segundos
});

