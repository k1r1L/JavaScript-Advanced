function cardDeckBuilder(selector) {
    let suits = {
        'C': '\u2663',
        'D': '\u2666',
        'H': '\u2665',
        'S': '\u2660'
    };
    let container = $(selector);

    function addCard(face, suit) {
        let card = $(`<div class="card">${face} ${suits[suit]}</div>`);
        card.click(function () {
            let allCards = $(selector)
                .find('.card')
                .toArray()
                .reverse()
                .forEach(card => container.append(card));
        });

        container.append(card);
    }

    return {
        addCard
    }
}