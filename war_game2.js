// Rules for a simple game of WAR:
// The objective is to win the most rounds.
// Whoever has the highest card wins (player1Card > player2Card)
//The winner of the round gets 1 point.
// If the cards are equal, no points are awarded.  Play next round.

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }

    shuffleDeck() {
        let stack1, stack2, temp;
        for (let i = 0; i < 100; i++) {
            stack1 = Math.floor((Math.random() * this.cards.length));
            stack2 = Math.floor((Math.random() * this.cards.length));
            temp = this.cards[stack1];
            this.cards[stack1] = this.cards[stack2];
            this.cards[stack2] = temp;
        }
        return this.players
    }
}

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
        this.playerScore = 0; //I was unable to access it to change it (++)
    }
}

class WARGame {
    constructor() {
        this.players = [];

    }

    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);
    }

    flipCards() {
        let player1Card, player2Card;
        player1Card = this.players[0].playerCards.pop();
        player2Card = this.players[1].playerCards.pop();
        console.log(this.players[0].playerName + ": " + player1Card.suit + " " + player1Card.rank);
        console.log(this.players[1].playerName + ": " + player2Card.suit + " " + player2Card.rank);
        if (player1Card.value > player2Card.value) {
            console.log(this.players[0].playerName + " wins!");
            this.players[0].playerScore++;

        } else if (player2Card.value > player1Card.value) {
            console.log(this.players[1].playerName + " wins!");
            this.players[1].playerScore++;
        } else {
            console.log("Tie - No winner!");
        }
    }

    showWinner() {
        console.log(this.players[0].playerName + ": " + this.players[0].playerScore); // got 0
        console.log(this.players[1].playerName + ": " + this.players[1].playerScore); // got 0

        if (this.players[0].playerScore > this.players[1].playerScore) {
            console.log(this.players[0].playerName.toUpperCase() + " IS THE WINNER! :D");
        } else if (this.players[1].playerScore > this.players[0].playerScore) {
            console.log(this.players[1].playerName.toUpperCase() + " IS THE WINNER! :D");
        } else {
            console.log("NO WINNER! :(")
        }
    }
}

console.log("--------------WAR GAME SIMULATION---------------")
let game = new WARGame();

for (let i = 0; i <= 26; i++) {
    game.start('Mario', 'Luigi');
    game.flipCards();
}

console.log(`------------------------
      FINAL SCORE
------------------------`);
game.showWinner();



