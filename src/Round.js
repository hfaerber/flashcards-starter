const Turn = require('../src/Turn');


class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    console.log('cardbeforeTurn', this.currentCard);
    const turn = new Turn(guess, this.currentCard);
    this.turns += 1;
    console.log('turnsAfterTurn', this.turns);
    this.currentCard = this.deck[+1];
    console.log('cardafterTurn', this.currentCard);
    return turn;
// will return giveFeedback
  }

}

module.exports = Round;
