function makeCard(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['S', 'H', 'D', 'C'];
    const literPerSuit = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if(!faces.includes(face)){
        throw new Error("Error");
    }

    if(!suits.includes(suit)){
        throw new Error("Error");
    }

    return {
        face: face,
        suit: suit,
        toString: function () {
            return face + literPerSuit[suit];
        }
    }
}