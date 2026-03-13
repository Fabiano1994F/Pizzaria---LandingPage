let currentIdx = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIdx = (currentIdx + 1) % slides.length;
    showSlide(currentIdx);
}

function currentSlide(index) {
    currentIdx = index;
    showSlide(currentIdx);
}

// Troca automática a cada 5 segundos
setInterval(nextSlide, 5000);


    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Opcional: Fecha o menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
