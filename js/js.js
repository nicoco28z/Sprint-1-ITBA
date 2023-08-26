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

// Carousel de fotos

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

// Calculadora de moneda

function convertirMoneda() {
    const amount = parseFloat(document.getElementById('cantidad').value);
    const fromCurrency = document.getElementById('fromMoneda').value;
    const toCurrency = document.getElementById('toMoneda').value;
    
    const exchangeRates = {
        usd: {
            eur: 0.93,
            ars: 350.19,
            yen: 0
        },
        eur: {
            usd: 1.08,
            ars: 378.08,
            yen: 0
        },
        ars: {
            usd: 0.0029,
            eur: 0.0026,
            yen: 0
        },
        yen: {
            usd: 0.0068,
            eur: 0.0063,
            ars: 2.39
        }
    };
    
    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * conversionRate;
    
    document.getElementById('resultado').textContent = `Resultado: ${amount} ${fromCurrency} equivale a ${result.toFixed(3)} ${toCurrency}`;
}