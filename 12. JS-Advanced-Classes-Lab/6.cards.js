(function () {
    let suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }


        get face() {
            return this._face;
        }

        set face(face) {
            if(!faces.includes(face)){
                throw new Error('Face does not exist!');
            }

            this._face = face;
        }


        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if(!Object.keys(suits).map(k => suits[k]).includes(suit)){
                throw new Error('Suit does not exist!');
            }

            this._suit = suit;
        }
    }

    return {
        Suits: suits,
        Card: Card
    }
})();