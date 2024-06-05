
    const cardsContainer = document.querySelector('.cards');
    const cardWidth = cardsContainer.querySelector('.card').offsetWidth;
    const numCards = cardsContainer.querySelectorAll('.card').length;
    const visibleCards = 3; // Número de tarjetas visibles a la vez

    let currentIndex = 0;

    function moveCards(direction) {
        if (direction === 'next' && currentIndex < numCards - visibleCards) {
            currentIndex++;
        } else if (direction === 'prev' && currentIndex > 0) {
            currentIndex--;
        }

        const displacement = -currentIndex * cardWidth;
        cardsContainer.style.transform = `translateX(${displacement}px)`;
    }

    document.querySelector('.prev-btn').addEventListener('click', () => moveCards('prev'));
    document.querySelector('.next-btn').addEventListener('click', () => moveCards('next'));

