document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const prevButton1 = document.getElementById('prevButton1');
    const nextButton1 = document.getElementById('nextButton1');
    const cardsContainer = document.querySelector('.cards');
    const cardsContainer1 = document.getElementById('cards1');

    const cards = document.querySelectorAll('.card');

    let currentIndex = 0;
    let currentIndex1 = 0; // Nuevo índice para el segundo carrusel
    const numCards = cards.length;
    const visibleCards = 3; // Número de tarjetas visibles a la vez
    const cardWidth = cards[0].offsetWidth + parseFloat(getComputedStyle(cards[0]).marginRight) + parseFloat(getComputedStyle(cards[0]).marginLeft); // Ancho de cada tarjeta más el gap

    function updateTransform() {
        cardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function updateTransform1() {
        cardsContainer1.style.transform = `translateX(-${currentIndex1 * cardWidth}px)`;
    }

    prevButton.addEventListener('click', function () {
        cardsContainer.style.transition = 'transform 0.4s ease'; // Ajusta la duración de la transición aquí (0.4s)

        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = numCards - visibleCards;
        }
        updateTransform();
    });

    nextButton.addEventListener('click', function () {
        cardsContainer.style.transition = 'transform 2s ease'; // Ajusta la duración de la transición aquí (0.7s)

        if (currentIndex < numCards - visibleCards) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateTransform();
    });

    prevButton1.addEventListener('click', function () {
        cardsContainer1.style.transition = 'transform 0.4s ease'; // Ajusta la duración de la transición aquí (0.4s)

        if (currentIndex1 > 0) {
            currentIndex1--;
        } else {
            currentIndex1 = numCards - visibleCards;
        }
        updateTransform1();
    });

    nextButton1.addEventListener('click', function () {
        cardsContainer1.style.transition = 'transform 2s ease'; // Ajusta la duración de la transición aquí (0.7s)

        if (currentIndex1 < numCards - visibleCards) {
            currentIndex1++;
        } else {
            currentIndex1 = 0;
        }
        updateTransform1();
    });
});
