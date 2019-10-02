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
    // console.log('cardbeforeTurn', this.currentCard);
    const turn = new Turn(guess, this.currentCard);
    this.turns += 1;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    // console.log('turnsAfterTurn', this.turns);
    this.currentCard = this.deck[this.turns];
    // console.log('cardafterTurn', this.currentCard);
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    var percentCorrect = (this.turns - this.incorrectGuesses.length) / this.turns * 100;
    var roundedPercentCorrect = Math.round(percentCorrect);
    console.log('rounded', roundedPercentCorrect);
    return roundedPercentCorrect;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }

}

module.exports = Round;
