class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    // console.log(this.card);
    return this.card;
  }

  evaluateGuess() {
      return (this.guess === this.card.correctAnswer)? true : false;
    //
    // if (this.guess === this.card.correctAnswer) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  giveFeedback() {
    var correctCheck = this.evaluateGuess();
    return (correctCheck === true)? 'correct!' : 'incorrect!';
  }

}

module.exports = Turn;
