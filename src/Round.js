const Turn = require('../src/Turn');
const Card = require('../src/Card');

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
    const turn = new Turn(guess, this.currentCard);
    this.turns += 1;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    this.currentCard = this.deck[this.turns];
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    var percentCorrect =
      (this.turns - this.incorrectGuesses.length) / this.turns * 100;
    var roundedPercentCorrect = Math.round(percentCorrect);
    return roundedPercentCorrect;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return ;
  }
}

module.exports = Round;
