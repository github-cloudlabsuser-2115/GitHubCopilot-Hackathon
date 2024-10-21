document.addEventListener('DOMContentLoaded', () => {
    const size = 4;
    const board = generateBoard(size);
    const gameBoard = document.getElementById('game-board');
    const winMessage = document.getElementById('win-message');
    let flippedCards = [];
    let matchedCards = [];

    function generateBoard(size) {
        const symbols = Array.from({ length: (size * size) / 2 }, (_, i) => i + 1);
        const board = [...symbols, ...symbols];
        return board.sort(() => Math.random() - 0.5);
    }

    function createCard(symbol, index) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back">${symbol}</div>
            </div>
        `;
        card.addEventListener('click', () => handleCardClick(card, index));
        return card;
    }

    function handleCardClick(card, index) {
        if (flippedCards.length === 2 || card.classList.contains('flipped') || matchedCards.includes(index)) return;

        card.classList.add('flipped');
        flippedCards.push({ card, index });

        if (flippedCards.length === 2) {
            const [first, second] = flippedCards;
            if (board[first.index] === board[second.index]) {
                matchedCards.push(first.index, second.index);
                flippedCards = [];
                if (matchedCards.length === board.length) {
                    winMessage.style.display = 'block';
                }
            } else {
                setTimeout(() => {
                    first.card.classList.remove('flipped');
                    second.card.classList.remove('flipped');
                    flippedCards = [];
                }, 1000);
            }
        }
    }

    board.forEach((symbol, index) => {
        const card = createCard(symbol, index);
        gameBoard.appendChild(card);
    });
});