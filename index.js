class Card {
    constructor(suit, key) {
        this.suit = suit;
        this.key = key;
    }

    show() {
        document.getElementById("img-card").src = `./png/${this.key}_of_${this.suit}.png`;
        console.log(`Card is the ${this.key} of ${this.suit}`);
        return this;
    }
}

class Deck {
    constructor() {
        this.deck = [];
        this.shuffle();
        const suits = ["hearts", "diamonds", "spades", "clubs"];
        const nums = {"ace": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10, "jack": 11, "queen": 12, "king": 13};
        for (let i=0; i < suits.length; i++){
            for (let key in nums){
                this.deck.push(new Card(suits[i], key));
            }
        }
        return this;
    }

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

    deal_card() {
        if (this.deck.length === 0) return {
            show: () => {
                console.log("no cards left to show");
            }
        };

        const dealtCard = this.deck.pop();
        console.log(`Dealt a card. The deck has ${this.deck.length} cards left`);
        return dealtCard;
    }
}

//code to test functionality of the classes
const deck1 = new Deck();
deck1.shuffle();

for (let i = 1; i <= 53; i++) {
    const card = deck1.deal_card().show();
}