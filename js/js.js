const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');

let currentIndex = 0;
const images = document.querySelectorAll('#carousel img');


// menu todas las imágenes excepto la primera
for (let i = 1; i < images.length; i++) {
    images[i].style.display = 'none';
}

prevBtn && prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateCarousel();
});

nextBtn && nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[currentIndex].style.display = 'block';
}

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});