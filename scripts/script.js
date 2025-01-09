document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100 && currentScroll > lastScroll) {
            header.classList.add('hidden'); // Oculta el encabezado al desplazarse hacia abajo
        } else if (currentScroll <= lastScroll || currentScroll <= 100) {
            header.classList.remove('hidden'); // Muestra el encabezado
        }

        lastScroll = currentScroll;
    });
});
